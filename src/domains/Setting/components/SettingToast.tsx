import { useMoveLocation } from '@/shared/hooks';

interface SettingToast {
  closed: boolean;
  setClosed: () => void;
}

export default function SettingToast({ closed, setClosed }: SettingToast) {
  const navigate = useMoveLocation('/');

  const onClose = () => {
    setClosed();
  };

  const onLogOut = () => {
    sessionStorage.clear();
    setClosed();
    navigate();
  };

  return (
    <div
      className={`${closed ? 'hidden' : ''} fixed z-10 inset-0 bg-black bg-opacity-40 h-screen w-screen flex justify-center items-center`}
    >
      <div
        className={
          'w-[270px] h-[153px] bg-[#F3F4F7] rounded-large pt-[20px] flex flex-col gap-[2px] overflow-hidden'
        }
      >
        <div className={'px-[20px] pb-[15px] flex flex-col gap-[10px]'}>
          <div className={'text-[18px] font-[700] leading-[26px] text-center'}>
            로그아웃
          </div>
          <div
            className={
              'break-all text-[13px] text-[#333] font-[500] leading-[18px] text-center'
            }
          >
            로그아웃하면, 기록하신 데이터가 모두 삭제됩니다.
            로그아웃하시겠습니까?
          </div>
        </div>
        <div className={'border-t border-t-[#E5E5EA] flex flex-row'}>
          <button
            className={
              'py-[10px] text-[15px] font-[700] leading-[24px] text-[#06F] border-r border-r-[#E5E5EA] flex-1 active:bg-[#C0C2C8] rounded-bl-large'
            }
            onClick={onClose}
          >
            취소
          </button>
          <button
            className={
              'py-[10px] text-[15px] font-[700] leading-[24px] text-[#FF4242] flex-1 active:bg-[#C0C2C8] rounded-br-large'
            }
            onClick={onLogOut}
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}
