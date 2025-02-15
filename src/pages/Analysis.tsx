import analysis from '@/assets/animation/analysis/analysis.json';
import loadingIcon from '@/assets/animation/analysis/loadingIcon.json';
import { YoutubeIcon } from '@/assets/svg/logo/YoutubeIcon';
import { LottieAnimation, Spacing, Text } from '@/shared/ui';
// import Analysis from '@/assets/svg/logo/Analysis';
// import Bulb from '@/assets/svg/logo/Bulb';
// import Graph from '@/assets/svg/logo/Graph';
// import successIcon from '@/assets/analysis/successIcon.json';

export default function Analysis() {
  return (
    <main className="bg-line p-[10px]">
      <section className="py-[10px] flex flex-col items-center flex-1">
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
      </section>
      <section className="flex justify-center">
        <LottieAnimation
          animationData={analysis}
          className="w-[300px] h-[300px]"
        />
      </section>
      <Spacing size="xlsmall" />
      <ul className="flex flex-col gap-y-5 px-5">
        <li className="flex justify-between items-center px-[15px] py-[5px]">
          <article className="flex">
            <div className="bg-primary5 rounded-[20px] p-2 mr-[10px]">
              <YoutubeIcon />
            </div>
            <section className="flex flex-col gap-x-[2px]">
              <Text as="title" title="채널 정보 불러오기" />
              <Text as="description" title="완료됐어요" />
            </section>
          </article>
          <LottieAnimation animationData={loadingIcon} />
        </li>
      </ul>
      <Spacing size="xsmall" />
    </main>
  );
}
