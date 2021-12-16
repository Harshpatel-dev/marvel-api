import React, { useEffect, useState } from "react";
import { CardGrid, Loading } from "./AllComics.style";
import CardLayout from "../../CardLayout/CardLayout";
import axios from "axios";
import ReactLoading from "react-loading";
import Cryptojs from "crypto-js/md5";
import { Link } from "react-router-dom";

export default function AllComics(props) {
  const [comicsArray, setComicsArray] = useState([]);
  const [isReached, setIsReached] = useState(false);
  const [offsetCount, setOffsetCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    callApi();
    console.log(comicsArray);
  }, []);

  useEffect(() => {
    if (isReached) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
      callApi();
      console.log(comicsArray);
      setIsReached(false);
    }
  }, [isReached]);

  async function callApi() {
    try {
      const OFFSET = 20 * offsetCount;
      const PUBLIC_KEY = "a662208f4284b90b1724b42d6a895012";
      const PRIVATE_KEY = "a2dbbfa8dc413fcc3f4d1d27c20e86e5fa6a8307";
      const TS = Math.floor(Math.random() * 10);
      const GeneratedString = TS + PRIVATE_KEY + PUBLIC_KEY;
      const MD_GENERATED_STRING = Cryptojs(GeneratedString).toString();

      const API_STRING =
        "https://gateway.marvel.com/v1/public/comics" +
        "?ts=" +
        TS +
        "&apikey=" +
        PUBLIC_KEY +
        "&hash=" +
        MD_GENERATED_STRING +
        "&offset=" +
        OFFSET;

      const response = await axios.get(API_STRING);

      setComicsArray((prevArray) => {
        return [...new Set([...prevArray, ...response.data.data.results])];
      });
    } catch (e) {
      console.log("error : ", e);
    }
  }

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    console.log("AllComics scrollTop : ", Math.ceil(scrollTop));
    console.log("AllComics clientHeight : ", Math.ceil(clientHeight));
    console.log("AllComics scrollHeight : ", Math.ceil(scrollHeight));

    if (
      Math.ceil(scrollTop) + Math.ceil(clientHeight) >=
      Math.ceil(scrollHeight)
    ) {
      setIsLoading(true);
      setOffsetCount((prev) => prev + 1);
      setIsReached(true);
      console.log("at the bottom");
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading>
          <ReactLoading
            type={"bubbles"}
            color={"white"}
            height={200}
            width={112}
          />
        </Loading>
      ) : (
        ""
      )}

      <CardGrid onScroll={handleScroll} changeOpacity={isLoading}>
        {comicsArray.length === 0 ? (
          <Loading>
            <ReactLoading
              type={"bubbles"}
              color={"white"}
              height={200}
              width={112}
            />
          </Loading>
        ) : (
          comicsArray.map((item, index) => {
            const isImage = item.thumbnail.path.indexOf("image_not_available");
            if (item.title !== "" && isImage == -1) {
              const imageSize = "/portrait_uncanny.";
              const imageType = item.thumbnail.extension;
              const imageSrc = item.thumbnail.path + imageSize + imageType;
              return (
                <CardLayout
                  title={item.title}
                  description={item.description}
                  imageSrc={imageSrc}
                />
              );
            }
          })
        )}
      </CardGrid>
    </>
  );
}
