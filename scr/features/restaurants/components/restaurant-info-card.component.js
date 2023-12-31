import React from "react";
import { Text ,View} from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native"

const Title = styled.Text`
  padding: 16px;
  color: red;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {

  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card>
      <Card.Cover  source={{ uri: photos[0] }} />
      <Title> {name} </Title>
    </Card>
  );
};

