import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import DelayText from './DelayText';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dyfmbsldb',
  },
});

export default function VideoPlayer() {
  const video = cld
    .video('fd6buwjlipqk9fzfkklx')
    .resize(fill().width(390).height(800));

  return (
    <div className="relative w-full h-screen">
      <AdvancedVideo
        cldVid={video}
        autoPlay
        playsInline
        muted
        controls={false}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      <DelayText />
    </div>
  );
}
