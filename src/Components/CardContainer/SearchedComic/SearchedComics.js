import React, { useEffect, useState } from "react";
import CardLayout from "../../CardLayout/CardLayout";
import { CardGrid } from "../AllComics/AllComics.style";
import { Container, Loading } from "./SearchedComics.style";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cryptojs from "crypto-js/md5";
import ReactLoading from "react-loading";

export default function SearchedComics() {
  const { id } = useParams();

  const [charactesArray, setcharactesArray] = useState([]); // to store the result
  const [calledApi, setCalledApi] = useState(false); // is used to denote that api has been called or not.
  const [limit, setLimit] = useState(0); //is used to track the number of times api has been called continously called.
  const [gotResult, setGotResult] = useState(false); //got the result or not

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    if (!calledApi) callApi();
  }, [calledApi]);

  async function callApi() {
    try {
      const MAX_LIMIT = 10;
      const OFFSET = 0;
      const PUBLIC_KEY = "a662208f4284b90b1724b42d6a895012";
      const PRIVATE_KEY = "a2dbbfa8dc413fcc3f4d1d27c20e86e5fa6a8307";

      const TS = Math.floor(Math.random() * 10);
      console.log("TS : ", TS);

      const GeneratedString = TS + PRIVATE_KEY + PUBLIC_KEY;

      const MD_GENERATED_STRING = Cryptojs(GeneratedString).toString();
      console.log("MD_STRING : ", MD_GENERATED_STRING.toString());

      const API_STRING =
        "http://gateway.marvel.com/v1/public/characters" +
        "?ts=" +
        TS +
        "&apikey=" +
        PUBLIC_KEY +
        "&hash=" +
        MD_GENERATED_STRING +
        "&offset=" +
        OFFSET;

      const API_PATH = "&nameStartsWith=" + id;
      const MAIN_API_STRING = API_STRING + API_PATH;

      const response = await axios.get(MAIN_API_STRING);

      console.log(response.data?.data);

      if (response.data?.data !== undefined) {
        setcharactesArray([...response.data.data.results]);
        setCalledApi(true);
        setGotResult(true);
      } else {
        console.log("in else Condition");
        setLimit((limit) => limit + 1);

        setGotResult(true);

        if (limit < MAX_LIMIT) setCalledApi(false);
        else setCalledApi(true);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <CardGrid>
      {!gotResult ? (
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
      {gotResult && (limit === 20 || charactesArray.length == 0) ? (
        <div>Oops... Searched Content Is Not Available.</div>
      ) : (
        charactesArray.map((item, index) => {
          const isImage = item.thumbnail.path.indexOf("image_not_available");
          if (isImage == -1) {
            const imageSize = "/portrait_uncanny.";
            const imageType = item.thumbnail.extension;
            const imageSrc = item.thumbnail.path + imageSize + imageType;
            return (
              <CardLayout
                title={item.name}
                description={item.description}
                imageSrc={imageSrc}
                id={item.id}
              />
            );
          }
        })
      )}
    </CardGrid>
  );
}
