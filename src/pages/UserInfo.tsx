import { RefObject, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useStrategyStore from '@/app/store/useStrategyStore';
import FulltimeParttime from '@/domains/UserInformation/components/Footers/FulltimeParttime';
import SNSGoal from '@/domains/UserInformation/components/Footers/SNSGoal';
import Questionbox from '@/domains/UserInformation/components/Questionbox';
import SheetContents from '@/domains/UserInformation/components/SheetContent';
import UserDialogbox from '@/domains/UserInformation/components/UserDialogbox';
import UserInfoCard from '@/domains/UserInformation/components/UserInfoCard';
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
  const { platform } = useParams() as { platform: 'm' | 'y' };
  const handleMoveLocation = useMoveLocation(`/analysis/${platform}`);

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
      case 2:
        setTimeout(() => setSteps(3), 1000);
        break;
      case 5:
        setTimeout(() => setSteps(6), 1000);
        break;
      case 6:
        setTimeout(() => setSteps(7), 1000);
        break;
      case 8:
        setTimeout(() => setSteps(9), 1000);
        break;
      case 9:
        setTimeout(() => setSteps(10), 1000);
        break;
      case 11:
        setTimeout(() => setSteps(12), 1000);
        break;
      case 12:
        setTimeout(() => setSteps(13), 1000);
        break;
    }
  }, [steps]);

  return (
    <div className={'px-[20px] flex flex-col'}>
      {steps >= 0 ? (
        <>
          <UserInformationProfiles />
          <div className={'mt-[10px]'}>
            <UserInfoCard platform={platform} />
          </div>
          <Questionbox questions={QUESTIONS.contents1} questionType={'last'} />
        </>
      ) : null}
      {steps >= 1 ? (
        <>
          <Questionbox questions={QUESTIONS.contents2} questionType={'last'} />
        </>
      ) : null}
      {steps >= 2 ? (
        <>
          <Questionbox questions={QUESTIONS.contents3} questionType={'last'} />
        </>
      ) : null}
      {steps === 3 ? (
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
      {steps >= 5 ? (
        <UserDialogbox answers={strategyInfo.userContents} isTyped={isTyped} />
      ) : null}
      {steps >= 6 ? (
        <>
          <UserInformationProfiles />
          <Questionbox questions={QUESTIONS.fulltime} questionType={'last'} />
        </>
      ) : null}
      {steps === 7 ? (
        <FulltimeParttime
          onClick={(fulltime) => {
            setStrategyInfo('userFulltime', fulltime);
          }}
          setSteps={() => setSteps(8)}
        />
      ) : null}
      {steps >= 8 ? (
        <UserDialogbox answers={strategyInfo.userFulltime} isTyped={isTyped} />
      ) : null}
      {steps >= 9 ? (
        <>
          <UserInformationProfiles />
          <Questionbox questions={QUESTIONS.goal} questionType={'last'} />
        </>
      ) : null}
      {steps === 10 ? (
        <SNSGoal
          onClick={(goal) => {
            setStrategyInfo('userGoal', goal);
            setSteps(11);
          }}
          setIsTyped={() => setIsTyped(true)}
        />
      ) : null}
      {steps >= 11 ? (
        <UserDialogbox answers={strategyInfo.userGoal} isTyped={isTyped} />
      ) : null}
      {steps >= 12 ? (
        <>
          <UserInformationProfiles />
          <Questionbox questions={QUESTIONS.analyze} questionType={'last'} />
        </>
      ) : null}
      {steps === 13 ? (
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
