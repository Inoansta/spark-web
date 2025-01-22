import { useState, useEffect } from 'react';

interface UserDialogbox {
  answers: string;
  isTyped: boolean;
}

function UserDialogbox({ answers, isTyped }: UserDialogbox) {
  const [formedQuestions, setFormedQuestions] = useState<string>('');

  useEffect(() => {
    setFormedQuestions(isTyped ? answers : `${answers}입니다.`);
  }, []);

  return (
    <div className={'text-right my-[20px]'}>
      <div
        className={
          'bg-highEmphasis text-white px-[20px] py-[10px] rounded-b-medium rounded-tl-medium inline-block'
        }
      >
        {formedQuestions}
      </div>
    </div>
  );
}

export default UserDialogbox;
