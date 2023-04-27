import React from "react";
import {
  SearchBox,
  SearchBoxContainer,
  SVGSearch,
  SVGClose,
} from "../../style";
import Svg from "react-native-svg";
import { Keyboard, Pressable } from "react-native";

const SearchCard = (props) => {
  return (
    <SearchBoxContainer>
      {props.clicked ? (
        <Pressable
          onPress={() => {
            Keyboard.dismiss();
            props.setSearchPhrase("");
            props.setClicked(false);
          }}
        >
          <Svg
            width="34"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <SVGClose />
          </Svg>
        </Pressable>
      ) : (
        <Svg
          width="31"
          height="21"
          viewBox="0 0 21 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <SVGSearch />
        </Svg>
      )}

      <SearchBox
        value={props.searchPhrase}
        onChangeText={(text) => props.setSearchPhrase(text)}
        placeholder="Search"
        placeholderTextColor="#ffffff60"
        onFocus={() => {
          props.setClicked(true);
        }}
      />
    </SearchBoxContainer>
  );
};

export default SearchCard;
