import React, { useState, useEffect } from "react";
import { Header, ScrollCard, SearchCard, SearchResult } from "../components";
import { useNetInfo } from "@react-native-community/netinfo";
import { API_URL, API_KEY } from "@env";
import { RefreshControl } from "react-native";
import {
  ScrollViewContainer,
  ContentWrapper,
  FeatureContainer,
  Heading,
  LinearGradientTop,
  PreLoad,
  ParagraphWarning,
  Paragraph,
} from "../../style";

const Cards = (props) => {
  return (
    <FeatureContainer>
      <Heading>{props?.title}</Heading>
      <ScrollCard api_url={props?.api_url} />
    </FeatureContainer>
  );
};

const Home = (props) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [noresult, setNoResult] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [movieData, setmovieData] = useState();
  const [refreshing, setRefreshing] = useState(true);
  const netInfo = useNetInfo();
  /* <PreLoad size="large" color="#00E6BE50" /> */

  const getSearchData = async () => {
    try {
      const apiResponse = await fetch(
        `${API_URL}search/movie?api_key=${API_KEY}&query=${searchPhrase}`
      );
      if (!apiResponse.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${apiResponse.status}`
        );
      }
      const data = await apiResponse.json();
      const result = [...data.results.values()];
      const zeroresult = Object.keys(result).length;

      setRefreshing(false);

      if ((zeroresult === 0) & clicked) {
        setNoResult(true);
      }

      if (zeroresult > 0) {
        setNoResult(false);
        setmovieData(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchData();
  }, [searchPhrase]);

  return (
    <ContentWrapper>
      <LinearGradientTop end={{ x: 0.1, y: 0.7 }} />

      <Header navigation={props} />

      <SearchCard
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />

      {!netInfo.isConnected && (
        <ParagraphWarning marginLeft={30} fontSize={18}>
          Please check your internet connection as we're having trouble
          connecting to our server.
        </ParagraphWarning>
      )}

      {!searchPhrase && netInfo.isConnected ? (
        <ScrollViewContainer
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={Cards}
              progressBackgroundColor="#00E6BE"
            />
          }
        >
          <Cards
            title="Trending"
            api_url={`${API_URL}trending/all/day?api_key=${API_KEY}&media_type=movie&time_window=day`}
          />

          <Cards
            title="Popular"
            api_url={`${API_URL}movie/popular?api_key=${API_KEY}&media_type=movie&time_window=day`}
          />

          <Cards
            title="Top rated"
            api_url={`${API_URL}movie/top_rated?api_key=${API_KEY}&media_type=movie&time_window=day`}
          />
        </ScrollViewContainer>
      ) : (
        <>
          {noresult ? (
            <Paragraph marginLeft={30}>No result</Paragraph>
          ) : (
            <SearchResult data={movieData} />
          )}
        </>
      )}
    </ContentWrapper>
  );
};

export default Home;
