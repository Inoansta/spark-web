import { userAnswer } from '@/pages/UserInfo';
import { Button, PrimaryChips } from '@/shared/components';

interface SheetContents {
  setOnlyClicked: (onlyClick: string) => void;
  setUserAnswer: (userAnswers: userAnswer) => void;
  userAnswer: userAnswer;
  onlyClicked: string;
  setSteps: (step: number) => void;
  setOpen: (open: boolean) => void;
  buttons: string[];
}

function SheetContents({
  setOnlyClicked,
  setUserAnswer,
  userAnswer,
  onlyClicked,
  setSteps,
  setOpen,
  buttons,
}: SheetContents) {
  return (
    <div>
      <div className={'flex flex-wrap gap-[10px] py-[20px]'}>
        {buttons.map((item) => {
          return (
            <PrimaryChips
              text={item}
              key={item}
              setOnlyClicked={() => {
                setOnlyClicked(item);
                setUserAnswer({ ...userAnswer, CONTENTS: item });
              }}
              onlyClicked={onlyClicked}
            />
          );
        })}
      </div>
      <div className={'flex justify-end pb-[30px]'}>
        <Button
          text={'확인'}
          onClick={() => {
            if (onlyClicked.length > 0) {
              setOpen(false);
              setSteps(3);
            }
          }}
          buttonType={'small-outlined-button'}
        />
      </div>
    </div>
  );
}

export default SheetContents;
