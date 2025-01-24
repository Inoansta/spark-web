interface Questionbox {
	questions: string;
	questionType: "first" | "last";
}

const style = {
	first:
		"bg-primary1 text-black px-[20px] py-[10px] rounded-medium inline-block",
	last: "bg-primary1 text-black px-[20px] py-[10px] rounded-b-medium rounded-tr-medium inline-block",
};

function Questionbox({ questions, questionType }: Questionbox) {
	return (
		<div className={"text-left mt-[5px]"}>
			<div className={style[questionType]}>{questions}</div>
		</div>
	);
}

export default Questionbox;
