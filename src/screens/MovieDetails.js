import React, { useEffect, useState } from "react";
import { Header } from "../components";
import { ImageBackground } from "react-native";
import { DATA } from "../constants/data";
import { API_URL, API_KEY, IMAGE_URL, MOVIE_URL } from "@env";
import {
  PullCorner,
  ContentWrapper,
  HeadingLarge,
  LinearGradientTop,
  MetaContainer,
  FlexInline,
  Flex,
  SVGCalendar,
  Small,
  SVGContainer,
  SVGTime,
  Heading,
  Paragraph,
  ButtonIcon,
  SVGBack,
  ScrollViewContainer,
  WebViewContainer,
  SVGPlay,
} from "../../style";

import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";

const content = [...DATA][0];
const overviewtitle = content.overviewTitle;
const back = content.backTitle;
const play = content.playTitle;

const ToTime = (n) => {
  const num = n;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return rhours + "h " + rminutes + "m";
};

const Movie = ({ props, route }) => {
  const { passParameters } = route.params;
  const [details, setDetails] = useState([]);
  const movieID = `${API_URL}movie/${passParameters.id}?api_key=${API_KEY}&append_to_response=videos`;
  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      `${MOVIE_URL}movie?id=${passParameters.id}`
    );
    return result;
  };

  const fetchDetails = async () => {
    try {
      const response = await fetch(movieID);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      const data = await response.json();
      const d = { ...data };
      setDetails(d);
    } catch (error) {
      console.log(error);
    }
  };

  const navigation = useNavigation();

  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <ContentWrapper backgroundColor="#12002e98">
      <LinearGradientTop end={{ x: 0.1, y: 0.8 }} />
      <ImageBackground
        source={{
          uri: `${IMAGE_URL}t/p/w780` + passParameters.poster_path,
        }}
        style={{ flex: 1 }}
      >
        <ContentWrapper
          backgroundColor="rgba(18, 0, 46, 0.8)"
          paddingLeft="20px"
          paddingRight="20px"
          paddingBottom="30px"
        >
          <PullCorner>
            <Header navigation={props} />
          </PullCorner>

          <HeadingLarge fontSize="25px" marginLeft="10px">
            {passParameters.original_title}
          </HeadingLarge>
          <MetaContainer>
            <FlexInline width="auto">
              <SVGContainer width={19} height={19} viewBox="0 0 19 19">
                <SVGTime />
              </SVGContainer>
              <Small marginLeft={10}>
                {(details.runtime && ToTime(details.runtime)) || ".. ..."}
              </Small>
            </FlexInline>
            <FlexInline marginLeft={10}>
              <SVGContainer width={19} height={19} viewBox="0 0 19 19">
                <SVGCalendar />
              </SVGContainer>
              <Small marginLeft={10}>
                {(passParameters.release_date && passParameters.release_date) ||
                  "....-..-.."}
              </Small>
            </FlexInline>
          </MetaContainer>
          <WebViewContainer
            source={{
              uri: `${MOVIE_URL}movie?id=${passParameters.id}`,
            }}
            style={{ marginLeft: 10 }}
          />
          <Flex marginTop={10} marginLeft={10}>
            <Heading paddingLeft="0">{overviewtitle}</Heading>
          </Flex>
          <ScrollViewContainer
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <Flex marginLeft={10} marginBottom={10}>
              <Paragraph textAlign="left">
                {(passParameters.overview && passParameters.overview) || "..."}
              </Paragraph>
            </Flex>
          </ScrollViewContainer>

          <FlexInline marginTop={0} marginLeft={10} marginBottom={0}>
            <ButtonIcon
              onPress={() => navigation.goBack()}
              marginTop="0"
              alignItems="flex-start"
              justifyContent="flex-start"
              marginLeft="0"
              flex={1}
            >
              <SVGContainer width={27} height={27} viewBox="0 0 27 27">
                <SVGBack />
              </SVGContainer>
              <Paragraph width="auto">{back}</Paragraph>
            </ButtonIcon>

            <ButtonIcon
              onPress={_handlePressButtonAsync}
              marginTop="0"
              justifyContent="flex-end"
              alignItems="flex-start"
              marginRight={10}
              flex={1}
            >
              <Paragraph width="auto" marginRight={10} color="#4CAF50">
                {play}
              </Paragraph>
              <SVGContainer width={27} height={27} viewBox="0 0 27 27">
                <SVGPlay />
              </SVGContainer>
            </ButtonIcon>
          </FlexInline>
        </ContentWrapper>
      </ImageBackground>
    </ContentWrapper>
  );
};

export default Movie;
