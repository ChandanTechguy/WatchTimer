import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen1 from "./Views/Screen1";
import Screen2 from "./Views/Screen2";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="S1">
        <Stack.Screen
          name="S1"
          component={Screen1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="S2"
          component={Screen2}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
