import type { ReactNode } from 'react';
import Text from '../components/Text';

interface SpeechBubbleProps {
  text: string;
  icon?: ReactNode;
}

export default function SpeechBubble({ text, icon }: SpeechBubbleProps) {
  return (
    <div className="relative flex items-center bg-gray-100 text-gray-700 px-[10px] py-[5px] rounded-[10px] shadow-md bg-white">
      {icon}
      <Text as="description" title={text} className="text-[11px]" />
      <div className="absolute bottom-1 left-4 transform translate-y-full w-2 h-2 bg-gray-100 rotate-45 bg-white"></div>
    </div>
  );
}
