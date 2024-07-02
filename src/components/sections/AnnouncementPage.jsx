import {
  PageSection,
  AnnouncementContainer,
  AnnouncementVideo,
} from "../../utils/util-styled-components";
import Explainer from "../../assets/videos/revel-explainer.mp4";
import { useEffect, useRef } from "react";

const AnnouncementPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        video.play();
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(video);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.unobserve(video);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <PageSection $paddingY="0">
      <AnnouncementContainer>
        <AnnouncementVideo
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        >
          <source src={Explainer} type="video/mp4" />
          Unsupported video
        </AnnouncementVideo>
      </AnnouncementContainer>
    </PageSection>
  );
};

export default AnnouncementPage;
