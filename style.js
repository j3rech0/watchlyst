"use strict";
import { ImageBackground, ActivityIndicator, Platform } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";
import { Svg, Path } from "react-native-svg";
import { svg } from "./src/constants/svg";
import { LinearGradient } from "expo-linear-gradient";
import { WebView } from "react-native-webview";

export const SearchThumbnail = styled.Image(() => ({
  width: 100,
  height: 100,
  borderRadius: 10,
}));

export const BackgroundImage = styled(ImageBackground).attrs((props) => ({
  resizeMode: "cover",
  imageStyle: { borderRadius: 10 },
}))`
  height: 200px;
  justity-content: center;
  margin-left: 30px;
  margin-right: -10px;
`;

export const CardText = styled.View(() => ({
  alignItems: "center",
  backgroundColor: "#12002E90",
  marginTop: "auto",
  flexDirection: "row",
  flexWrap: "wrap",
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: 10,
}));

export const CardContainer = styled.View(() => ({
  width: 160,
  marginTop: "auto",
  bottom: 0,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  overflow: "hidden",
}));

export const PreLoad = styled(ActivityIndicator).attrs((props) => ({
  size: props.size || "large",
  margin: 0,
}))`
  flex: 1;
`;

export const WebViewContainer = styled(WebView).attrs({
  marginLeft: 10,
})``;

export const AboutContainer = styled.View(() => ({
  padding: 30,
  flex: 1,
}));

export const AboutList = styled.View(() => ({
  marginTop: 5,
}));

export const Flex = styled.View((props) => ({
  flexDirection: "column",
  flex: props.flex || "none",
  marginTop: props.marginTop || 0,
  marginBottom: props.marginBottom || 0,
  marginLeft: props.marginLeft || 0,
  flexBasis: props.flexBasis || "auto",
}));

export const FlexInline = styled.View((props) => ({
  flexDirection: "row",
  alignItems: "center",
  marginLeft: props.marginLeft || 0,
  width: props.width || "100%",
}));

export const MetaContainer = styled.View(() => ({
  marginTop: 0,
  marginBottom: 20,
  flexDirection: "row",
  alignItems: "flex-start",
  marginLeft: 10,
}));

export const SearchCardListDetails = styled.View(() => ({
  marginLeft: 20,
  marginRight: 20,
  width: "80%",
}));

export const SearchCardList = styled.View((props) => ({
  marginLeft: props.marginLeft || 30,
  marginRight: props.marginRight || 30,
  marginBottom: props.marginBottom || 10,
  flexDirection: "row",
}));

export const PullCorner = styled.View((props) => ({
  marginLeft: props.marginLeft || -20,
  marginRight: props.marginRight || -20,
}));

export const ScrollViewContainer = styled.ScrollView((props) => ({
  marginBottom: 0,
  flex: props.flex || 1,
}));

export const ContentWrapper = styled.View((props) => ({
  backgroundColor: props.backgroundColor || "#12002e",
  flex: 1,
  position: props.position || "static",
  paddingLeft: props.paddingLeft || 0,
  paddingRight: props.paddingRight || 0,
  paddingBottom: props.paddingBottom || 0,
}));

export const ButtonIcon = styled.Pressable((props) => ({
  color: "#ff0000",
  marginTop: props.marginTop || 50,
  flex: props.flex || 0,
  flexGrow: props.flexGrow || 1,
  alignItems: props.alignItems || "flex-end",
  alignSelf: props.alignSelf || "auto",
  justifyContent: props.justifyContent || "flex-end",
  marginLeft: props.marginLeft || 30,
  marginRight: props.marginRight || 0,
  flexDirection: "row",
}));

export const MainContainer = styled.SafeAreaView(() => ({
  flex: 1,
  backgroundColor: "#12002E",
  paddingTop: Constants.statusBarHeight + "px",
  position: "relative",
  zIndex: 1,
}));

export const Head = styled.View(() => ({
  padding: 30,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Petsa = styled.Text((props) => ({
  fontSize: 11,
  color: props.color || "#ffffff",
  lineHeight: "24px",
  fontFamily: "Itim",
  paddingTop: props.paddingTop || 0,
  paddingLeft: props.paddingLeft || 0,
}));

export const Small = styled.Text((props) => ({
  fontSize: props.color || "12px",
  color: props.color || "#ffffff80",
  marginLeft: props.marginLeft || 0,
  lineHeight: "26px",
  fontFamily: "Itim",
}));

export const Paragraph = styled.Text((props) => ({
  fontSize: props.fontSize || 14,
  color: props.color || "#ffffff80",
  lineHeight: props.lineHeight || "26px",
  textAlign: props.textAlign || "justify",
  fontFamily: "Itim",
  width: props.width || "100%",
  marginLeft: props.marginLeft || 0,
  marginRight: props.marginRight || 0,
}));

export const ParagraphWarning = styled(Paragraph).attrs(() => ({}))`
  color: #ff000090;
  width: 80%;
`;

export const HeadingLarge = styled.Text((props) => ({
  fontSize: props.fontSize || "25px",
  fontFamily: "Itim",
  color: "#fff",
  marginBottom: "10px",
  marginLeft: props.marginLeft || "0",
  marginTop: props.marginTop || "20px",
}));

export const Heading = styled.Text((props) => ({
  fontSize: 18,
  fontFamily: "Itim",
  color: "#fff",
  paddingLeft: props.paddingLeft || "30px",
  marginBottom: 10,
  marginTop: props.marginTop || "20px",
}));

export const FeatureContainer = styled.View(() => ({
  height: 255,
  marginBottom: 20,
}));

export const LogoText = styled.Text(() => ({
  fontFamily: "Itim",
  marginRight: "auto",
  color: "#fff",
  fontSize: 22,
  marginLeft: 10,
}));

export const SVGCalendar = styled(Path).attrs(() => ({
  d: svg.calendar,
  fill: "#ffffff80",
}))``;

export const SVGTime = styled(Path).attrs(() => ({
  d: svg.time,
  fill: "#ffffff80",
}))``;

export const SVGGithub = styled(Path).attrs(() => ({
  d: svg.git,
  fill: "#fff",
}))``;

export const SVGPlay = styled(Path).attrs(() => ({
  d: svg.play,
  fill: "lime",
}))``;

export const SVGWeb = styled(Path).attrs(() => ({
  d: svg.web,
  fill: "#fff",
}))``;

export const SVGBack = styled(Path).attrs(() => ({
  d: svg.back,
  fill: "#fff",
}))``;

export const SVGLogo = styled(Path).attrs(() => ({
  d: svg.logo,
  fill: "#fff",
}))``;

export const SVGLogoOnly = styled(Path).attrs(() => ({
  d: svg.logoOnly,
  fill: "#fff",
}))``;

export const SVGLogoCenter = styled(Path).attrs(() => ({
  d: svg.logoCenter,
  fill: "#00E6BE",
}))``;

export const SVGMenu = styled(Path).attrs(() => ({
  d: svg.about,
  fill: "#fff",
}))``;

export const SearchBoxContainer = styled.View(() => ({
  backgroundColor: "#ffffff10",
  marginLeft: 30,
  marginRight: 30,
  marginBottom: 20,
  paddingLeft: 20,
  height: 54,
  borderRadius: 54,
  flexDirection: "row-reverse",
  alignItems: "center",
}));

export const SearchBox = styled.TextInput(() => ({
  paddingLeft: Platform.OS === "web" ? 10 : 20,
  paddingBlock: 10,
  height: 54,
  fontFamily: "Itim",
  fontSize: 18,
  color: "#ffffff80",
  flex: 1,
}));

export const SVGClose = styled(Path).attrs(() => ({
  d: svg.close,
  fill: "#ffffff30",
}))`
  ${Platform.OS === "web" ? "transform: translate(-8px, 0)" : null}
`;

export const SVGSearch = styled(Path).attrs(() => ({
  d: svg.search,
  fill: "#ffffff30",
}))`
  ${Platform.OS === "web" ? "transform: translate(-6px, 0)" : null}
`;

export const SVGContainer = styled(Svg).attrs((props) => ({
  width: props.width || 10,
  height: props.height || 10,
  viewBox: props.viewBox || "0 0 10 10",
  xmlns: props.xmlns || "http://www.w3.org/2000/svg",
}))``;

export const LinearGradientTop = styled(LinearGradient).attrs(() => ({
  colors: ["#00E6BE10", "#00E6BE"],
  position: "absolute",
  left: 0,
  right: 0,
  height: 900,
  top: 0,
  zIndex: -1,
  opacity: 0.3,
}))`
  background: #12002e;
`;
