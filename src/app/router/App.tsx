import { BrowserRouter, Route, Routes } from 'react-router';
import Analysis from '@/pages/Analysis';
import Detail from '@/pages/Detail';
import GrowthPrediction from '@/pages/GrowthPrediction';
import GrowthPredictionBefore from '@/pages/GrowthPredictionBefore';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Oauth from '@/pages/Oauth';
import OauthMeta from '@/pages/OauthMeta';
import OnBoarding from '@/pages/OnBoarding';
import Popular from '@/pages/Popular';
import Result from '@/pages/Result';
import Setting from '@/pages/Setting';
import Strategy from '@/pages/Strategy';
import StrategyBefore from '@/pages/StrategyBefore';
import StrengthWeakness from '@/pages/StrengthWeakness';
import UserInfo from '@/pages/UserInfo';
import {
  BottomNavigationLayout,
  PageLayout,
  ProtectedLayout,
} from '@/shared/ui';
import { QuerySuspenseBoundary } from '../provider';

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BottomNavigationLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route
            path="/login"
            element={
              <QuerySuspenseBoundary loadingFallback={<>Loading...</>}>
                <Login />
              </QuerySuspenseBoundary>
            }
          />
          <Route element={<ProtectedLayout />}>
            <Route path="/detail" element={<Detail />} />

            <Route
              path="/user-info"
              element={
                <QuerySuspenseBoundary loadingFallback={<>Loading...</>}>
                  <UserInfo />
                </QuerySuspenseBoundary>
              }
            />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/result" element={<Result />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/strength-weakness" element={<StrengthWeakness />} />
            <Route
              path="/growth-prediction-before"
              element={<GrowthPredictionBefore />}
            />
            <Route path="/growth-prediction" element={<GrowthPrediction />} />
            <Route
              path="/strategy"
              element={
                <QuerySuspenseBoundary loadingFallback={<StrategyBefore />}>
                  <Strategy />
                </QuerySuspenseBoundary>
              }
            />
          </Route>
        </Route>
        <Route path="/oauth/google" element={<Oauth />} />
        <Route path="/oauth/meta" element={<OauthMeta />} />
      </Routes>
    </BrowserRouter>
  );
}
