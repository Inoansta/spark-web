import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function GrowthPredictionSkeleton() {
  return (
    <>
      <SkeletonTheme baseColor={'#FFFFFF1A'} highlightColor={'#FFFFFFCC'}>
        <Skeleton
          width={'66%'}
          height={32}
          borderRadius={5}
          containerClassName="flex justify-center items-center mb-[100px]"
        />
        <div className="flex mb-[30px]">
          <Skeleton
            width={'80%'}
            height={200}
            borderRadius={20}
            containerClassName="flex-1 flex justify-center items-center"
            style={{
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: 'white',
            }}
          />
        </div>
        <div className="flex flex-col gap-y-[5px] my-[20px]">
          <Skeleton width={'100%'} height={24} borderRadius={5} />
          <Skeleton width={'100%'} height={24} borderRadius={5} />
          <Skeleton width={'66%'} height={24} borderRadius={5} />
        </div>
      </SkeletonTheme>
    </>
  );
}
