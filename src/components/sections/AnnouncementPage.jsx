import {
  PageSection,
  AnnouncementContainer,
  AnnouncementVideo,
} from "../../utils/utils-web-styles";
import Explainer from "../../assets/videos/revel-explainer.mp4";
import { useEffect, useRef } from "react";

const AnnouncementPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 1.0,
      }
    );
    observer.observe(video);
    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <PageSection $paddingY="0">
      <AnnouncementContainer>
        <AnnouncementVideo ref={videoRef} autoPlay muted preload="auto">
          <source src={Explainer} />
          Unsupported video
        </AnnouncementVideo>
      </AnnouncementContainer>
    </PageSection>
  );
};

export default AnnouncementPage;
