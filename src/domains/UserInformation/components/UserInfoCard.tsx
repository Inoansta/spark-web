import { useEffect, useState } from 'react';
import { HomeYoutubeLogo } from '@/assets/svg/HomeYoutubeLogo';
import { ChannelCommonCard } from '@/domains/Home/components/ChannelCommonCard';
import { useChannelProfile, useMetaProfile } from '@/domains/Home/hooks';
import {
  formatNumberWithCommas,
  formatNumberWithUnit,
} from '@/domains/Home/lib/utils';
import { TOKEN } from '@/domains/Login/hooks/useAuthToken';
import { Storage } from '@/shared/lib';
import { Flex, Text } from '@/shared/ui';

function MetaCard() {
  const { data } = useMetaProfile();
  return (
    <ChannelCommonCard
      size="medium"
      isLogin
      avatarUrl={data.result.profileUrl}
      header={
        <Flex justify="between" align="center">
          <Text
            as="title"
            title={`@${data.result.userName}`}
            className="text-[13px]"
          />
        </Flex>
      }
      posting={formatNumberWithCommas(data.result.postsCount ?? 0)}
      subscriber={formatNumberWithUnit(data.result.followersCount ?? 0, '명')}
      totalView={formatNumberWithUnit(data.result.followingCount ?? 0, '명')}
    />
  );
}

function YoutubeCard() {
  const { data } = useChannelProfile();
  return (
    <ChannelCommonCard
      size="medium"
      isLogin
      avatarUrl={data.result.defaultThumbnailUrl}
      header={
        <Flex justify="between" align="center">
          <Text
            as="title"
            title={`@${data.result.channelName}`}
            className="text-[13px]"
          />
          <HomeYoutubeLogo className="mr-1" />
        </Flex>
      }
      posting={formatNumberWithCommas(data.result.totalVideoCount ?? 0)}
      subscriber={formatNumberWithUnit(data.result.subscriberCount ?? 0, '명')}
      totalView={formatNumberWithUnit(data.result.totalViewCount ?? 0, '회')}
    />
  );
}

export default function UserInfoCard() {
  type TokenState = 'youtube' | 'empty' | 'meta';

  const [state, setState] = useState<TokenState>('empty');

  useEffect(() => {
    const token = Storage.getLocalStorage(TOKEN.REFRESH);

    if (token && token.length > 0) {
      setState('youtube');
    } else {
      setState('meta');
    }
  }, []);

  if (state === 'youtube') {
    return <YoutubeCard />;
  } else if (state === 'meta') {
    return <MetaCard />;
  }
}
