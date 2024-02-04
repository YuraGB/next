import React from "react";
import { SliderSkeleton } from "@/modules/homePageSlider/sliderSkeleton";

import Carousel from "@/components/carousel";
import PhotoItem from "@/modules/homePageSlider/components/PhotoItem/PhotoItem";
import { getPhotos } from "@/modules/homePageSlider/api/getPhotos";

// server component
const HomePageSlider = async () => {
  // server actions
  const photos = await getPhotos();

  const content = photos?.slide?.length ? (
    photos.slide.map((photo) => <PhotoItem key={photo.id} photo={photo} />)
  ) : (
    <SliderSkeleton />
  );

  return (
    <section className={"min-h-[300px] w-full"}>
      <Carousel>{content}</Carousel>
    </section>
  );
};

export default HomePageSlider;
