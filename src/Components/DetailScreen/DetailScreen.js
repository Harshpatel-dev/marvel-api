import React, { useEffect } from "react";
import { useState } from "react";
import {
  FirstContainer,
  MainContainer,
  ImageContainer,
  DescContainer,
  Image,
  Shadow,
  GlobalStyles,
} from "./Detail.style";
import axios from "axios";
import ReactLoading from "react-loading";
import Cryptojs from "crypto-js/md5";
import { useParams } from "react-router-dom";
import {
  CharactersListContainer,
  SecondContainer,
  Title,
} from "./Second.style";
import HorizontalScrollbar from "./HorizontalScrollbar";

export default function DetailScreen() {
  const [imageSrc, setImageSrc] = useState("");
  const [eventResult, setEventResult] = useState();

  const { name, id } = useParams();

  useEffect(() => {
    callAPI();
  }, []);

  async function callAPI() {
    const EVENT_API_STRING = "https://gateway.marvel.com/v1/public/events/";
    const PUBLIC_KEY = "a662208f4284b90b1724b42d6a895012";
    const PRIVATE_KEY = "a2dbbfa8dc413fcc3f4d1d27c20e86e5fa6a8307";
    let TS = Math.floor(Math.random() * 10);
    let GeneratedString = TS + PRIVATE_KEY + PUBLIC_KEY;
    let MD_GENERATED_STRING = Cryptojs(GeneratedString).toString();

    const API_STRING_EVENT =
      EVENT_API_STRING +
      id +
      "?ts=" +
      TS +
      "&apikey=" +
      PUBLIC_KEY +
      "&hash=" +
      MD_GENERATED_STRING;

    const eventResponse = await axios.get(API_STRING_EVENT);

    const imageString =
      eventResponse.data.data.results[0].thumbnail.path +
      "." +
      eventResponse.data.data.results[0].thumbnail.extension;
    setEventResult(eventResponse.data.data.results[0]);
    setImageSrc(imageString);
  }
  return (
    <MainContainer>
      <GlobalStyles />
      <FirstContainer>
        <DescContainer>
          <p>{eventResult?.title}</p>
          <p>{eventResult?.description}</p>
        </DescContainer>
        <ImageContainer>
          <Image src={imageSrc} alt="#poster" />
          <Shadow />
        </ImageContainer>
      </FirstContainer>
      <SecondContainer>
        <Title>
          <span>Characters</span>
        </Title>
        <HorizontalScrollbar id={id} />
      </SecondContainer>
    </MainContainer>
  );
}
