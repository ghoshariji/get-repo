import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Video, ResizeMode } from "expo-av";

const Mycourse = ({ route, navigation }) => {
  const { course } = route.params;
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showExamModal, setShowExamModal] = useState(false);

  const handleVideoPress = (videoUri) => {
    setSelectedVideo(videoUri);
  };

  const handleExamPress = () => {
    setShowExamModal(true);
  };

  const handleCloseExamModal = () => {
    setShowExamModal(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Course Image */}
      <Image source={course.image} style={styles.courseImage} />

      {/* Course Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Description</Text>
        <Text style={styles.description}>{course.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Exams</Text>
        <TouchableOpacity style={styles.takeQuizButton} onPress={handleExamPress}>
          <Text style={styles.takeQuizText}>Take Quiz</Text>
        </TouchableOpacity>
      </View>

      {/* Video Lectures */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Video Lectures</Text>
        {course.lectures.map((lecture, index) => (
          <TouchableOpacity
            key={index}
            style={styles.lecture}
            onPress={() => handleVideoPress(lecture.video)}
          >
            <Text style={styles.lectureTitle}>{`Lecture ${index + 1}: ${
              lecture.title
            }`}</Text>
            <Text style={styles.lectureDescription}>{lecture.description}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Exam Section */}
     

      {/* Selected Video Playback */}
      {selectedVideo && (
        <View style={styles.videoContainer}>
          <Video
            source={{
              uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            style={styles.video}
            shouldPlay
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
          />
          <TouchableOpacity
            onPress={() => setSelectedVideo(null)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Close Video</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Exam Modal */}
      <Modal
        visible={showExamModal}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseExamModal}
      >
        <View style={styles.examModalContainer}>
          <View style={styles.examModalContent}>
            <Text style={styles.examModalTitle}>Choose an Exam</Text>
            {course.exams.map((exam, index) => (
              <TouchableOpacity
                key={index}
                style={styles.examOption}
                onPress={() => {
                  handleCloseExamModal();
                  navigation.navigate("Write-Exam", { exam });
                }}
              >
                <Text style={styles.examOptionText}>{exam.examname}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  courseImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
    borderRadius: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  lecture: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
  },
  lectureTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lectureDescription: {
    fontSize: 16,
  },
  takeQuizButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  takeQuizText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  videoContainer: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    fontWeight: "bold",
  },
  examModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  examModalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  examModalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  examOption: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  examOptionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Mycourse;
