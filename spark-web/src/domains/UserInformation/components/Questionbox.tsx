interface Questionbox {
  questions: string;
  questionType: 'first' | 'last';
}

const style = {
  first: 'rounded-medium',
  last: 'rounded-b-medium rounded-tr-medium',
};

function Questionbox({ questions, questionType }: Questionbox) {
  return (
    <div
      className={`text-left mt-[5px] ${questionType === 'last' ? 'mb-[5px]' : null}`}
    >
      <div
        className={`bg-primary1 text-black inline-block px-[20px] py-[10px] ${style[questionType]}`}
      >
        {questions}
      </div>
    </div>
  );
}

export default Questionbox;
