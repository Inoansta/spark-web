interface FirstDialogbox {
	questions: string;
}

function FirstDialogbox({ questions }: FirstDialogbox) {
	return (
		<div className={"text-left mt-[10px]"}>
			<div
				className={
					"bg-primary1 text-black px-[20px] py-[10px] rounded-medium inline-block"
				}
			>
				{questions}
			</div>
		</div>
	);
}

export default FirstDialogbox;
