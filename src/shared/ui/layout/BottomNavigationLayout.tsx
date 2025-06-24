import { NavLink, Outlet } from 'react-router';
import { HomeIcon } from '@/assets/svg/nav/HomeIcon';
import { UnifiedSettingIcon } from '@/assets/svg/nav/UnifiedSettingIcon';
import Flex from './Flex';

interface NavLinkProps {
  path: string;
  icon: typeof UnifiedSettingIcon;
  title: string;
}

const linkConfig = {
  home: {
    path: '/',
    title: '홈',
    icon: HomeIcon,
  },
  setting: {
    path: '/setting',
    title: '설정',
    icon: UnifiedSettingIcon,
  },
};

function Navigation({ path, icon: Icon, title }: NavLinkProps) {
  return (
    <section className={'flex-1 py-2 cursor-pointer'}>
      <NavLink to={path}>
        {({ isActive }) => (
          <Flex direction="column" align="center">
            <Icon color={isActive ? 'black' : 'gray-500'} isActive={isActive} />
            <span
              className={`text-center text-[12px] font-medium ${isActive ? 'text-black' : 'text-gray5'}`}
            >
              {title}
            </span>
          </Flex>
        )}
      </NavLink>
    </section>
  );
}

export default function BottomNavigationLayout() {
  return (
    <>
      <Outlet />
      <nav className="bg-white fixed bottom-0 max-w-[450px] w-full border-t-disabled shadow-custom-up">
        <Flex
          justify="center"
          align="center"
          className="px-[10px] pb-[20px] w-full gap-[10px]"
        >
          {Object.values(linkConfig).map(({ path, icon, title }) => (
            <Navigation path={path} icon={icon} title={title} key={path} />
          ))}
        </Flex>
      </nav>
    </>
  );
}
