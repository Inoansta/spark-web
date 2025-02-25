interface PrimaryChips {
  text: string;
  setOnlyClicked: () => void;
  onlyClicked: string;
}

function PrimaryChips({ text, setOnlyClicked, onlyClicked }: PrimaryChips) {
  return (
    <div
      className={`inline-block px-[20px] py-[8px] text-black text-[13px] font-[700] leading-[18px] inline-flex rounded-full  border border-disabled ${onlyClicked === text ? 'bg-primary5 border-primary5 text-white' : ''}`}
      onClick={() => setOnlyClicked()}
    >
      {text}
    </div>
  );
}

export default PrimaryChips;
