import { Outlet, useLocation } from 'react-router';
import { BackIcon } from '@/assets/svg/nav/BackIcon';
import { CloseIcon } from '@/assets/svg/nav/CloseIcon';
import { NavigationHeader } from '@/shared/components';

// TODO: switch 문 말고 다른걸로 대체
function CurrentLocation() {
  const location = useLocation();
  const currentPathname = location.pathname;

  switch (currentPathname) {
    case '/analysis': {
      return (
        <NavigationHeader>
          <NavigationHeader.LeftContent location={'back'}>
            <BackIcon />
          </NavigationHeader.LeftContent>
        </NavigationHeader>
      );
    }
    case '/login':
    case '/detail': {
      return (
        <NavigationHeader>
          <div />
          <NavigationHeader.RightContent location="/">
            <CloseIcon />
          </NavigationHeader.RightContent>
        </NavigationHeader>
      );
    }
    case '/user-info':
    case '/result':
    case '/popular':
    case '/strength-weakness':
    case '/growth-prediction':
    case '/strategy': {
      return (
        <NavigationHeader>
          <NavigationHeader.LeftContent location="back">
            <BackIcon />
          </NavigationHeader.LeftContent>
          <NavigationHeader.RightContent location="/detail">
            <CloseIcon />
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
