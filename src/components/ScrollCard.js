import React, { useEffect, useState } from "react";
import { FlatList, Pressable } from "react-native";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Date as dateFormat } from "../utils";
import {
  CardContainer,
  CardText,
  Paragraph,
  Petsa,
  PreLoad,
  BackgroundImage,
} from "../../style";

const { width } = Dimensions.get("window");
const previewCount = 3;
const itemWidth = width / (previewCount + 1);
const startScroll = (itemWidth * 3) / 1;

const App = (props) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const flatlistRef = React.useRef();

  const snapToOffsetsLikeGooglePlay = data.map((x, i) => {
    return i * itemWidth + startScroll;
  });

  // Fetch movie data
  const fetchData = async () => {
    try {
      const response = await fetch(props.api_url);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      const data = await response.json();
      const result = [...data.results.values()];
      // console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlatList
      ref={flatlistRef}
      pagingEnabled={true}
      horizontal={true}
      decelerationRate={0}
      snapToOffsets={snapToOffsetsLikeGooglePlay}
      snapToAlignment={"center"}
      data={data}
      renderItem={({ item, index }) => (
        <>
          <Pressable
            onPress={() =>
              navigation.navigate("Movie", {
                passParameters: item,
              })
            }
          >
            <BackgroundImage
              source={{
                uri: "https://image.tmdb.org/t/p/w300" + item.backdrop_path,
              }}
              key={index}
            >
              <CardContainer width={itemWidth}>
                <CardText>
                  <Paragraph
                    color="#fafafa"
                    numberOfLines={2}
                    marginLeft={10}
                    width={138}
                    lineHeight="20px"
                    textAlign="left"
                  >
                    {item.original_title || item.original_name}
                  </Paragraph>
                  <Petsa paddingLeft={10} paddingTop={2} color="#ffffff80">
                    {dateFormat(item.release_date)}
                  </Petsa>
                </CardText>
              </CardContainer>
            </BackgroundImage>
          </Pressable>
        </>
      )}
    />
  );
};

export default App;
