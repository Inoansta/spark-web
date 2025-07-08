import { Dispatch, SetStateAction } from 'react';
import { HomeInstagramLogo } from '@/assets/svg/HomeInstagramLogo';
import { HomeYoutubeLogo } from '@/assets/svg/HomeYoutubeLogo';
import { FrontIcon } from '@/assets/svg/nav/FrontIcon';
import { TOKEN } from '@/domains/Login/hooks/useAuthToken';
import { RouteMove } from '@/shared/components';
import { Storage } from '@/shared/lib';
import { Flex, Text } from '@/shared/ui';
import useChannelOption from '../hooks/useChannelOption';
import useChannelProfile from '../hooks/useChannelProfile';
import useMetaProfile from '../hooks/useMetaOptions';
import { formatNumberWithCommas, formatNumberWithUnit } from '../lib/utils';
import {
  ChannelCommonCard,
  ChannelGrowCard,
  EmptyGrowCard,
} from './ChannelCommonCard';

function EmptyCard({
  setClosed,
}: {
  setClosed: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Flex direction="column" gapY={5}>
      <ChannelCommonCard
        header={
          <Flex justify="between" align="center">
            <Text as="title" title="성장 비법이 궁금하다면" />
          </Flex>
        }
        bottom={
          <RouteMove location="/login">
            <button
              type="button"
              title="채널을 연동하면 프로필이 보여요!"
              className="bg-primary5 text-white w-full px-5 py-[10px]"
              onClick={() => setClosed(false)}
            >
              <Flex justify="center" align="center" gapX={2}>
                <Text
                  title="내 채널 가져오기"
                  as="description"
                  className="text-white font-bold"
                />
                <FrontIcon fill="white" width={7.5} height={11.667} />
              </Flex>
            </button>
          </RouteMove>
        }
      />
      <EmptyGrowCard />
    </Flex>
  );
}

export function ChannelCard({
  setClosed,
}: {
  setClosed: Dispatch<SetStateAction<boolean>>;
}) {
  const { data, isSuccess } = useChannelProfile();

  useChannelOption({
    isSuccess,
    data,
  });

  return (
    <Flex direction="column" gapY={5}>
      <ChannelCommonCard
        isLogin
        header={
          <Flex justify="between" align="center">
            <Text
              as="title"
              title={`@${data.result.channelName}`}
              className="text-[18px]"
            />
            <button
              type="button"
              className="bg-line px-[10px] py-[5px] rounded-[20px]"
              onClick={() => setClosed(false)}
            >
              <Flex align="center">
                <HomeYoutubeLogo className="mr-1" />
                <div className="text-gray text-[12px] font-[500] leading[16px text-center">
                  채널 변경
                </div>
              </Flex>
            </button>
          </Flex>
        }
        avatarUrl={data.result.defaultThumbnailUrl}
        posting={formatNumberWithCommas(data.result.totalVideoCount ?? 0)}
        subscriber={formatNumberWithUnit(
          data.result.subscriberCount ?? 0,
          '명',
        )}
        totalView={formatNumberWithUnit(data.result.totalViewCount ?? 0, '회')}
      />
      <ChannelGrowCard disabled={false} />
    </Flex>
  );
}

export function MetaCard({
  setClosed,
}: {
  setClosed: Dispatch<SetStateAction<boolean>>;
}) {
  const { data } = useMetaProfile();

  return (
    <Flex direction="column" gapY={5}>
      <ChannelCommonCard
        isLogin
        header={
          <Flex justify="between" align="center">
            <Text
              as="title"
              title={`@${data.result.userName}`}
              className="text-[18px]"
            />
            <button
              type="button"
              className="bg-line px-[10px] py-[5px] rounded-[20px]"
              onClick={() => setClosed(false)}
            >
              <Flex align="center">
                <HomeInstagramLogo className="mr-1" />
                <div className="text-gray text-[12px] font-[500] leading[16px text-center">
                  채널 변경
                </div>
              </Flex>
            </button>
          </Flex>
        }
        avatarUrl={data.result.profileUrl}
        posting={formatNumberWithCommas(data.result.postsCount ?? 0)}
        subscriber={formatNumberWithUnit(data.result.followersCount ?? 0, '명')}
        totalView={formatNumberWithUnit(data.result.followingCount ?? 0, '명')}
      />
      <ChannelGrowCard disabled={false} />
    </Flex>
  );
}

export default function HasTokenChannelInfo({
  setClosed,
}: {
  setClosed: Dispatch<SetStateAction<boolean>>;
}) {
  const access_token = Storage.getLocalStorage(TOKEN.ACCESS);
  const refresh_token = Storage.getLocalStorage(TOKEN.REFRESH);
  if (!access_token) {
    return <EmptyCard setClosed={setClosed} />;
  } else if (refresh_token.length !== 0) {
    return <ChannelCard setClosed={setClosed} />;
  } else {
    return <MetaCard setClosed={setClosed} />;
  }
}
