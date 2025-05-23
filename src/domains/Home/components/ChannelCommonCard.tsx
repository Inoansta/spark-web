import type { ReactNode } from 'react';
import homeStrategy from '@/assets/animation/homeStrategy.json';
import { Avatar as DefaultImage } from '@/assets/svg/Avatar/Avatar';
import { TOKEN } from '@/domains/Login/hooks/useAuthToken';
import { RouteMove } from '@/shared/components';
import { Storage } from '@/shared/lib';
import { Card, Flex, LottieAnimation, Text } from '@/shared/ui';

interface ChannelCommonCardProps {
  header: ReactNode;
  avatarUrl?: string;
  bottom?: ReactNode;
  posting?: string;
  subscriber?: string;
  totalView?: string;
  isLogin?: boolean;
  size?: 'large' | 'medium';
}

interface ChannelGrowCardProps {
  disabled: boolean;
}

const refresh_token = Storage.getLocalStorage(TOKEN.REFRESH);

export function ChannelGrowCard({ disabled = false }: ChannelGrowCardProps) {
  return (
    <Card className="rounded-[20px]">
      <Card.Header>
        <Flex direction="column">
          <Text as="title" title="내 채널 성장 비법" className="text-lg" />
          <Text as="description" title="구독자를 늘리는 팁을 알려 드릴게요" />
        </Flex>
      </Card.Header>
      <Card.Content>
        <LottieAnimation animationData={homeStrategy} />
      </Card.Content>
      <Card.Bottom className="px-5 pb-5">
        <RouteMove location="/detail">
          <Flex direction="column" align="center" justify="center">
            <button
              type="button"
              title="자세히 알아보기"
              disabled={disabled}
              className="border-primary5 border bg-inherit text-white w-[295px] h-[48px] px-5 py-[10px] rounded-[10px]"
            >
              <Flex justify="center" align="center" gapX={2}>
                <Text
                  title="자세히 알아보기"
                  as="description"
                  className="text-primary5 font-bold"
                />
              </Flex>
            </button>
          </Flex>
        </RouteMove>
      </Card.Bottom>
    </Card>
  );
}

export function ChannelCommonCard({
  header,
  avatarUrl,
  posting = '???',
  subscriber = '???',
  totalView = '???',
  bottom,
  isLogin = false,
  size = 'large',
}: ChannelCommonCardProps) {
  const isMedium = size === 'medium';

  return (
    <Card
      isMedium={isMedium}
      className={`${isMedium && 'w-[250px] h-[121px]'}`}
    >
      <Card.Header isMedium={isMedium}>{header}</Card.Header>
      <Card.Content isMedium={isMedium}>
        <Flex
          justify="between"
          align="center"
          className={isLogin ? 'pb-[30px]' : isMedium ? 'pb-[22px]' : undefined}
        >
          <div className="mr-[35px]">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="avatarImage"
                className={`rounded-[50%] ${isMedium ? 'w-[45px] h-[45px]' : 'max-w-[60px] max-h-[60px]'}`}
              />
            ) : (
              <DefaultImage
                width={isMedium ? 45 : 60}
                height={isMedium ? 45 : 60}
              />
            )}
          </div>
          <ul className="w-full">
            <Flex justify="between" align="center" as="li">
              <Flex direction="column" align="center" as="div">
                <Text
                  as="card_title"
                  title={posting}
                  className={`text-highEmphasis ${isMedium && 'text-[11px]'}`}
                />
                <Text
                  as="card_content"
                  title="게시물"
                  className={`${isMedium && 'text-[11px]'}`}
                />
              </Flex>
              <Flex direction="column" align="center" as="div">
                <Text
                  as="card_title"
                  title={subscriber}
                  className={`text-highEmphasis ${isMedium && 'text-[11px]'}`}
                />
                <Text
                  as="card_content"
                  title={refresh_token ? '구독자' : '팔로워'}
                  className={`${isMedium && 'text-[11px]'}`}
                />
              </Flex>
              <Flex direction="column" align="center" as="div">
                <Text
                  as="card_title"
                  title={totalView}
                  className={`text-highEmphasis ${isMedium && 'text-[11px]'}`}
                />
                <Text
                  as="card_content"
                  title={refresh_token ? '누적 조회수' : '팔로잉'}
                  className={`${isMedium && 'text-[11px]'}`}
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
