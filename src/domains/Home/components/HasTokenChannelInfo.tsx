import { SmallYoutubeIcon } from '@/assets/svg/logo/SmallYoutbeIcon';
import { FrontIcon } from '@/assets/svg/nav/FrontIcon';
import { TOKEN } from '@/domains/Login/hooks/useAuthToken';
import { RouteMove } from '@/shared/components';
import { Storage } from '@/shared/lib';
import { Flex, Text } from '@/shared/ui';
import useChannelOption from '../hooks/useChannelOption';
import useChannelProfile from '../hooks/useChannelProfile';
import useMetaProfile from '../hooks/useMetaOptions';
import { formatNumberWithCommas, formatNumberWithUnit } from '../lib/utils';
import { ChannelCommonCard, ChannelGrowCard } from './ChannelCommonCard';

function EmptyCard() {
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
              title="내채널 가져오기"
              className="bg-primary5 text-white w-full px-5 py-[10px]"
            >
              <Flex justify="center" align="center" gapX={2}>
                <Text
                  title="내채널 가져오기"
                  as="description"
                  className="text-white font-bold"
                />
                <FrontIcon fill="white" width={7.5} height={11.667} />
              </Flex>
            </button>
          </RouteMove>
        }
      />
      <ChannelGrowCard disabled={false} />
    </Flex>
  );
}

export function ChannelCard() {
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
            >
              <Flex align="center">
                <SmallYoutubeIcon className="mr-1" />
                <Text
                  as="description"
                  title="유튜브"
                  className="font-bold text-[12px]"
                />
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

export function MetaCard() {
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
            >
              <Flex align="center">
                <SmallYoutubeIcon className="mr-1" />
                <Text
                  as="description"
                  title="인스타그램"
                  className="font-bold text-[12px]"
                />
              </Flex>
            </button>
          </Flex>
        }
        avatarUrl={data.result.profileUrl}
        posting={formatNumberWithCommas(data.result.postsCount ?? 0)}
        subscriber={formatNumberWithCommas(data.result.followersCount ?? 0)}
        totalView={formatNumberWithCommas(data.result.followingCount ?? 0)}
      />
      <ChannelGrowCard disabled={false} />
    </Flex>
  );
}

export default function HasTokenChannelInfo() {
  const access_token = Storage.getLocalStorage(TOKEN.ACCESS);
  const refresh_token = Storage.getLocalStorage(TOKEN.REFRESH);
  if (!access_token) {
    return <EmptyCard />;
  } else if (refresh_token.length !== 0) {
    return <ChannelCard />;
  } else {
    return <MetaCard />;
  }
}
