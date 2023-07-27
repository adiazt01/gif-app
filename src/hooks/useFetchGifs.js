import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    getGif(category).then((image) => setImages(image));
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return { images, isLoading };
};
