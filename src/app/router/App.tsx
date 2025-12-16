import { BrowserRouter, Route, Routes } from 'react-router';
import Analysis from '@/pages/Analysis';
import Detail from '@/pages/Detail';
import GrowthPredictionBefore from '@/pages/GrowthPredictionBefore';
import Home from '@/pages/Home';
import InstagramDetail from '@/pages/InstagramDetail';
import InstagramStrategyFigmaSection1 from '@/pages/InstagramFigmaSection1';
import InstagramGrowthPrediction from '@/pages/InstagramGrowthPrediction';
import InstagramPopular from '@/pages/InstagramPopular';
import InstagramStrengthWeakness from '@/pages/InstagramStrengthWeakness';
import Login from '@/pages/Login';
import Oauth from '@/pages/Oauth';
import OauthMeta from '@/pages/OauthMeta';
import OnBoarding from '@/pages/OnBoarding';
import Popular from '@/pages/Popular';
import Setting from '@/pages/Setting';
import StrategyB from '@/pages/StrategyB';
import StrategyBefore from '@/pages/StrategyBefore';
import StrategyFigmaSection1 from '@/pages/StrategyFigmaSection1';
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
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedLayout />}>
            <Route path="/detail" element={<Detail />} />
            <Route path="/instagram-detail" element={<InstagramDetail />} />
            <Route
              path="/user-info/:platform"
              element={
                <QuerySuspenseBoundary loadingFallback={<>Loading...</>}>
                  <UserInfo />
                </QuerySuspenseBoundary>
              }
            />
            <Route path="/analysis/:platform" element={<Analysis />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/instagram-popular" element={<InstagramPopular />} />
            <Route path="/strength-weakness" element={<StrengthWeakness />} />
            <Route
              path="/instagram-strength-weakness"
              element={<InstagramStrengthWeakness />}
            />
            <Route
              path="/growth-prediction-before"
              element={<GrowthPredictionBefore />}
            />
            <Route
              path="/instagram-growth-prediction"
              element={<InstagramGrowthPrediction />}
            />
            <Route
              path="/strategy"
              element={
                <QuerySuspenseBoundary loadingFallback={<StrategyBefore />}>
                  <StrategyFigmaSection1 />
                </QuerySuspenseBoundary>
              }
            />
            <Route
              path="/instagram-strategy"
              element={
                <QuerySuspenseBoundary loadingFallback={<StrategyBefore />}>
                  <InstagramStrategyFigmaSection1 />
                </QuerySuspenseBoundary>
              }
            />
            <Route
              path="/strategy/:id"
              element={
                <QuerySuspenseBoundary loadingFallback={<StrategyBefore />}>
                  <StrategyB />
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
