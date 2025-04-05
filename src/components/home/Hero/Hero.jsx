import React from "react";

import ErrorMessage from "../../ErrorMessage";
import HeroContent from "./HeroContent";

import { useGetHeroImage } from "../../../hook/useGetHeroImage";
import HeroSkeleton from "./HeroSkeleton";

export default function Hero() {
  const { data, isLoading, isError, error } = useGetHeroImage();

  const fileRef = React.useRef(null);

  if (isLoading) return <HeroSkeleton />;
  if (isError) return <ErrorMessage errorMessage={error.message} />;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <HeroContent
            data={item}
            fileRef={fileRef}
            handleFormData={(e) => handleFormData(e, item)}
          />
        </div>
      ))}
    </div>
  );
}
