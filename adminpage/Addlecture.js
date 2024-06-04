import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const Addlecture = () => {
  const [videos, setVideos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoName, setVideoName] = useState("");
  const [videoFeatures, setVideoFeatures] = useState("");
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);

  // Function to generate dummy data
  const generateDummyData = () => {
    const dummyVideos = [];
    for (let i = 1; i <= 5; i++) {
      dummyVideos.push({ title: `Dummy Video ${i}`, description: "" });
    }
    return dummyVideos;
  };

  useEffect(() => {
    // Render dummy data when component mounts
    setVideos(generateDummyData());
  }, []);

  const uploadVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setVideos([...videos, { uri: result.uri, title: "", description: "" }]);
    }
  };

  const saveVideo = () => {
    // Save video details and close modal
    // You can implement the logic to save the video details here
    setModalVisible(false);
  };

  const handleDelete = () => {
    setEditModalVisible(false);
  };
  const openEditModal = (index) => {
    setSelectedVideoIndex(index);
    setEditModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Course Details</Text>
        {/* Render course image, name, etc. here */}
      </View>

      <ScrollView style={styles.videoList}>
        {videos.map((video, index) => (
          <View key={index} style={styles.videoItem}>
            <Text style={styles.videoText}>{video.title}</Text>
            <TouchableOpacity onPress={() => openEditModal(index)}>
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <Text style={styles.editButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.uploadButton}>
        <Button
          title="Upload New Video"
          onPress={() => setModalVisible(true)}
        />
      </View>

      {/* Add/Edit Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible || editModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Title of the Video"
              value={videoTitle}
              onChangeText={(text) => setVideoTitle(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Video Name"
              value={videoName}
              onChangeText={(text) => setVideoName(text)}
            />
            <TextInput
              style={[styles.input, styles.largeInput]}
              placeholder="Video Features"
              multiline
              value={videoFeatures}
              onChangeText={(text) => setVideoFeatures(text)}
            />
             <TouchableOpacity
              style={[
                styles.uploadButtonModal,
                { flexDirection: "row", alignItems: "center" },
              ]}
              onPress={uploadVideo}
            >
              <Text style={styles.buttonText}>Upload New Video Clicl here*</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  setModalVisible(false);
                  setEditModalVisible(false);
                }}
              >
                
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={saveVideo}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  videoList: {
    flex: 1,
    marginBottom: 20,
  },
  videoItem: {
    backgroundColor: "#f0f0f0",
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  videoText: {
    fontSize: 16,
  },
  editButton: {
    color: "blue",
  },
  uploadButton: {
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: width - 40, // Adjusted width
    maxHeight: 400, // Max height for modal content
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  largeInput: {
    height: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  closeButton: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default Addlecture;
