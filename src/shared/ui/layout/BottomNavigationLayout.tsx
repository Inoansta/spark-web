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
          <div className={'flex flex-col items-center'}>
            <Icon color={isActive ? 'black' : 'gray-500'} isActive={isActive} />
            <span className={isActive ? 'text-black' : 'text-gray-500'}>
              {title}
            </span>
          </div>
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
          gap={'10px'}
          className="px-[10px] w-full"
        >
          {Object.values(linkConfig).map(({ path, icon, title }) => (
            <Navigation path={path} icon={icon} title={title} key={path} />
          ))}
        </Flex>
      </nav>
    </>
  );
}
