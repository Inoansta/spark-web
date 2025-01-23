interface LastDialogbox {
  questions: string;
}

function LastDialogbox({ questions }: LastDialogbox) {
  return (
    <div className={'text-left mt-[5px]'}>
      <div
        className={
          'bg-primary1 text-black px-[20px] py-[10px] rounded-b-medium rounded-tr-medium inline-block'
        }
      >
        {questions}
      </div>
    </div>
  );
}

export default LastDialogbox;
