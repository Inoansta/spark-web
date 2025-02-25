interface OnBoardingFrame {
  title: React.ReactElement;
  subTitle: string;
  children: React.ReactElement;
}

export default function OnBoardingFrame({
  title,
  subTitle,
  children,
}: OnBoardingFrame) {
  return (
    <div>
      <div className={'flex flex-col justify-center my-[40px] gap-[5px]'}>
        <div
          className={
            'text-[24px] font-[800] leading-[32px] text-[#333333] text-center'
          }
        >
          {title}
        </div>
        <div
          className={
            'text-[13px] font-[700] leading-[18px] text-[#8D9199] text-center'
          }
        >
          {subTitle}
        </div>
      </div>
      <div className={'mb-[40px] px-[40px] flex justify-center items-center'}>
        {children}
      </div>
    </div>
  );
}
