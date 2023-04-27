![](./src/assets/screenshots.png)

# WATCHLYST

Using TMDB API, WATCHLYST is a React Native app with a Home screen featuring Trending, Popular, and Top rated categories, search, Movie details, and About sections.

[Screenshots](https://github.com/j3rech0/watchlyst/tree/main/src/assets/screenshots)

### Features

- Push notification: [Firebase](https://console.firebase.google.com/)
- Analytics: [Segment](https://app.segment.com/)
- Dynamically update link in About screen via API


### Built with

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [styled-components](https://styled-components.com/)

### Installation


Clone this repo and enter project
   ```sh
   git clone https://github.com/j3rech0/watchlyst.git
   cd watchlyst/
   ```

Install NPM packages
   ```sh
   yarn
   ```

Get your API Key at [https://www.themoviedb.org/](https://www.themoviedb.org/)

Rename `.env.example` to `.env`:
   ```
    API_URL = "https://api.themoviedb.org/3/"
    API_KEY = "YOUR_API_KEY"
    MOVIE_URL = "https://www.2embed.to/embed/tmdb/"
    IMAGE_URL = "https://image.tmdb.org/"
    SEGMENT_KEY = "SEGMENT_KEY"
    GETUPDATES_URL = "YOUR_DATA_API_URL"
   ```
Run app
   ```sh
   yarn start
   ```

## Author

- Website - [Jech](https://jerecho.com/)
