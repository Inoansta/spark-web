import { Outlet } from 'react-router';

export default function ProtectedLayout() {
  return (
    <div>
      ProtectedRoute
      <Outlet />
    </div>
  );
}
