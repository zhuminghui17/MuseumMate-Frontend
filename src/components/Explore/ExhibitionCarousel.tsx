import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { Box, Typography } from "@mui/material";

type Exhibition = {
  exhibitionId: string;
  name: string;
  description: string;
  featuredImage: string;
};

type PropType = {
  exhibitions: Exhibition[];
  options?: EmblaOptionsType;
};

const ExhibitionCarousel: React.FC<PropType> = ({ exhibitions, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000 }), // Autoplay every 5 seconds
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    emblaApi
      .on("autoplay:play", () => setIsPlaying(true))
      .on("autoplay:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
  }, [emblaApi]);

  return (
    <Box sx={{ position: "relative" }}>
      <Box className="embla" sx={{ overflow: "hidden" }} ref={emblaRef}>
        <Box
          className="embla__container"
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          {exhibitions.map((exhibition) => (
            <Box
              key={exhibition.exhibitionId}
              className="embla__slide"
              sx={{
                flex: "0 0 70%",
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: 3,
                textAlign: "center",
              }}
            >
              <img
                src={exhibition.featuredImage}
                alt={exhibition.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ padding: 2 }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginBottom: 1 }}
                >
                  {exhibition.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  {exhibition.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Carousel Controls */}
      <Box className="embla__controls" sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}>
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
        <button
          onClick={toggleAutoplay}
          type="button"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          {isPlaying ? "Stop" : "Play"}
        </button>
      </Box>
    </Box>
  );
};

export default ExhibitionCarousel;
