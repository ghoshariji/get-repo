import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
  Modal,
} from "react-native";

const Lecturevideo = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([
    { id: "1", title: "Course 1", Image: require("../assets/welcome.jpg") },
    { id: "2", title: "Course 2" },
    { id: "3", title: "Course 3" },
    // Add more courses as needed
  ]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().trim().includes(text.toLowerCase().trim())
    );
    setFilteredCourses(filtered);
  };

  const handleEditCourse = (course) => {
    setSelectedCourse(course);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.courseItem}
      onPress={() => navigation.navigate("Add Video")}
    >
      <Text style={styles.courseTitle}>{item.title}</Text>
      <TouchableOpacity onPress={() => handleEditCourse(item)}>
        <Text style={styles.editButton}>Edit</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Courses</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search Course"
          value={searchQuery}
          onChangeText={(text) => handleSearch(text)}
        />
        <Button title="Search" onPress={() => handleSearch(searchQuery)} />
      </View>
      <FlatList
        data={searchQuery ? filteredCourses : courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Course</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Course Title"
              value={selectedCourse?.title}
              onChangeText={(text) =>
                setSelectedCourse({ ...selectedCourse, title: text })
              }
            />
            <View style={styles.modalButtons}>
              <Button title="Save" onPress={() => setModalVisible(false)} />
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#ffffff", // Background color for the container
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  courseItem: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  courseTitle: {
    fontSize: 16,
    flex: 1,
  },
  editButton: {
    color: "blue",
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default Lecturevideo;
