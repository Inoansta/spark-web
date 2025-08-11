import { Outlet, useLocation } from 'react-router';
import { BackIcon } from '@/assets/svg/nav/BackIcon';
import { CloseIcon } from '@/assets/svg/nav/CloseIcon';
import { NavigationHeader } from '@/shared/components';
import { RouteInfo } from '@/shared/hooks';

// TODO: switch 문 말고 다른걸로 대체
function CurrentLocation() {
  const location = useLocation();
  const currentPathname = location.pathname;

  const isSamePathname = (path: RouteInfo['location']) =>
    currentPathname === path;

  switch (currentPathname) {
    case '/analysis': {
      return (
        <NavigationHeader className="bg-line">
          <NavigationHeader.LeftContent location="/user-info">
            <BackIcon />
          </NavigationHeader.LeftContent>
        </NavigationHeader>
      );
    }
    case '/strategy/1':
    case '/strategy/2':
    case '/strategy/3': {
      return (
        <NavigationHeader className="p-5 fixed max-w-[450px] w-full">
          <NavigationHeader.LeftContent location="back">
            <BackIcon color={'white'} />
          </NavigationHeader.LeftContent>
        </NavigationHeader>
      );
    }
    case '/login':
    case '/detail':
    case '/instagram-detail':
    case '/onboarding': {
      return (
        <NavigationHeader
          className={`${isSamePathname('/login') && 'bg-line'} ${isSamePathname('/onboarding') && 'bg-[#F3F4F7]'}`}
        >
          <div />
          <NavigationHeader.RightContent
            location={`${isSamePathname('/onboarding') ? '/login' : '/'}`}
          >
            <CloseIcon />
          </NavigationHeader.RightContent>
        </NavigationHeader>
      );
    }
    case '/user-info': {
      return (
        <NavigationHeader className={'pb-[5px]'}>
          <NavigationHeader.LeftContent location="back">
            <BackIcon />
          </NavigationHeader.LeftContent>
          <NavigationHeader.RightContent location="/detail">
            <CloseIcon />
          </NavigationHeader.RightContent>
        </NavigationHeader>
      );
    }
    case '/result':
    case '/popular':
    case '/strength-weakness':
    case '/strategy': {
      return (
        <NavigationHeader className={'p-5 fixed max-w-[450px] w-full'}>
          <NavigationHeader.LeftContent location="back">
            <BackIcon color={'white'} />
          </NavigationHeader.LeftContent>
          <NavigationHeader.RightContent location="/detail">
            <CloseIcon color={'white'} />
          </NavigationHeader.RightContent>
        </NavigationHeader>
      );
    }
  }
}

export default function PageLayout() {
  return (
    <div>
      <CurrentLocation />
      <Outlet />
    </div>
  );
}
