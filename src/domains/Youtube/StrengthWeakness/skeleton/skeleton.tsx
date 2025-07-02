import { Keyframe } from '@/shared/components';
import { Flex } from '@/shared/ui';

const animation = {
  animationName: 'StrengthWeaknessProgress',
  animationDuration: '1s',
  // animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  animationDirection: 'alternate',
} as React.CSSProperties;

export default function StrengthWeaknessSkeleton() {
  return (
    <>
      <div className="w-full h-[5px] rounded-full overflow-hidden relative">
        {/* <div
          className="absolute inset-0 bg-gradient-to-r from-[#C0C2C8] to-[#E5E5EA80]"
          style={animation}
        /> */}
        <Keyframe
          animationName="StrengthWeaknessProgress"
          from={{ backgroundColor: '#C0C2C8' }}
          to={{ backgroundColor: '#E5E5EA80' }}
        />
        <div className="absolute inset-0 w-full h-[20px]" style={animation} />
      </div>
      <Flex direction="column" gapY={28} className="mt-5 h-full">
        <Flex direction="column" align="start" gapY={3}>
          <span
            className={`rounded-xl px-[10px] py-[5px] w-[52px] h-[28px] bg-gray`}
          ></span>
          <Flex direction="column" gapY={2}>
            <Flex as="section" align="center" gapX={2}>
              <div className={'rounded-small  bg-gray w-[183px] h-[38px]'} />
            </Flex>
            <div className={'rounded-small w-[300px] h-[24px]  bg-gray'} />
            <div className={'rounded-small w-[100px] h-[24px]  bg-gray'} />
          </Flex>
        </Flex>

        <Flex
          align={'end'}
          justify={'center'}
          className={'px-[48px] min-h-64 max-w-full w-full gap-x-5'}
        >
          <div className={'rounded-medium h-[60px] w-full  bg-gray'} />
          <div className={'rounded-medium h-[110px] w-full  bg-gray'} />
          <div className={'rounded-medium h-[150px] w-full  bg-gray'} />
        </Flex>
      </Flex>
    </>
  );
}
