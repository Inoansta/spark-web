import { useState, useEffect, useRef, RefObject } from "react";

import UserInformationProfiles from "./components/UserInformationProfiles";
import Questionbox from "./components/Questionbox";
import UserDialogbox from "./components/UserDialogbox";
import BottomSheetModal from "@/shared/components/BottomSheetModal/BottomSheetModal";
import PrimaryChips from "@/shared/components/Chips/PrimaryChips";
import Buttons from "@/shared/components/Buttons/Buttons";
import FulltimeParttime from "./components/Footers/FulltimeParttime";
import SNSGoal from "./components/Footers/SNSGoal";

import { QUESTIONS } from "./questions";

interface userAnswer {
	CONTENTS: string;
	FULLTIME: string;
	GOAL: string;
}

const buttons: string[] = [
	"푸드/먹방",
	"패션",
	"뷰티",
	"여행",
	"반려동물",
	"IT/과학기술",
	"엔터테인먼트",
	"게임",
	"영화",
	"음악",
	"육아/패밀리",
	"경제",
	"교육",
	"vlog",
	"운동",
];

function UserInformation() {
	const [steps, setSteps] = useState<number>(0);
	const [onlyClicked, setOnlyClicked] = useState<string>("");
	const [open, setOpen] = useState<boolean>(false);
	const [userAnswer, setUserAnswer] = useState<userAnswer>({
		CONTENTS: "",
		FULLTIME: "",
		GOAL: "",
	});
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

	function SheetContents() {
		return (
			<div>
				<div className={"flex flex-wrap gap-[10px] py-[20px]"}>
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
				<div className={"flex justify-end pb-[30px]"}>
					<Buttons
						text={"확인"}
						onClick={() => {
							setOpen(false);
							setSteps(3);
						}}
						buttonType={"small-outlined-button"}
					/>
				</div>
			</div>
		);
	}

	return (
		<div className={"px-[20px] flex flex-col"}>
			{steps === 0 ? (
				<>
					<UserInformationProfiles />
					<Questionbox questions={QUESTIONS.contents1} questionType={"last"} />
				</>
			) : null}
			{steps >= 1 ? (
				<>
					<UserInformationProfiles />
					<Questionbox questions={QUESTIONS.contents1} questionType={"first"} />
					<Questionbox questions={QUESTIONS.contents2} questionType={"last"} />
				</>
			) : null}
			{steps === 2 ? (
				<>
					<div className={"fixed left-0 right-0 px-[20px] py-[12px] bottom-0"}>
						<Buttons
							text={"답변하기"}
							buttonType={"large-filled-button"}
							onClick={() => setOpen(true)}
						/>
					</div>
					<BottomSheetModal
						open={open}
						setClose={() => setOpen(false)}
						title={"활동 분야를 선택해주세요."}
						contents={<SheetContents />}
					/>
				</>
			) : null}
			{steps >= 4 ? (
				<UserDialogbox answers={userAnswer.CONTENTS} isTyped={isTyped} />
			) : null}
			{steps >= 5 ? (
				<>
					<UserInformationProfiles />
					<Questionbox questions={QUESTIONS.fulltime} questionType={"last"} />
				</>
			) : null}
			{steps === 6 ? (
				<FulltimeParttime
					onClick={(fulltime) =>
						setUserAnswer({ ...userAnswer, FULLTIME: fulltime })
					}
					setSteps={() => setSteps(7)}
				/>
			) : null}
			{steps >= 7 ? (
				<UserDialogbox answers={userAnswer.FULLTIME} isTyped={isTyped} />
			) : null}
			{steps >= 8 ? (
				<>
					<UserInformationProfiles />
					<Questionbox questions={QUESTIONS.goal} questionType={"last"} />
				</>
			) : null}
			{steps === 9 ? (
				<SNSGoal
					onClick={(goal) => {
						setUserAnswer({ ...userAnswer, GOAL: goal });
						setSteps(10);
					}}
					setIsTyped={() => setIsTyped(true)}
				/>
			) : null}
			{steps >= 10 ? (
				<UserDialogbox answers={userAnswer.GOAL} isTyped={isTyped} />
			) : null}
			{steps >= 11 ? (
				<>
					<UserInformationProfiles />
					<Questionbox questions={QUESTIONS.analyze} questionType={"last"} />
				</>
			) : null}
			{steps === 12 ? (
				<div className={"bottom-0 sticky py-[12px]  bg-white"}>
					{/* onClick에 api연결하기 */}
					<Buttons
						text={"나만의 성장비법 받기"}
						buttonType={"large-filled-button"}
						onClick={() => {}}
					/>
				</div>
			) : null}
			<div ref={bottomRef} />
		</div>
	);
}

export default UserInformation;
