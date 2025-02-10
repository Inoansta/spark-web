import { InstaGram } from '@/assets/svg/logo/InstaGram';
import { BackIcon } from '@/assets/svg/nav/BackIcon';
import LocationMove from '@/domains/Login/components/LocationMove';
import { NavigationHeader } from '@/shared/components';
import { Divider, Text } from '@/shared/ui';

const LIST_DATA = [
  { title: '앱 버전', description: '1.0.00', location: '/' },
  { title: '공지사항', location: '/' },
  { title: '문의하기', location: '/' },
  {
    title: '서비스 이용약관',
    location: 'https://spark-terms-and-privacy.vercel.app/',
  },
  {
    title: '개인정보처리방침',
    location: 'https://spark-terms-and-privacy.vercel.app/privacy',
  },
  {
    title: '스파크 인스타',
    description: '@spark__kr',
    location: 'https://www.instagram.com/spark__kr/?igsh=b3VubXVtZnJjYmE%3D#',
    rightIcon: InstaGram,
    descriptionColor: 'primary3',
  },
];

export default function Setting() {
  return (
    <>
      <NavigationHeader>
        <NavigationHeader.LeftContent location="back">
          <BackIcon />
        </NavigationHeader.LeftContent>
      </NavigationHeader>
      <main>
        <ul className="flex-col p-5 gap-x-[5px]">
          {LIST_DATA.map(
            ({
              title,
              description,
              location,
              rightIcon: RightIcon,
              descriptionColor,
            }) => (
              <li key={title}>
                <LocationMove
                  className="flex justify-between px-5 py-3"
                  location={location}
                >
                  <div
                    className={`${RightIcon && 'flex items-center mr-[2px]'}`}
                  >
                    <Text as="title" title={title} />
                    {RightIcon && <RightIcon />}
                  </div>
                  {description && (
                    <Text
                      as="description"
                      title={description}
                      className={`text-${descriptionColor}`}
                    />
                  )}
                </LocationMove>
                <Divider />
              </li>
            ),
          )}
        </ul>
      </main>
    </>
  );
}
