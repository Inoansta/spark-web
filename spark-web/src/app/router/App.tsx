import { BrowserRouter, Route, Routes } from 'react-router';
import Analysis from '@/pages/Analysis.tsx';
import Detail from '@/pages/Detail.tsx';
import GrowthPrediction from '@/pages/GrowthPrediction.tsx';
import Home from '@/pages/Home.tsx';
import OnBoarding from '@/pages/OnBoarding.tsx';
import Popular from '@/pages/Popular.tsx';
import Result from '@/pages/Result.tsx';
import Strategy from '@/pages/Strategy.tsx';
import StrengthWeakness from '@/pages/StrengthWeakness.tsx';
import UserInfo from '@/pages/UserInfo.tsx';
import BottomNavigationLayout from './BottomNavigationLayout.tsx';
import PageLayout from './PageLayout.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BottomNavigationLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/detail" element={<Detail />} />
            <Route path="/user-info" element={<UserInfo />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/result" element={<Result />}>
              <Route path="popular" element={<Popular />} />
              <Route path="strength-weakness" element={<StrengthWeakness />} />
              <Route path="growth-prediction" element={<GrowthPrediction />} />
              <Route path="strategy" element={<Strategy />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
