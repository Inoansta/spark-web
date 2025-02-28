import { ComponentProps, FC } from 'react';
import { Comment } from '@/assets/strengthWeakness/Comment';
import { Dollar } from '@/assets/strengthWeakness/Dollar';
import { Like } from '@/assets/strengthWeakness/Like';
import { AddIcon } from '@/assets/svg/AddIcon';
import { Avatar } from '@/assets/svg/Avatar/Avatar';
import Time from '@/assets/svg/Detail/Time';
import EyeIcon from '@/assets/svg/EyeIcon';
import type { SvgProps } from '@/assets/svg/nav/UnifiedSettingIcon';
import { ResponseChannelStats, Result } from '../model/type';
import { transformLabelData } from './formatData';

const dateLabels = ['90 ~ 60일', '60 ~ 30일', '30 ~ 최근'];
const strengthsColor = ['bg-gradient8', 'bg-primary10', 'bg-primary11'];
const weaknessesColor = ['bg-gradient5', 'bg-gradient4', 'bg-gradient3'];

// 문구 수정
// 유지도 추가

const titleLabel: Record<
  Exclude<keyof Result['growthRates'], 'shares'>,
  {
    title: string;
    Icon: FC<ComponentProps<'svg'>> | FC<SvgProps>; // ✅ React.FC 타입으로 변경
    description: {
      strengths: string;
      weakness: string;
    };
  }
> = {
  views: {
    title: '조회수',
    Icon: EyeIcon, // ✅ 이제 <Icon /> 형태로 사용할 수 있음
    description: {
      strengths: '콘텐츠가 입소문 타고 있네요! 계속 달려봐요!',
      weakness:
        '잠시 주춤하고 있지만, 구독자의 관심을 다시 끌 수 있는 순간이 곧 올 거예요.',
    },
  },
  netSubscribers: {
    title: '신규 구독자수',
    Icon: Avatar, // ✅ <Avatar /> 형태로 사용 가능
    description: {
      strengths:
        '채널이 성장하고 있어요! 지금처럼 꾸준히 하면 더 많은 팬이 생길 거예요.',
      weakness:
        '새 구독자가 줄고 있어요. 어떤 콘텐츠에서 이탈이 많은지 확인해야 해요.',
    },
  },
  likes: {
    title: '좋아요 수',
    Icon: Like,
    description: {
      strengths: '업로드가 활발해요! 꾸준한 활동은 채널 성장에 도움이 돼요.',
      weakness:
        '구독자들이 원하는 게 뭔지 고민해보면 다시 좋아요가 늘어날 거예요.',
    },
  },
  comments: {
    title: '댓글수',
    Icon: Comment,
    description: {
      strengths: '댓글 폭주 중! 팬들과의 소통이 활발하네요!',
      weakness:
        '댓글이 줄었네요. 팔로워가 반응할 만한 질문이나 이벤트를 시도해볼까요?',
    },
  },
  estimatedRevenue: {
    title: '수익',
    Icon: Dollar,
    description: {
      strengths: '수익이 상승했어요! 유용한 정보를 담은 콘텐츠, 대성공이에요!',
      weakness:
        '수익이 감소했어요.  멤버십이나 슈퍼챗 같은 추가 수익원을 검토해보는 건 어때요?',
    },
  },
  averageViewDuration: {
    title: '평균 시청 지속 시간',
    Icon: Time,
    description: {
      strengths:
        '시청자들이 콘텐츠에 더 오래 머물고 있어요. 꾸준한 노력의 결과가 빛을 보고 있네요.',
      weakness:
        '시청 시간이 줄었어요. 시청자 데이터를 분석해 이탈 구간을 찾아보는 것을 추천해요!',
    },
  },
  uploadedVideos: {
    title: '영상 업로드 수',
    Icon: AddIcon,
    description: {
      strengths: '꾸준한 업로드 덕분에 채널이 활발하게 성장하고 있어요!',
      weakness:
        '업로드가 줄었어요. 정해진 루틴으로 업로드하면 채널 성장에 도움이 돼요.',
    },
  },
};

/**
 * transformDataStrengthWeakness 함수
 * - 데이터를 strengths & weaknesses 형식으로 변환
 */
export default function transformDataStrengthWeakness(
  data: ResponseChannelStats,
) {
  const { stats, strengths, weaknesses } = data.result;

  // 데이터 최신순으로 정렬
  const reversedStats = stats.slice().reverse();

  /**
   * 특정 카테고리에 대한 데이터를 변환
   */
  const transformData = (
    title: 'strengths' | 'weaknesses',
    category: keyof typeof titleLabel, // titleLabel의 키값만 받도록 제한
  ) => {
    return reversedStats.map((stat, index) => ({
      date: dateLabels[index],
      label: transformLabelData(category, stat[category]),
      color:
        title === 'strengths' ? strengthsColor[index] : weaknessesColor[index],
      graphValue: stat[category],
    }));
  };

  /**
   * strengths 및 weaknesses 변환
   */
  const transformedData = {
    strengths: strengths.map((category) => ({
      info: titleLabel[category as keyof typeof titleLabel], // 타입 캐스팅
      data: transformData('strengths', category as keyof typeof titleLabel),
    })),
    weaknesses: weaknesses.map((category) => ({
      info: titleLabel[category as keyof typeof titleLabel], // 타입 캐스팅
      data: transformData('weaknesses', category as keyof typeof titleLabel),
    })),
  };

  return { transformedData, weaknesses };
}
