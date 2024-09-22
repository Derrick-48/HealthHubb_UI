import { Tabs, useNavigation, router, usePathname,  } from "expo-router";
import {
  AntDesign,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import { View, Text, StyleSheet, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

const TabsLayout = () => {
  const statusBarStyle = "dark"; // Light status bar
  const BorderColor = "#e0e0e0"; // Softer border color
  const containerBackgroundColor = "#f9f9f9"; // Light background color for the container
  const TabIconColor = "#007bff"; // Blue for active icons
  const TabIconInActiveColor = "#c4c4c4"; // Gray for inactive icons
  const TabFocusedBackground = "rgba(0, 123, 255, 0.1)"; // Pale transparent blue background

  return (
    <View style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "white", // White background for the whole tab bar
            position: "absolute",
            justifyContent: "center",
            alignSelf: "center",
            height: Platform.OS === 'android' ? 80 : 90, // Slightly shorter tab bar
            flex: 1,
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: BorderColor,
            borderTopColor: BorderColor,
            width: "100%",
          },
          tabBarInactiveTintColor: TabIconInActiveColor,
          tabBarActiveTintColor: TabIconColor,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "", // Empty string to hide default label
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={[
                  styles.tabItemWrapper,
                  {
                    backgroundColor: focused
                      ? TabFocusedBackground
                      : "transparent",
                  },
                ]}
              >
                <AntDesign
                  name= 'home'
                  color={focused ? TabIconColor : color}
                  size={size}
                />
                {focused && (
                  <Text style={styles.tabLabel}>Home</Text>
                )}
              </View>
            ),
            headerShown: null,
          }}
        />
        <Tabs.Screen
          name="schedule"
          options={{
            tabBarLabel: "",
            backgroundColor: '#fff',
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={[
                  styles.tabItemWrapper,
                  {
                    backgroundColor: focused
                      ? TabFocusedBackground
                      : "transparent",
                  },
                ]}
              >
                <Ionicons
                  name={focused ? "calendar" : "calendar-outline"}
                  size={24}
                  color={focused ? TabIconColor : color}
                />
                {focused && (
                  <Text style={styles.tabLabel}>Schedule</Text>
                )}
              </View>
            ),
            headerShown: null,
          }}
        />
        <Tabs.Screen
          name="message"
          options={{
            tabBarLabel: "",
            headerTitle: 'Messages',
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={[
                  styles.tabItemWrapper,
                  {
                    backgroundColor: focused
                      ? TabFocusedBackground
                      : "transparent",
                  },
                ]}
              >
                <Ionicons
                  name={focused ? "chatbubble" : "chatbubble-outline"}
                  size={25}
                  color={focused ? TabIconColor : color}
                />
                {focused && (
                  <Text style={styles.tabLabel}>Message</Text>
                )}
              </View>
            ),
            headerShown: true,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: "",
            headerTitle: "Profile",
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={[
                  styles.tabItemWrapper,
                  {
                    backgroundColor: focused
                      ? TabFocusedBackground
                      : "transparent",
                  },
                ]}
              >
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  color={focused ? TabIconColor : color}
                  size={size}
                />
                {focused && (
                  <Text style={styles.tabLabel}>Profile</Text>
                )}
              </View>
            ),
          }}
        />
      </Tabs>
      <StatusBar style={statusBarStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  tabItemWrapper: {
    flexDirection: "row", // Align icon and label in a row
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Platform.OS === 'android' ? 15 : 10,
    marginHorizontal: Platform.OS === 'ios' ? 2: 0,
    marginLeft: 5, // Padding around the icon and text
    paddingVertical: Platform.OS === 'android' ? 8 : 5, // Adjust the vertical padding
    borderRadius: 15, // Border radius to create rounded rectangle look
    marginTop: Platform.OS === 'ios' ? 10 : 0,
  },
  tabLabel: {
    marginLeft: 8,
    color: "#007bff", // Blue text for the label
    fontSize: 14,
    fontWeight: "600",
  },
});

export default TabsLayout;
