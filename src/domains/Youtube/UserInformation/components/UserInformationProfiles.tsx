import { SparkIcon } from '@/assets/svg/SparkIcon';

function UserInformationProfiles() {
  return (
    <div className={'flex flex-row mt-[20px] items-center'}>
      <SparkIcon className={'w-12 h-12'} />
      <div
        className={'text-[15px] font-[500] leading-[24px] text-black	ml-[10px]'}
      >
        스파크
      </div>
    </div>
  );
}

export default UserInformationProfiles;
