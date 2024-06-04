import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Ionicons for icons

const Menu = ({ navigation }) => {
  const goToExaminationProgress = () => {
    // Navigate to the examination progress page
    // You can implement the navigation logic here
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Academic Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Academic</Text>
          <View style={styles.academicHeader}>
            <Ionicons
              name="book-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text
              style={styles.sectionTitle}
              onPress={() => navigation.navigate("Result")}
            >
              Examination progress
            </Text>
            <View style={styles.arrowContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("Result")}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.academicHeader}>
            <Ionicons
              name="book-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.sectionTitle} onPress={()=>navigation.navigate("Time-Table")}>Time Table</Text>
            <View style={styles.arrowContainer}>
              <TouchableOpacity onPress={()=>navigation.navigate("Time-Table")}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
          </View>
          <View style={styles.line} />
          <View style={styles.academicHeader}>
            <Ionicons
              name="book-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.sectionTitle}>Attendence</Text>
            <View style={styles.arrowContainer}>
              <TouchableOpacity onPress={goToExaminationProgress}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
          </View>
          {/* Content related to academic */}
          {/* For example, attendance, results, etc. */}
        </View>

        {/* Line */}

        {/* Communication Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Communication</Text>
          {/* Content related to communication */}
          {/* For example, banners, resources, etc. */}
          <View style={styles.academicHeader}>
            <Ionicons
              name="book-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.sectionTitle}>Resource</Text>
            <View style={styles.arrowContainer}>
              <TouchableOpacity onPress={goToExaminationProgress}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.academicHeader}>
            <Ionicons
              name="book-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.sectionTitle} onPress={()=>navigation.navigate("Notice")}>Notice</Text>
            <View style={styles.arrowContainer}>
              <TouchableOpacity onPress={()=>navigation.navigate("Notice")}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Help Desk</Text>
          {/* Content related to communication */}
          {/* For example, banners, resources, etc. */}
          <View style={styles.academicHeader} >
            <Ionicons
              name="book-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.sectionTitle} onPress={()=>navigation.navigate("Contact")}>Contact Us</Text>
            <View style={styles.arrowContainer}>
              <TouchableOpacity  onPress={()=>navigation.navigate("Contact")}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          <TouchableOpacity style={styles.academicHeader} onPress={()=>navigation.navigate("Chat Us")}>
            <Ionicons
              name="book-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.sectionTitle}>Chat with Us</Text>
            <View style={styles.arrowContainer}>
              <TouchableOpacity onPress={()=>navigation.navigate("Chat Us")}>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#e0e0e0", // Grey background color
    paddingTop: 80, // Adjusted top padding to provide space for the header
    paddingHorizontal: 20, // Add horizontal padding to the container
  },
  section: {
    backgroundColor: "#fff", // White background color
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
  },
  academicHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Adjusted to space between
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  arrowContainer: {
    marginLeft: "auto", // Moves the arrow to the right side
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    marginBottom: 20,
  },
});

export default Menu;
