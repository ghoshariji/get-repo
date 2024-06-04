import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Ionicons for icons


const Adminhome = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [addImageModalVisible, setAddImageModalVisible] = useState(false);
  const [image, setImage] = useState("");
  const [timetablemodal, settimetableModal] = useState(false);
  const [noticeModal, setNoticeModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // const [formData, setFormData] = useState({
  //   name: "",
  //   price: "",
  //   title: "",
  //   teacher1: "",
  //   teacher2: "",
  //   teacher1Exp: "",
  //   teacher2Exp: "",
  //   duration: "",
  //   selectedImage: null,
  // });
  const [post, setPost] = useState({
    name: "",
    price: "",
    title: "",
    teacher1: "",
    teacher2: "",
    teacher1Exp: "",
    teacher2Exp: "",
    duration: "",
    selectedImage: null,
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  // const handleInputChange = (key, value) => {
  //   setFormData({ ...formData, [key]: value });
  // };

  const handleAddImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({});
    setImage(result.assets[0]);
    console.log(result);
    if (!result.cancelled) {
      setImage(result.assets[0]);
      // handleInputChange("selectedImage", result.uri);
    }
    setAddImageModalVisible(false);
  };
  const handleAddImageCourse = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({});
    console.log(result.assets[0]);
    if (!result.cancelled) {
      setPost({ ...post, selectedImage: result.assets[0] });
    }
    setAddImageModalVisible(false);
  };
  const handleAddCourse = () => {
    setModalVisible(true);
  };

  const handleSubmit = () => {
    console.log("Submitted:", post);
    // setFormData({
    //   name: "",
    //   price: "",
    //   title: "",
    //   teacher1: "",
    //   teacher2: "",
    //   teacher1Exp: "",
    //   teacher2Exp: "",
    //   duration: "",
    //   selectedImage: null,
    // });
    setModalVisible(false);
  };

  const submitImage = () => {
    console.log(image);
    setAddImageModalVisible(false);
  };

  const submitTimeTable = () => {
    console.log(posttime);
    settimetableModal(false);
  };

  const [posttime, setPosttime] = useState({
    classname: "",
    teachername: "",
    subject: "",
    starttime: "",
    endtime: "",
  });
  const handleTime = (event) => {
    setPosttime({ ...posttime, [event.target.name]: event.target.value });
  };
  const handleOpenFilePicker = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync({
        type: "application/pdf", // Specify the file type you want to allow
      });
      console.log(file);
      if (file.type === "success") {
        // Handle the selected file
        setSelectedFile(file);
      }
    } catch (error) {
      console.error("Error selecting file:", error);
      // Handle error
    }
  };

  const handleNoticeSubmit = async () => {
    try {
      setNoticeModal(false);
      if (!selectedFile) {
        // Handle if no file is selected
        return;
      }
      // Save the file to the database here
      console.log("Selected File:", selectedFile);
      // Reset selected file state
      setSelectedFile(null);
      // Close the modal
      setNoticeModal(false);
    } catch (error) {
      console.error("Error saving file:", error);
      // Handle error
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    // Add your search logic here
    // console.log("Searching for:", text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={handleSearch}
          value={searchQuery}
        />
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <MaterialIcons name="search" size={35} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.card}
        onPress={() => setAddImageModalVisible(true)}
      >
        <Text style={styles.cardText}>Upload Image For Home page</Text>
        <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={handleAddCourse}>
        {/* <View style={styles.cardContent}> */}
        <Text style={styles.cardText}>Add Course</Text>
        <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
        {/* </View> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => settimetableModal(true)}
      >
        <Text style={styles.cardText}>Upload Time Table</Text>
        <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => setNoticeModal(true)}
      >
        <Text style={styles.cardText}>Upload Notice</Text>
        <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={addImageModalVisible}
        onRequestClose={() => setAddImageModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={[styles.closeButton, { backgroundColor: "red" }]} // Red close button
            onPress={() => setAddImageModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          <View style={styles.modalContent}>
            {/* <TextInput type="file" /> */}
            <TouchableOpacity
              style={styles.selectImageButton}
              onPress={handleAddImage}
            >
              <MaterialIcons name="add-a-photo" size={24} color="white" />
              <Text style={styles.selectImageText}>Select Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.submitButton, { backgroundColor: "green" }]} // Green save button
              onPress={() => {
                submitImage;
              }}
            >
              <Text style={styles.submitButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={[styles.closeButton, { backgroundColor: "red" }]} // Red close button
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              value={post.name}
              placeholder="Enter Course name"
              onChangeText={handleInput}
            />
            <TextInput
              style={styles.input}
              value={post.title}
              placeholder="Enter Course title"
              onChangeText={handleInput}
            />
            <TextInput
              style={styles.input}
              value={post.price}
              placeholder="Enter Course Price"
              onChangeText={handleInput}
            />
            <TextInput
              style={styles.input}
              value={post.duration}
              placeholder="Enter Course Duration"
              onChangeText={handleInput}
            />
            <TextInput
              style={styles.input}
              value={post.teacher1}
              placeholder="Enter Teacher1"
              onChangeText={handleInput}
            />
            <TextInput
              style={styles.input}
              value={post.teacher2}
              placeholder="Enter Teacher2"
              onChangeText={handleInput}
            />
            <TextInput
              style={styles.input}
              value={post.teacher1Exp}
              placeholder="Enter Teacher1 Experience"
              onChangeText={handleInput}
            />
            <TextInput
              style={styles.input}
              value={post.teacher2Exp}
              placeholder="Enter Teacher2 Experience"
              onChangeText={handleInput}
            />
            <TouchableOpacity
              style={styles.selectImageButton}
              onPress={handleAddImageCourse}
            >
              <MaterialIcons name="add-a-photo" size={24} color="white" />
              <Text style={styles.selectImageText}>Select Image</Text>
            </TouchableOpacity>
            {/* {formData.selectedImage && (
              <Image
                source={{ uri: formData.selectedImage }}
                style={{ width: 200, height: 200 }}
              />
            )} */}
            <TouchableOpacity
              style={[styles.submitButton, { backgroundColor: "green" }]} // Green save button
              onPress={() => {
                handleSubmit;
              }}
            >
              <Text style={styles.submitButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={timetablemodal}
        onRequestClose={() => settimetableModal(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={[styles.closeButton, { backgroundColor: "red" }]} // Red close button
            onPress={() => settimetableModal(false)}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          <View style={styles.modalContent}>
            {/* <TextInput type="file" /> */}
            <TextInput
              style={styles.input}
              value={posttime.classname}
              placeholder="Enter classname"
              onChangeText={handleTime}
            />
            <TextInput
              style={styles.input}
              value={posttime.teachername}
              placeholder="Enter Teacher name"
              onChangeText={handleTime}
            />
            <TextInput
              style={styles.input}
              value={posttime.subject}
              placeholder="Enter subject name"
              onChangeText={handleTime}
            />
            <TextInput
              style={styles.input}
              value={posttime.starttime}
              placeholder="Enter starttime"
              onChangeText={handleTime}
            />
            <TextInput
              style={styles.input}
              value={posttime.endtime}
              placeholder="Enter endtime"
              onChangeText={handleTime}
            />
            <TouchableOpacity
              style={[styles.submitButton, { backgroundColor: "green" }]} // Green save button
              onPress={() => {
                submitTimeTable;
              }}
            >
              <Text style={styles.submitButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={noticeModal}
        onRequestClose={() => setNoticeModal(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={[styles.closeButton, { backgroundColor: "red" }]} // Red close button
            onPress={() => setNoticeModal(false)}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={handleOpenFilePicker}>
              <View style={styles.selectFileButton}>
                <MaterialIcons name="attach-file" size={24} color="black" />
                <Text style={styles.selectFileText}>Click here to select PDF*</Text>
              </View>
            </TouchableOpacity>
            {/* Display selected file */}
            {selectedFile && (
              <View style={styles.selectedFileContainer}>
                <MaterialIcons name="description" size={24} color="black" />
                <Text
                  style={styles.selectedFileName}
                >{`Selected File: ${selectedFile.name}`}</Text>
              </View>
            )}
            <TouchableOpacity
              style={[styles.submitButton, { backgroundColor: "green" }]} // Green save button
              onPress={handleNoticeSubmit}
            >
              <Text style={styles.submitButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  selectImageButton: {
    backgroundColor: "#007AFF", // Blue color for iOS style
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 20,
  },
  selectImageText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },

  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "90%",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 3,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    color: "#333",
  },
  arrow: {
    fontSize: 20,
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "blue", // Default color
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 20,
    color: "#555",
  },
  
  selectFileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  selectFileText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black', // Adjust the color as needed
  },

  selectedFileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding:15
  },

  selectedFileName: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black', // Adjust the color as needed
  },
});

export default Adminhome;
