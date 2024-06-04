import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homeuser from "./Homeuser";


import { Ionicons } from "@expo/vector-icons";
import Courses from "./Courses";
import Menu from "./Menu";
// import Notice from "./Notice";

const Tab = createBottomTabNavigator();

const Userhome = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: "blue",
        inactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "lightgray",
        },
      }}
    >
      <Tab.Screen
        name="homeuser"
        component={Homeuser}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Course"
        component={Courses}
        options={{
          tabBarLabel: "Course",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alert-circle-outline" color={color} size={size} />
          ),
        }}
      />
     <Tab.Screen
        name="Menu"
        component={Menu}
        // initialParams={{ paramKey: id, name: name }}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size} />
          ),
        }}
      />
      {/*  <Tab.Screen
        name="Result"
        component={Resultuser}
        initialParams={{ paramKey: id }}
        options={{
          tabBarLabel: "Result",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profileuser}
        initialParams={{ name: name ,id: id}}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />  */}
    </Tab.Navigator>
  );
};

export default Userhome;
