import { ComponentProps, FC } from 'react';
// (아이콘 import 경로는 실제 프로젝트에 맞게 확인이 필요합니다)
import { Dollar } from '@/assets/strengthWeakness/Dollar';
import { AddIcon } from '@/assets/svg/AddIcon';
import { Avatar } from '@/assets/svg/Avatar/Avatar';
import EyeIcon from '@/assets/svg/EyeIcon';
import type { SvgProps } from '@/assets/svg/nav/UnifiedSettingIcon';
import { transformMetaLabelData } from '@/domains/Youtube/StrengthWeakness/lib/formatData';
import { ResponseInstaChannelStats } from '@/domains/Youtube/StrengthWeakness/model/type';

// --- (변수 선언) ---
const dateLabels = ['90 ~ 60일', '60 ~ 30일', '30 ~ 최근'];
const strengthsColor = ['bg-gradient8', 'bg-primary10', 'bg-primary11'];
const weaknessesColor = ['bg-gradient5', 'bg-gradient4', 'bg-gradient3'];

// titleLabelMeta가 처리할 키 목록 타입
type MetaStatKeys =
  | 'viewsNonFollowers'
  | 'followers'
  | 'viewsFollowers'
  | 'uploadedMedia'
  | 'impressions'
  | 'adsCount'
  | 'profileStats';

/**
 * Meta 데이터 키에 맞는 타이틀, 아이콘, 설명을 정의
 */
const titleLabelMeta: Record<
  MetaStatKeys,
  {
    title: string;
    Icon: FC<ComponentProps<'svg'>> | FC<SvgProps>;
    description: {
      strengths: string;
      weakness: string;
    };
  }
> = {
  viewsNonFollowers: {
    title: '비팔로워 조회수',
    Icon: EyeIcon,
    description: {
      strengths: '비팔로워에게도 콘텐츠가 잘 노출되고 있어요.',
      weakness: '비팔로워 유입이 줄었어요. 탐색 탭 노출 전략이 필요해요.',
    },
  },
  followers: {
    title: '팔로워',
    Icon: Avatar,
    description: {
      strengths: '팔로워가 늘고 있어요! 멋진 콘텐츠 덕분이에요.',
      weakness: '팔로워가 주춤하네요. 새로운 주제를 시도해볼까요?',
    },
  },
  viewsFollowers: {
    title: '팔로워 조회수',
    Icon: Avatar,
    description: {
      strengths: '충성도 높은 팔로워들이 콘텐츠를 즐겨보고 있어요.',
      weakness:
        '팔로워들의 관심이 줄었어요. 팔로워 전용 콘텐츠를 기획해볼까요?',
    },
  },
  uploadedMedia: {
    title: '업로드수',
    Icon: AddIcon,
    description: {
      strengths: '꾸준히 업로드하고 있네요! 훌륭합니다.',
      weakness: '업로드가 뜸하네요. 정기적인 업로드가 중요해요.',
    },
  },
  impressions: {
    title: '반응 수',
    Icon: EyeIcon,
    description: {
      strengths: '콘텐츠 도달 범위가 넓어지고 있어요!',
      weakness: '도달률이 낮아졌어요. 해시태그를 점검해 보세요.',
    },
  },
  adsCount: {
    title: '광고 성과',
    Icon: Dollar,
    description: {
      strengths: '광고 집행을 통해 유입을 늘리고 있어요.',
      weakness: '광고 집행이 줄었네요. 타겟 광고를 다시 검토해볼까요?',
    },
  },
  profileStats: {
    title: '프로필 활동 수',
    Icon: EyeIcon, // (ProfileIcon 대신 EyeIcon으로 통일 - 원본 참고)
    description: {
      strengths: '많은 사람들이 프로필에 관심을 보이고 있어요!',
      weakness:
        '프로필 방문이 줄었어요. 프로필 소개글이나 링크를 점검해볼까요?',
    },
  },
  // likes, comments, unfollowers 항목 제거됨
};

/**
 * Meta 데이터용 변환 함수
 */
export default function transformMetaStats(
  data: ResponseInstaChannelStats['result'], // Meta 데이터 타입
) {
  const { stats, strengths, weaknesses } = data;

  const reversedStats = stats.slice().reverse();

  const transformData = (
    title: 'strengths' | 'weaknesses',
    category: MetaStatKeys,
  ) => {
    const getStatValue = (
      stat: (typeof reversedStats)[number],
      cat: MetaStatKeys,
    ) => {
      return stat[cat] || 0;
    };

    return reversedStats.map((stat, index) => ({
      date: dateLabels[index], // '90 ~ 60일', '60 ~ 30일', '30 ~ 최근'
      label: transformMetaLabelData(category, getStatValue(stat, category)),
      color:
        title === 'strengths' ? strengthsColor[index] : weaknessesColor[index],
      graphValue: getStatValue(stat, category),
    }));
  };

  const transformedData = {
    strengths: strengths
      .filter((category) => category in titleLabelMeta)
      .map((category) => ({
        info: titleLabelMeta[category as MetaStatKeys],
        data: transformData('strengths', category as MetaStatKeys),
      })),
    weaknesses: weaknesses
      .filter((category) => category in titleLabelMeta)
      .map((category) => ({
        info: titleLabelMeta[category as MetaStatKeys],
        data: transformData('weaknesses', category as MetaStatKeys),
      })),
  };

  // React 코드에서 사용할 수 있도록 두 값을 모두 반환
  return { transformedData, weaknesses };
}
