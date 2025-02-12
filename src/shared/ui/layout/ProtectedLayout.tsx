import { Outlet } from 'react-router';

export default function ProtectedLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );

  // return isLogin ? (
  //   <div>
  //     ProtectedRoute
  //     <Outlet />
  //   </div>
  // ) : (
  //   <RouteMove location="/detail" />
  // );
}
