import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, About, Movie } from "../screens";

const Stack = createStackNavigator();

const Menu = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        swipeEnabled: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Movie" component={Movie} />
    </Stack.Navigator>
  );
};

export default Menu;
 