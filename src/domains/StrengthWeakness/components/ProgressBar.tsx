export default function ProgressBar({
  step,
  limit = 4,
}: {
  step: number;
  limit?: number;
}) {
  const getWidth = () => {
    return `${(step / limit) * 100}%`;
  };

  return (
    <div className="w-full h-4 bg-gray rounded-full overflow-hidden relative">
      <div
        className={`h-full bg-[linear-gradient(90deg,_#4557FF_0%,_#6E78FF_72.33%)] transition-all duration-1000 ease-in-out`}
        style={{ width: getWidth() }}
      />
    </div>
  );
}
