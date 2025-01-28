import { NavLink, Outlet } from 'react-router';
import { HomeIcon } from '@/assets/svg/HomeIcon';
import { SettingIcon } from '@/assets/svg/SettingIcon';

interface NavLinkProps {
  path: string;
  icon: typeof SettingIcon;
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
    icon: SettingIcon,
  },
};

function Navigation({ path, icon: Icon, title }: NavLinkProps) {
  return (
    <section className={'flex-1 py-2 cursor-pointer'}>
      <NavLink to={path}>
        {({ isActive }) => (
          <div className={'flex flex-col items-center'}>
            <Icon color={isActive ? 'black' : 'gray-500'} />
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
      <nav
        className={
          'flex px-[10px] justify-center items-center gap-[10px] border-t bg-white'
        }
      >
        {Object.values(linkConfig).map(({ path, icon, title }) => (
          <Navigation path={path} icon={icon} title={title} key={path} />
        ))}
      </nav>
    </>
  );
}
