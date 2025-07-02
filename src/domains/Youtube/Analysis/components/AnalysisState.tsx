import { ReactNode, Suspense, useEffect, useState } from 'react';
import ProcessStateItem, { ProcessStateItemProps } from './ProcessStateItem';

interface AnalysisStateProps
  extends Pick<ProcessStateItemProps, 'icon' | 'title'> {
  DataFetchComponent: React.ComponentType<{ icon: ReactNode; title: string }>;
  delay?: number; // ✅ 실행 지연을 위한 delay 추가
}

export default function AnalysisState({
  icon,
  title,
  DataFetchComponent,
  delay = 0, // 기본값 0 (즉시 실행)
}: AnalysisStateProps) {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), delay); // ✅ 개별 delay 적용
    return () => clearTimeout(timer);
  }, [delay]);

  return start ? (
    <Suspense
      fallback={
        <ProcessStateItem
          icon={icon}
          title={title}
          stateTitle="진행 중이에요"
          state="pending"
        />
      }
    >
      <DataFetchComponent icon={icon} title={title} />
    </Suspense>
  ) : (
    <ProcessStateItem
      icon={icon}
      title={title}
      stateTitle="시작 전이에요"
      state="onload"
    />
  );
}
