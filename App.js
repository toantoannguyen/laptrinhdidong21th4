import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import các màn hình
import HomeScreen from "./HomeScreen";
import ProductDetailScreen from "./ProductDetailScreen";
import ExploreScreen from "./ExploreScreen";
import BeveragesScreen from "./BeveragesScreen";
import CartScreen from "./CartScreen";
import CheckoutScreen from "./CheckoutScreen";
import OrderConfirmationScreen from "./OrderConfirmationScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator cho thanh điều hướng dưới
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Shop") iconName = "store";
        else if (route.name === "Explore") iconName = "search";
        else if (route.name === "Cart") iconName = "cart";
        else if (route.name === "Favourite") iconName = "heart";
        else if (route.name === "Account") iconName = "person";
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "#4CAF50",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Shop" component={HomeScreen} />
    <Tab.Screen name="Explore" component={ExploreScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
    <Tab.Screen name="Favourite" component={() => <></>} />
    <Tab.Screen name="Account" component={() => <></>} />
  </Tab.Navigator>
);

// Stack Navigator cho điều hướng giữa các màn hình
const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Beverages"
        component={BeveragesScreen}
        options={{ title: "Beverages" }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ title: "Checkout" }}
      />
      <Stack.Screen
        name="OrderConfirmation"
        component={OrderConfirmationScreen}
        options={{ title: "Order Confirmed" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
