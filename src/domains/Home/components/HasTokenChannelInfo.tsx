import { type ReactNode } from 'react';
import { QuerySuspenseBoundary } from '@/app/provider';
import homeStrategy from '@/assets/animation/homeStrategy.json';
import { Avatar as DefaultImage } from '@/assets/svg/Avatar/Avatar';
import { SmallYoutubeIcon } from '@/assets/svg/logo/SmallYoutbeIcon';
import { FrontIcon } from '@/assets/svg/nav/FrontIcon';
import LocationMove from '@/domains/Login/components/LocationMove';
import { ACCESS_TOKEN } from '@/domains/Login/hooks/useAuthToken';
import { RouteMove } from '@/shared/components';
import { Storage } from '@/shared/lib';
import { Card, Flex, LottieAnimation, Text } from '@/shared/ui';
import useChannelOption from '../hooks/useChannelOption';
import useChannelProfile from '../hooks/useChannelProfile';
import { formatNumberWithCommas, formatNumberWithUnit } from '../lib/utils';

interface ChannelCommonCardProps {
  header: ReactNode;
  Avatar?: ReactNode;
  bottom?: ReactNode;
  posting?: string;
  subscriber?: string;
  totalView?: string;
}

interface ChannelGrowCardProps {
  disabled: boolean;
}

function ChannelGrowCard({ disabled = false }: ChannelGrowCardProps) {
  return (
    <Card>
      <Card.Header>
        <Flex direction="column">
          <Text as="title" title="내 채널 성장 비법" />
          <Text as="description" title="구독자를 늘리는 팁을 알려 드릴게요" />
        </Flex>
      </Card.Header>
      <Card.Content>
        <LottieAnimation animationData={homeStrategy} />
      </Card.Content>
      <Card.Bottom className="px-5 pb-5">
        <RouteMove location="/detail">
          <button
            type="button"
            title="자세히 알아보기"
            disabled={disabled}
            className="border-primary5 border bg-inherit text-white w-full px-5 py-[10px] rounded-[10px]"
          >
            <Flex justify="center" align="center" gapX={2}>
              <Text
                title="자세히 알아보기"
                as="description"
                className="text-primary5 font-bold"
              />
            </Flex>
          </button>
        </RouteMove>
      </Card.Bottom>
    </Card>
  );
}

// TODO: 분석 여부에 따라서 Bubble 컴포넌트 추가
// function UseChannelRecommend() {
//   const isRecommend = false;

//   return isRecommend ? (
//     <Flex>
//       <SpeechBubble text="스파크가 궁금하다면?" icon={<SmallLogo />} />
//       <ChannelGrowCard />
//     </Flex>
//   ) : (
//     <ChannelGrowCard />
//   );
// }

function ChannelCommonCard({
  header,
  Avatar = <DefaultImage />,
  posting = '???',
  subscriber = '???',
  totalView = '???',
  bottom,
}: ChannelCommonCardProps) {
  return (
    <Card>
      <Card.Header>{header}</Card.Header>
      <Card.Content>
        <Flex justify="between" align="center" className="pb-[30px]">
          <div className="mr-[35px]">{Avatar}</div>
          <ul className="w-full">
            <Flex justify="between" align="center" as="li">
              <Flex direction="column" align="center" as="div">
                <Text as="title" title={posting} className="text-gray" />
                <Text as="description" title="게시물" className="text-gray" />
              </Flex>
              <Flex direction="column" align="center" as="div">
                <Text as="title" title={subscriber} className="text-gray" />
                <Text as="description" title="구독자" className="text-gray" />
              </Flex>
              <Flex direction="column" align="center" as="div">
                <Text as="title" title={totalView} className="text-gray" />
                <Text
                  as="description"
                  title="누적 조회수"
                  className="text-gray"
                />
              </Flex>
            </Flex>
          </ul>
        </Flex>
      </Card.Content>
      {bottom && <Card.Bottom>{bottom}</Card.Bottom>}
    </Card>
  );
}

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
        header={
          <LocationMove
            location={`https://www.youtube.com/@${data.result.channelId}`}
          >
            <Flex justify="between" align="center">
              <Text
                as="title"
                title={`@${data.result.channelName}`}
                className="text-[18px]"
              />
              <button type="button" className="bg-line p-[10px] rounded-[20px]">
                <Flex align="center">
                  <SmallYoutubeIcon className="mr-1" />
                  <Text as="description" title="유튜브" className="font-bold" />
                </Flex>
              </button>
            </Flex>
          </LocationMove>
        }
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

export default function HasTokenChannelInfo() {
  const token = Storage.getLocalStorage(ACCESS_TOKEN);

  return token.length !== 0 ? (
    <QuerySuspenseBoundary loadingFallback={<>Loading...</>}>
      <ChannelCard />
    </QuerySuspenseBoundary>
  ) : (
    <EmptyCard />
  );
}
