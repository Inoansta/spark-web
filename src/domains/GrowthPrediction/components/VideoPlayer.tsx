import DelayText from './DelayText';

export default function VideoPlayer() {
  return (
    <div className="relative w-full h-screen">
      <video className="w-full h-full object-cover" autoPlay muted playsInline>
        <source
          src="https://video-hosting-five.vercel.app/video/growthPredictionBefore.mp4"
          type="video/mp4"
        />
        브라우저가 비디오를 지원하지 않습니다.
      </video>

      <DelayText />
    </div>
  );
}
