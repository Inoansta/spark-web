import { Suspense } from 'react';
import { QuerySuspenseBoundary } from '@/app/provider';
import analysis from '@/assets/animation/analysis/analysis.json';
import { Analysis as AnalysisIcon } from '@/assets/svg/logo/Analysis';
import { Bulb } from '@/assets/svg/logo/Bulb';
import { Graph } from '@/assets/svg/logo/Graph';
import { YoutubeIcon } from '@/assets/svg/logo/YoutubeIcon';
import AnalysisState from '@/domains/Youtube/Analysis/components/AnalysisState';
import {
  ChannelProfileFetch,
  GrowthPrediectionFetch,
  IsFetching,
  StrengthWeaknessFetch,
  TopVideosFetch,
} from '@/domains/Youtube/Analysis/components/DataFetchComponents';
import ProcessStateItem from '@/domains/Youtube/Analysis/components/ProcessStateItem';
import { Flex, LottieAnimation, Text } from '@/shared/ui';

export default function Analysis() {
  return (
    <main className="bg-line p-[10px] min-h-screen">
      <QuerySuspenseBoundary loadingFallback={<>Loading...</>}>
        <Flex
          direction="column"
          align="center"
          className="flex-1 py-[10px]"
          as="section"
        >
          <Text
            as="title"
            title="조금만 기다려주세요"
            className="text-primary4 text-2xl"
          />
          <Text
            as="description"
            title="열심히 분석하고 있어요!"
            className="text-gray5"
          />
        </Flex>
        <Flex justify="center" as="section">
          <LottieAnimation
            animationData={analysis}
            className="w-[300px] h-[300px]"
          />
        </Flex>

        <Flex direction="column" gapY={5} className="px-[50px]" as="ul">
          <AnalysisState
            icon={<YoutubeIcon />}
            title="채널 정보 불러오기"
            DataFetchComponent={ChannelProfileFetch}
            delay={0} // 첫 번째는 바로 실행
          />

          <AnalysisState
            icon={<AnalysisIcon />}
            title="채널 데이터 분석"
            DataFetchComponent={TopVideosFetch}
            delay={1000} // 1초 후 실행
          />

          <AnalysisState
            icon={<Graph />}
            title="채널 강약점 진단"
            DataFetchComponent={StrengthWeaknessFetch}
            delay={2000} // 2초 후 실행
          />

          <Suspense
            fallback={
              <ProcessStateItem
                icon={<Bulb />}
                title="채널 성장 비법"
                stateTitle="시작 전이에요"
                state="onload"
              />
            }
          >
            <IsFetching>
              <AnalysisState
                icon={<Bulb />}
                title="채널 성장 비법"
                DataFetchComponent={GrowthPrediectionFetch}
              />
            </IsFetching>
          </Suspense>
        </Flex>
      </QuerySuspenseBoundary>
    </main>
  );
}
