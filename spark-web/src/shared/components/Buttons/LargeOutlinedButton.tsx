interface LargeOutlinedButton {
  text: string;
  onClick: () => void;
}

function LargeOutlinedButton({ text, onClick }: LargeOutlinedButton) {
  return (
    <div className={'inline-block flex justify-center'}>
      <button
        onClick={() => onClick()}
        className={
          'px-[20px] w-full max-w-[335px] h-[48px] text-primary5 border border-primary5  rounded-md active:bg-primary1'
        }
      >
        {text}
      </button>
    </div>
  );
}

export default LargeOutlinedButton;
