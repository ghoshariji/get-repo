import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from expo/vector-icons

const Profile = () => {
  const [changeNameModalVisible, setChangeNameModalVisible] = useState(false);
  const [changePasswordModalVisible, setChangePasswordModalVisible] =
    useState(false);
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [addImageModalVisible, setAddImageModalVisible] = useState(false);

  const handleChangeName = () => {
    // Logic to change name
    setChangeNameModalVisible(false);
  };

  const handleCloseNameModal = () => {
    setChangeNameModalVisible(false);
  };

  const handleClosePasswordModal = () => {
    setChangePasswordModalVisible(false);
  };

  const handleChangePassword = () => {
    // Logic to change password
    setChangePasswordModalVisible(false);
  };

  const handleChangeProfilePic = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({});
    console.log(result.assets[0].uri)
    if (!result.cancelled) {
      setProfileImage(result.assets[0].uri);
    }
    setAddImageModalVisible(false);
  };

  const handleLogout = () =>{
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        {/* Profile Image */}
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : require("../assets/welcome.jpg")
          } // Replace with your image source
          style={styles.profileImage}
        />

        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileInfo}>Phone: +1234567890</Text>
        <Text style={styles.profileInfo}>Email: johndoe@example.com</Text>
      </View>

      <ScrollView style={styles.optionsContainer}>
        {/* Change Name Option */}
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => setChangeNameModalVisible(true)}
        >
          <Text>Change Name</Text>
        </TouchableOpacity>

        {/* Change Password Option */}
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => setChangePasswordModalVisible(true)}
        >
          <Text>Change Password</Text>
        </TouchableOpacity>

        {/* Change Profile Picture Option */}
       
        <TouchableOpacity
          style={styles.optionItem}
          onPress={handleChangeProfilePic}
        >
          <Text>Change Profile Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionItem}
          onPress={handleLogout}
        >
          <Text>Log out</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal for Change Name */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={changeNameModalVisible}
        onRequestClose={() => setChangeNameModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {/* <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={handleCloseNameModal}
              style={styles.closeIcon}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View> */}

          <View style={styles.modalContent}>
            {/* Change Name */}
            <TouchableOpacity
              onPress={() => setChangeNameModalVisible(false)}
              style={[styles.closeIcon, { alignItems: "flex-end" }]}
            >
              <Ionicons
                name="close"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Enter new name"
              onChangeText={(text) => setNewName(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleChangeName}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal for Change Password */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={changePasswordModalVisible}
        onRequestClose={() => setChangePasswordModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Change Password */}
            <TouchableOpacity
              onPress={() => setChangePasswordModalVisible(false)}
              style={[styles.closeIcon, { alignItems: "flex-end" }]}
            >
              <Ionicons
                name="close"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Enter new password"
              onChangeText={(text) => setNewPassword(text)}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleChangePassword}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={addImageModalVisible}
        onRequestClose={() => setAddImageModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setAddImageModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          <View style={styles.modalContent}>
            {/* <TextInput type="file" /> */}
            <TouchableOpacity onPress={handleChangeProfilePic}>
              <Text>Select Image</Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity onPress={submitImage}>
            <Text>Submit</Text>
          </TouchableOpacity> */}
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  topSection: {
    marginTop: 40,
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
    marginVertical: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  profileInfo: {
    fontSize: 16,
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalHeader: {
    width: "100%",
    alignItems: "flex-end",
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
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  closeIcon: {
    padding: 5,
  },
});

export default Profile;
