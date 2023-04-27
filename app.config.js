export default () => {
  return {
    name: "Watchlyst",
    slug: "watchlyst",
    owner: "j3ch",
    description: "Using TMDB API, WATCHLYST is a React Native app with a Home screen featuring Trending, Popular, and Top rated categories, search, Movie details, and About sections.",
    version: "1.0.1",
    orientation: "portrait",
    icon: "./src/assets/icon.png",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./src/assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#12002E",
    },
    assetBundlePatterns: ["**/*"],
    android: {
      adaptiveIcon: {
        foregroundImage: "./src/assets/adaptive-icon.png",
        backgroundColor: "#12002E",
      },
      package: "com.j3ch.watchlyst",
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    },
    web: {
      favicon: "./src/assets/favicon.png",
    },
    plugins: [
      [
        "expo-notifications",
        {
          icon: "./src/assets/notification.png",
          color: "#ffffff",
        },
      ],
    ],
    extra: {
      eas: {
        projectId: "a5425e41-b62e-4f37-926a-c0352132f858",
      },
    },
    runtimeVersion: {
      policy: "sdkVersion",
    },
    updates: {
      url: "https://u.expo.dev/a5425e41-b62e-4f37-926a-c0352132f858",
    },
    ios: {},
  };
};
