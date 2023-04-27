import React from "react";
import { FlatList } from "react-native";
import {
  Paragraph,
  Petsa,
  SearchCardList,
  SearchCardListDetails,
  SearchThumbnail,
} from "../../style";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import dateFormat from "../utils/Date";
import { IMAGE_URL } from "@env";

const Item = ({ id, original_title, poster_path, release_date, overview }) => {
  const items = { id, original_title, poster_path, release_date, overview };
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Movie", {
          passParameters: items,
        })
      }
    >
      <SearchCardList marginLeft={30} marginRight={30} marginBottom={30}>
        <SearchThumbnail
          source={{
            uri: `${IMAGE_URL}t/p/w154` + poster_path,
          }}
        />
        <SearchCardListDetails>
          <Paragraph
            color="#ffffff"
            width="70%"
            textAlign="left"
            lineHeight="20px"
            fontSize="18px"
          >
            {original_title}
          </Paragraph>
          <Petsa color="#ffffff80">{dateFormat(release_date)}</Petsa>
        </SearchCardListDetails>
      </SearchCardList>
    </Pressable>
  );
};

const SearchResult = (props) => {
  const renderItem = ({ item }) => {
    if (item.poster_path) {
      return (
        <Item
          id={item.id}
          original_title={item.original_title}
          poster_path={item.poster_path}
          release_date={item.release_date}
          overview={item.overview}
        />
      );
    }
    if (item.original_title) {
      return (
        <Item
          original_title={item.original_title}
          poster_path={item.poster_path}
          release_date={item.release_date}
          overview={item.overview}
        />
      );
    }
    if (item.release_date) {
      return (
        <Item
          original_title={item.original_title}
          poster_path={item.poster_path}
          release_date={item.release_date}
          overview={item.overview}
        />
      );
    }
  };

  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default SearchResult;
