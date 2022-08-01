import React, { useEffect, useState } from "react";
import axios from "axios";
import Cryptojs from "crypto-js/md5";
import {
  Caption,
  CharacterCard,
  CharactersListContainer,
  Image,
} from "./Second.style";

export default function HorizontalScrollbar({ id }) {
  const [characterResult, setCharacterResult] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);

  async function callAPI() {
    const CHARACTERS_API_STRING = `https://gateway.marvel.com/v1/public/events/${id}/characters`;
    const PUBLIC_KEY = "a662208f4284b90b1724b42d6a895012";
    const PRIVATE_KEY = "a2dbbfa8dc413fcc3f4d1d27c20e86e5fa6a8307";
    let TS = Math.floor(Math.random() * 10);
    let GeneratedString = TS + PRIVATE_KEY + PUBLIC_KEY;
    let MD_GENERATED_STRING = Cryptojs(GeneratedString).toString();

    const API_STRING_CHARACTERS =
      CHARACTERS_API_STRING +
      "?ts=" +
      TS +
      "&apikey=" +
      PUBLIC_KEY +
      "&hash=" +
      MD_GENERATED_STRING;

    const response = await axios.get(API_STRING_CHARACTERS);
    setCharacterResult(response.data.data.results); // chracterResult contains array of all the characters.

    console.log(response.data.data.results);
  }

  return (
    <CharactersListContainer>
      {characterResult.map((item, index) => {
        const availableImage = item.thumbnail.path.indexOf(
          "image_not_available"
        );

        if (availableImage == -1) {
          const imageType = "." + item.thumbnail.extension;
          const imageSrc = item.thumbnail.path + imageType;
          return (
            <CharacterCard>
              <Image src={imageSrc} />
              <Caption>
                <span>{item.name}</span>
              </Caption>
            </CharacterCard>
          );
        }
      })}
    </CharactersListContainer>
  );
}
