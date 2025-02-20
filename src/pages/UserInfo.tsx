import { RefObject, useEffect, useRef, useState } from 'react';
import useStrategyStore from '@/app/store/useStrategyStore';
import FulltimeParttime from '@/domains/UserInformation/components/Footers/FulltimeParttime';
import SNSGoal from '@/domains/UserInformation/components/Footers/SNSGoal';
import Questionbox from '@/domains/UserInformation/components/Questionbox';
import SheetContents from '@/domains/UserInformation/components/SheetContent';
import UserDialogbox from '@/domains/UserInformation/components/UserDialogbox';
import UserInformationProfiles from '@/domains/UserInformation/components/UserInformationProfiles';
import { QUESTIONS } from '@/domains/UserInformation/questions';
import { Button } from '@/shared/components';
import BottomSheetModal from '@/shared/components/BottomSheetModal/BottomSheetModal';
import { useMoveLocation } from '@/shared/hooks';

export interface userAnswer {
  CONTENTS: string;
  FULLTIME: string;
  GOAL: string;
}

const buttons = [
  '푸드/먹방',
  '패션',
  '뷰티',
  '여행',
  '반려동물',
  'IT/과학기술',
  '엔터테인먼트',
  '게임',
  '영화',
  '음악',
  '육아/패밀리',
  '경제',
  '교육',
  'vlog',
  '운동',
];

function UserInfo() {
  const [steps, setSteps] = useState<number>(0);
  const [onlyClicked, setOnlyClicked] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const strategyInfo = useStrategyStore((store) => store);
  const setStrategyInfo = useStrategyStore((store) => store.setField);

  const handleMoveLocation = useMoveLocation('/analysis');

  const [isTyped, setIsTyped] = useState<boolean>(false);
  const bottomRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView();

    switch (steps) {
      case 0:
        setTimeout(() => setSteps(1), 1000);
        break;
      case 1:
        setTimeout(() => setSteps(2), 1000);
        break;
      case 3:
        setTimeout(() => setSteps(4), 1000);
        break;
      case 4:
        setTimeout(() => setSteps(5), 1000);
        break;
      case 5:
        setTimeout(() => setSteps(6), 1000);
        break;
      case 7:
        setTimeout(() => setSteps(8), 1000);
        break;
      case 8:
        setTimeout(() => setSteps(9), 1000);
        break;
      case 10:
        setTimeout(() => setSteps(11), 1000);
        break;
      case 11:
        setTimeout(() => setSteps(12), 1000);
        break;
    }
  }, [steps]);

  return (
    <div className={'px-[20px] flex flex-col'}>
      {steps === 0 ? (
        <>
          <UserInformationProfiles />
          <Questionbox questions={QUESTIONS.contents1} questionType={'last'} />
        </>
      ) : null}
      {steps >= 1 ? (
        <>
          <UserInformationProfiles />
          <Questionbox questions={QUESTIONS.contents1} questionType={'first'} />
          <Questionbox questions={QUESTIONS.contents2} questionType={'last'} />
        </>
      ) : null}
      {steps === 2 ? (
        <>
          <div className={'fixed left-0 right-0 px-[20px] py-[12px] bottom-0'}>
            <Button
              text={'답변하기'}
              buttonType={'large-filled-button'}
              onClick={() => setOpen(true)}
            />
          </div>
          <BottomSheetModal
            open={open}
            setClose={() => setOpen(false)}
            title={'활동 분야를 선택해주세요.'}
            contents={
              <SheetContents
                setOnlyClicked={(onlyClick: string) =>
                  setOnlyClicked(onlyClick)
                }
                setUserAnswer={(userAnswers: userAnswer) => {
                  setStrategyInfo('userContents', userAnswers.CONTENTS);
                }}
                userAnswer={{
                  CONTENTS: strategyInfo.userContents,
                  FULLTIME: strategyInfo.userFulltime,
                  GOAL: strategyInfo.userGoal,
                }}
                onlyClicked={onlyClicked}
                setSteps={(step: number) => setSteps(step)}
                setOpen={(opened: boolean) => setOpen(opened)}
                buttons={buttons}
              />
            }
          />
        </>
      ) : null}
      {steps >= 4 ? (
        <UserDialogbox answers={strategyInfo.userContents} isTyped={isTyped} />
      ) : null}
      {steps >= 5 ? (
        <>
          <UserInformationProfiles />
          <Questionbox questions={QUESTIONS.fulltime} questionType={'last'} />
        </>
      ) : null}
      {steps === 6 ? (
        <FulltimeParttime
          onClick={(fulltime) => {
            setStrategyInfo('userFulltime', fulltime);
          }}
          setSteps={() => setSteps(7)}
        />
      ) : null}
      {steps >= 7 ? (
        <UserDialogbox answers={strategyInfo.userFulltime} isTyped={isTyped} />
      ) : null}
      {steps >= 8 ? (
        <>
          <UserInformationProfiles />
          <Questionbox questions={QUESTIONS.goal} questionType={'last'} />
        </>
      ) : null}
      {steps === 9 ? (
        <SNSGoal
          onClick={(goal) => {
            setStrategyInfo('userGoal', goal);
            setSteps(10);
          }}
          setIsTyped={() => setIsTyped(true)}
        />
      ) : null}
      {steps >= 10 ? (
        <UserDialogbox answers={strategyInfo.userGoal} isTyped={isTyped} />
      ) : null}
      {steps >= 11 ? (
        <>
          <UserInformationProfiles />
          <Questionbox questions={QUESTIONS.analyze} questionType={'last'} />
        </>
      ) : null}
      {steps === 12 ? (
        <div className={'bottom-0 sticky py-[12px]  bg-white'}>
          {/* onClick에 api연결하기 */}
          <Button
            text={'나만의 성장비법 받기'}
            buttonType={'large-filled-button'}
            onClick={handleMoveLocation}
          />
        </div>
      ) : null}
      <div ref={bottomRef} />
    </div>
  );
}

export default UserInfo;
