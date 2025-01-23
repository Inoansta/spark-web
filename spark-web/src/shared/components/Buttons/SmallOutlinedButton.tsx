interface SmallOutlinedButton {
  text: string;
  onClick: () => void;
}

function SmallOutlinedButton({ text, onClick }: SmallOutlinedButton) {
  return (
    <div className={'inline-block flex justify-center'}>
      <button
        onClick={() => onClick()}
        className={
          'px-[20px] w-full max-w-[70px] h-[40px] text-primary5 border border-primary5  rounded-md active:bg-primary1'
        }
      >
        {text}
      </button>
    </div>
  );
}

export default SmallOutlinedButton;
