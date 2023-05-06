export default ({ config }) => {
  return {
    ...config,
    android: {
      adaptiveIcon: {
        foregroundImage: "./src/assets/adaptive-icon.png",
        backgroundColor: "#12002E",
      },
      package: "com.j3ch.watchlyst",
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    },
  };
};
