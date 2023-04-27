import React from "react";
import { Head, Paragraph } from "../../style";
import { Pressable } from "react-native";
import Svg from "react-native-svg";
import { SVGLogoOnly, SVGLogoCenter, SVGMenu } from "../../style";
import { useNavigation } from "@react-navigation/native";
const Header = () => {
  const navigation = useNavigation();

  return (
    <Head>
      <Svg
        width="130"
        height="39"
        viewBox="0 0 156 39"
        xmlns="http://www.w3.org/2000/svg"
      >
        <SVGLogoOnly />
        <SVGLogoCenter />
      </Svg>
      <Pressable
        onPress={() => navigation.navigate("About")}
        android_ripple={{
          color: "#ffffff60",
          radius: 20,
          foreground: true,
          borderless: true,
        }}
      >
        <Svg
          width="30"
          height="20"
          viewBox="-4 0 30 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <SVGMenu />
        </Svg>
      </Pressable>
    </Head>
  );
};

export default Header;
