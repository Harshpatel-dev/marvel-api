import React from "react";
import {
  Card,
  Image,
  Caption,
  Content,
  Card_Front__Part,
  Card_Back__Part,
  MoreDetails,
  SubCon,
} from "./CardLayout.style";
import { Link } from "react-router-dom";

export default function CardLayout({ title, description, imageSrc }) {
  return (
    <Card>
      <SubCon
        isDesciptionAvail={
          description !== null &&
          description.length > 1 &&
          description.indexOf("#N/A") === -1
            ? true
            : false
        }
      >
        <Card_Front__Part>
          <Image src={imageSrc} alt="Image" />
          <Caption>
            <Content>
              <span>{title}</span>
              {/* <small>{description}</small> */}
            </Content>
          </Caption>
        </Card_Front__Part>

        <Card_Back__Part isAvail={description ? true : false}>
          {description ? <p>Description</p> : <p>No Description</p>}
          <p>{description}</p>
        </Card_Back__Part>
      </SubCon>

      <Link to={`./detail/${title}`}>
        <MoreDetails>
          <span> More Detials </span>
        </MoreDetails>
      </Link>
    </Card>
  );
}
