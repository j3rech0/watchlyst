import React, { useEffect, useState } from "react";
import { Header, Link } from "../components";
import {
  LinearGradientTop,
  HeadingLarge,
  Paragraph,
  ButtonIcon,
  ContentWrapper,
  Flex,
  SVGContainer,
  SVGBack,
  AboutList,
  AboutContainer,
} from "../../style";
import { GETUPDATES_URL } from "@env";
import { DATA } from "../constants/data";
import { useNavigation } from "@react-navigation/native";

const content = [...DATA][0];
const author = content.author;
const about = content.aboutTitle;
const authortitle = content.authorTitle;
const back = content.backTitle;
const updates = content.updateTitle;

const About = () => {
  const [updatestitle, updatesTitle] = useState("");
  const [updatesurl, updatesURL] = useState("");
  const [validateurl, validateURL] = useState(true);
  const navigation = useNavigation();

  const getUpdates = async () => {
    try {
      const apiResponse = await fetch(GETUPDATES_URL);
      if (!apiResponse.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${apiResponse.status}`
        );
      }
      const data = await apiResponse.json();
      const result = { ...data };
      const validurl = /^(ftp|http|https):\/\/[^ "]+$/.test(updatesurl);
      validateURL(validurl);
      updatesTitle(result.description);
      updatesURL(result.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUpdates();
  });

  return (
    <ContentWrapper position="relative">
      <LinearGradientTop end={{ x: 0.8, y: 0.5 }} />
      <Header />

      <AboutContainer>
        <HeadingLarge fontSize="25px">{about}</HeadingLarge>
        <Paragraph>{content.about}</Paragraph>

        <HeadingLarge fontSize="18px">{authortitle}</HeadingLarge>

        <Flex>
          {author.map((item, i) => (
            <AboutList key={i}>
              <Link url={item.link} children={item.link} icon={item.icon} />
            </AboutList>
          ))}
        </Flex>

        <HeadingLarge fontSize="18px" marginTop="30px">
          {updates}
        </HeadingLarge>

        <Flex flex={1}>
          {validateurl ? (
            <Link
              url={updatesurl}
              children={updatestitle || "No updates available"}
            />
          ) : (
            <Paragraph>{updatestitle}</Paragraph>
          )}
        </Flex>

        <ButtonIcon
          onPress={() => navigation.goBack()}
          marginTop={120}
          alignSelf="flex-end"
        >
          <SVGContainer width={27} height={27} viewBox="0 0 27 27">
            <SVGBack />
          </SVGContainer>
          <Paragraph width="auto">{back}</Paragraph>
        </ButtonIcon>
      </AboutContainer>
    </ContentWrapper>
  );
};

export default About;
