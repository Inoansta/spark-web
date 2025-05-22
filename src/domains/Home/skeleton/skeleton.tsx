import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Flex } from '@/shared/ui';

export default function HomeSkeleton() {
  return (
    <>
      <Flex direction="column" gapY={5} className="px-5 py-[20px]">
        <SkeletonTheme baseColor={'#C0C2C8'} highlightColor={'#E5E5EA'}>
          <div className="bg-white rounded-extraLarges px-[20px] pt-[20px] pb-[30px] flex flex-col gap-y-[20px] border border-[#E5E5EA] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)]">
            <div className="text-[13px] font-[800] text-[#8D9199] pb-[10px] text-center border-b border-b-[#E5E5EA]">
              조금만 기다려 주세요
            </div>
            <div className="flex flex-row gap-x-[40px] items-center">
              <Skeleton borderRadius={50} width={60} height={60} />
              <div className="text-[15px] font-[500] text-[#8D9199] text-center">
                유튜브에서 열심히
                <br />
                정보를 가져오고 있어요
              </div>
            </div>
          </div>

          <div className="pt-[15px] pb-[20px] bg-white rounded-extraLarges flex flex-col gap-y-[20px] px-[20px] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col gap-y-[5px]">
              <Skeleton width={'33%'} height={25} borderRadius={5} />
              <Skeleton width={'66%'} height={25} borderRadius={5} />
            </div>
            <Skeleton height={120} borderRadius={5} />
            <Skeleton height={48} borderRadius={5} />
          </div>
          <div className="flex justify-between p-[20px] bg-white rounded-extraLarges shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)]">
            <Skeleton width={200} height={25} borderRadius={5} />
            <Skeleton width={25} height={25} borderRadius={5} />
          </div>
        </SkeletonTheme>
      </Flex>
    </>
  );
}
