import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function PopularSkeleton() {
  return (
    <>
      <SkeletonTheme baseColor={'#C0C2C8'} highlightColor={'#E5E5EA80'}>
        <div>
          <Skeleton width={'66%'} height={40} borderRadius={5} />
          <Skeleton height={24} borderRadius={5} />
        </div>
        <div className="flex flex-col gap-y-[20px] mt-[40px]">
          <div className="bg-white rounded-extraLarges p-[10px] flex flex-row gap-x-[10px]">
            <div
              className={`absolute bg-[#5E6166] w-[42px] h-[44px] p-[10px] rounded-b-full ml-[20px] -translate-y-[15px] z-10`}
            />
            <Skeleton width={120} height={90} borderRadius={10} />
            <div className="flex flex-1 flex-col gap-y-[20px] items-center py-[17px] pr-[10px]">
              <Skeleton width={180} height={18} borderRadius={5} />
              <div className="flex flex-row justify-between w-full">
                <Skeleton width={34} height={18} borderRadius={5} />
                <Skeleton width={14} height={18} borderRadius={5} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-extraLarges p-[10px] flex flex-row gap-x-[10px]">
            <div
              className={`absolute bg-[#8D9199] w-[42px] h-[44px] p-[10px] rounded-b-full ml-[20px] -translate-y-[15px] z-10`}
            />
            <Skeleton width={120} height={90} borderRadius={10} />
            <div className="flex flex-1 flex-col gap-y-[20px] items-center py-[17px] pr-[10px]">
              <Skeleton width={180} height={18} borderRadius={5} />
              <div className="flex flex-row justify-between w-full">
                <Skeleton width={34} height={18} borderRadius={5} />
                <Skeleton width={14} height={18} borderRadius={5} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-extraLarges p-[10px] flex flex-row gap-x-[10px]">
            <div
              className={`absolute bg-[#F3F4F7] w-[42px] h-[44px] p-[10px] rounded-b-full ml-[20px] -translate-y-[15px] z-10`}
            />
            <Skeleton width={120} height={90} borderRadius={10} />
            <div className="flex flex-1 flex-col gap-y-[20px] items-center py-[17px] pr-[10px]">
              <Skeleton width={180} height={18} borderRadius={5} />
              <div className="flex flex-row justify-between w-full">
                <Skeleton width={34} height={18} borderRadius={5} />
                <Skeleton width={14} height={18} borderRadius={5} />
              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
}
