interface LargePrimaryFilledButton {
	text: string;
	onClick: () => void;
}

function LargePrimaryFilledButton({ text, onClick }: LargePrimaryFilledButton) {
	return (
		<div className={"flex justify-center"}>
			<button
				onClick={() => onClick()}
				className={
					"px-[20px] py-[0px] w-full max-w-[335px] h-[48px] bg-primary5 text-white text-subtitle-b rounded-medium active:bg-primary7"
				}
			>
				{text}
			</button>
		</div>
	);
}

export default LargePrimaryFilledButton;
