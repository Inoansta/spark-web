import SparkIcon from '@/assets/svg/sparkIcon.svg?react';

function UserInformationProfiles() {
  return (
    <div className={'flex flex-row mt-[20px] items-center'}>
      <SparkIcon style={{ width: '48px', height: '48px' }} />
      <div className={'text-body-m text-black	ml-[10px]'}>스파크</div>
    </div>
  );
}

export default UserInformationProfiles;
