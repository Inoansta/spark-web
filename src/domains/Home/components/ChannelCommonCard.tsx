import type { ReactNode } from 'react';
import HomeGIF from '@/assets/Action1.gif';
import { Avatar as DefaultImage } from '@/assets/svg/Avatar/Avatar';
import CardInstagram from '@/assets/svg/CardInstagram';
import CardYoutube from '@/assets/svg/CardYoutube';
import { TOKEN } from '@/domains/Login/hooks/useAuthToken';
import { RouteMove } from '@/shared/components';
import { Storage } from '@/shared/lib';
import { Card, Flex, Text } from '@/shared/ui';

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
const access_token = Storage.getLocalStorage(TOKEN.ACCESS);

export function EmptyGrowCard() {
  return (
    <Card className="rounded-[20px]">
      <Card.Header>
        <Flex direction="column">
          <Text
            as="title"
            title="내가 성장하고 싶은 플랫폼은? "
            className="text-lg"
          />
          <Text
            as="description"
            title={`선택한 플랫폼에 따라 어떤 도움을 드릴지 소개할게요.`}
          />
        </Flex>
      </Card.Header>
      <Card.Content>
        <img src={HomeGIF} alt="no image" className={'rounded-medium'} />
      </Card.Content>
      <div className={'flex flex-row border-t border-t-[#E8E8FF]'}>
        <RouteMove
          className={
            'py-[12px] flex-1 text-center border-r border-r-[#E8E8FF] text-[12px] text-[#4557FF] font-[700] leading-[16px] flex flex-row justify-center items-center'
          }
          location={'/instagram-detail'}
        >
          <CardInstagram className={'mr-[5px]'} />
          인스타그램
        </RouteMove>
        <RouteMove
          className={
            'py-[12px] flex-1 text-center text-[12px] text-[#4557FF] font-[700] leading-[16px] flex flex-row justify-center items-center'
          }
          location={'/detail'}
        >
          <CardYoutube className={'mr-[5px]'} />
          유튜브
        </RouteMove>
      </div>
    </Card>
  );
}

export function ChannelGrowCard({ disabled = false }: ChannelGrowCardProps) {
  return (
    <Card className="rounded-[20px]">
      <Card.Header>
        <Flex direction="column">
          <Text as="title" title="내 채널 성장 비법" className="text-lg" />
          <Text
            as="description"
            title={`${refresh_token ? '구독자' : '팔로워'}를 늘리는 팁을 알려 드릴게요`}
          />
        </Flex>
      </Card.Header>
      <Card.Content>
        <img src={HomeGIF} alt="no image" className={'rounded-medium'} />
      </Card.Content>
      <Card.Bottom className="px-5 pb-5">
        <RouteMove location="/detail">
          <Flex direction="column" align="center" justify="center">
            <button
              type="button"
              title="자세히 알아보기"
              disabled={disabled}
              className="bg-primary5 text-white w-full h-[48px] px-5 py-[10px] rounded-[10px]"
            >
              <Flex justify="center" align="center" gapX={2}>
                <Text
                  title="자세히 알아보기"
                  as="description"
                  className="text-white font-bold"
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
                className={`rounded-[50%] ${isMedium ? 'w-[45px]' : 'max-w-[60px] max-h-[60px]'}`}
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
                  title={access_token ? '게시물' : ''}
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
                  title={
                    refresh_token ? '구독자' : `${access_token ? '팔로워' : ''}`
                  }
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
                  title={
                    refresh_token
                      ? '누적 조회수'
                      : `${access_token ? '팔로잉' : ''}`
                  }
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
