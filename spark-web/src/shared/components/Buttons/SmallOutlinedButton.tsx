interface SmallOutlinedButton {
	text: string;
	onClick: () => void;
}

function SmallOutlinedButton({ text, onClick }): SmallOutlinedButton {
	return (
		<div className={"flex justify-center"}>
			<button
				className={
					"px-[20px] w-full max-w-[70px] h-[40px] text-primary5 border border-primary5  rounded-md active:bg-primary1"
				}
				onClick={() => onClick()}
			>
				{text}
			</button>
		</div>
	);
}

export default SmallOutlinedButton;
