import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Analysis from '@/pages/Analysis';
import Detail from '@/pages/Detail';
import GrowthPrediction from '@/pages/GrowthPrediction';
import GrowthPredictionBefore from '@/pages/GrowthPredictionBefore';
import Home from '@/pages/Home';
import InstagramDetail from '@/pages/InstagramDetail';
import InstagramStrategyFigmaSection1 from '@/pages/InstagramFigmaSection1';
import InstagramPopular from '@/pages/InstagramPopular';
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
import loginLoader from './loader/loginLoader';

export default function RouterApp() {
  const router = createBrowserRouter([
    {
      element: <BottomNavigationLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/setting', element: <Setting /> },
      ],
    },
    {
      element: <PageLayout />,
      children: [
        { path: '/onboarding', element: <OnBoarding /> },
        { path: '/login', element: <Login />, loader: loginLoader },
        {
          element: <ProtectedLayout />,
          children: [
            { path: '/detail', element: <Detail /> },
            { path: '/instagram-detail', element: <InstagramDetail /> },
            {
              path: '/user-info/:platform',
              element: (
                <QuerySuspenseBoundary loadingFallback={<>Loading...</>}>
                  <UserInfo />
                </QuerySuspenseBoundary>
              ),
            },
            { path: '/analysis/:platform', element: <Analysis /> },
            { path: '/popular', element: <Popular /> },
            { path: '/instagram-popular', element: <InstagramPopular /> },
            { path: '/strength-weakness', element: <StrengthWeakness /> },
            {
              path: '/growth-prediction-before',
              element: <GrowthPredictionBefore />,
            },
            { path: '/growth-prediction', element: <GrowthPrediction /> },
            {
              path: '/strategy',
              element: (
                <QuerySuspenseBoundary loadingFallback={<StrategyBefore />}>
                  <StrategyFigmaSection1 />
                </QuerySuspenseBoundary>
              ),
            },
            {
              path: '/instagram-strategy',
              element: (
                <QuerySuspenseBoundary loadingFallback={<StrategyBefore />}>
                  <InstagramStrategyFigmaSection1 />
                </QuerySuspenseBoundary>
              ),
            },
            {
              path: '/strategy/:id',
              element: (
                <QuerySuspenseBoundary loadingFallback={<StrategyBefore />}>
                  <StrategyB />
                </QuerySuspenseBoundary>
              ),
            },
          ],
        },
      ],
    },
    { path: '/oauth/google', element: <Oauth /> },
    { path: '/oauth/meta', element: <OauthMeta /> },
  ]);

  return <RouterProvider router={router} />;
}

//StrategyBefore
//StrategyB - /strategy/:id
//StrategyBefore - /instagram-strategy
//InstagramStrategyFigmaSection1 - /strategy

//Looading...
//UserInfo - /user-info/:platform
