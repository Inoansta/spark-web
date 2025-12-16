import { Comment } from '@/assets/strengthWeakness/Comment';
import { Dollar } from '@/assets/strengthWeakness/Dollar';
import { Like } from '@/assets/strengthWeakness/Like';
import { AddIcon } from '@/assets/svg/AddIcon';
import { Avatar } from '@/assets/svg/Avatar/Avatar';
import EyeIcon from '@/assets/svg/EyeIcon';
import { transformMetaLabelData } from '@/domains/Youtube/StrengthWeakness/lib/formatData';
import { ResponseInstaChannelStats } from '@/domains/Youtube/StrengthWeakness/model/type';

const dateLabels = ['90 ~ 60일', '60 ~ 30일', '30 ~ 최근'];
const strengthsColor = ['bg-gradient8', 'bg-primary10', 'bg-primary11'];
const weaknessesColor = ['bg-gradient5', 'bg-gradient4', 'bg-gradient3'];

// 문구 수정
// 유지도 추가

const titleLabel = {
  viewsNonFollowers: {
    title: '비팔로워의 조회수',
    Icon: EyeIcon, // ✅ 이제 <Icon /> 형태로 사용할 수 있음
    description: {
      strengths: '콘텐츠가 대중들에게 입소문 타고 있네요! 계속 달려봐요!',
      weakness:
        '잠시 주춤하고 있지만, 대중들의 관심을 다시 끌 수 있는 순간이 곧 올 거예요.',
    },
  },
  viewsFollowers: {
    title: '팔로워의 조회수',
    Icon: EyeIcon, // ✅ 이제 <Icon /> 형태로 사용할 수 있음
    description: {
      strengths: '콘텐츠가 팔로워들의 입소문 타고 있네요! 계속 달려봐요!',
      weakness:
        '잠시 주춤하고 있지만, 팔로워들의 관심을 다시 끌 수 있는 순간이 곧 올 거예요.',
    },
  },
  followers: {
    title: '신규 팔로워수',
    Icon: Avatar,
    description: {
      strengths:
        '채널이 성장하고 있어요! 지금처럼 꾸준히 하면 더 많은 팬이 생길 거예요.',
      weakness:
        '새 구독자가 줄고 있어요. 어떤 콘텐츠에서 이탈이 많은지 확인해야 해요.',
    },
  },
  profileStats: {
    title: '프로필 활동수',
    Icon: Like,
    description: {
      strengths:
        '프로필을 확인하는 사람 늘고 있어요. 궁금한게 많아졌다는 신호에요!',
      weakness: '프로필 방문이 줄었어요. 콘텐츠에 프로필 유도를 해보세요!',
    },
  },
  impressions: {
    title: '반응수',
    Icon: Comment,
    description: {
      strengths:
        '반응 폭주 중! 팬들과의 소통이 활발하네요! 반응수란 좋아요, 공유, 댓글, 저장을 합친 수를 의미해요.',
      weakness:
        '반응이 줄었어요. 팔로워가 반응할 만한 질문이나 이벤트를 시도해볼까요?  반응수란 좋아요, 공유, 댓글, 저장을 합친 수를 의미해요.',
    },
  },
  adsCount: {
    title: '광고 성과',
    Icon: Dollar,
    description: {
      strengths: '광고 성과가 좋아요! 유용한 정보를 담은 콘텐츠, 대성공이에요!',
      weakness:
        '광고 조회수가 줄었어요. 타겟을 조금 조정하거나 다른 크리에이티브로 테스트해보는 것도 좋아요',
    },
  },
  uploadedMedia: {
    title: '업로드 수',
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
export default function InstagramtransformDataStrengthWeakness(
  data: ResponseInstaChannelStats['result'],
) {
  const { stats, strengths, weaknesses } = data;

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
      label: transformMetaLabelData(category, stat[category]),
      color:
        title === 'strengths' ? strengthsColor[index] : weaknessesColor[index],
      graphValue: stat[category],
    }));
  };

  /**
   * strengths 및 weaknesses 변환
   */
  const instagramTransformedData = {
    strengths: strengths.map((category) => ({
      info: titleLabel[category as keyof typeof titleLabel], // 타입 캐스팅
      data: transformData('strengths', category as keyof typeof titleLabel),
    })),
    weaknesses: weaknesses.map((category) => ({
      info: titleLabel[category as keyof typeof titleLabel], // 타입 캐스팅
      data: transformData('weaknesses', category as keyof typeof titleLabel),
    })),
  };

  return { instagramTransformedData, weaknesses };
}
