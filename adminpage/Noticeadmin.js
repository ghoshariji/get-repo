import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

const Noticeadmin = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNoticeData, setFilteredNoticeData] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false); 
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const noticeData = [
    {
      id: 1,
      date: "May 5, 2024",
      icon: "document-text-outline",
      pdfName: "Notice wbcs prelims.pdf",
    },
    {
      id: 2,
      date: "May 4, 2024",
      icon: "document-text-outline",
      pdfName: "Notice wbcs.pdf",
    },
    // Add more data as needed
  ];

  const handleViewPDF = (id, pdfName) => {
    console.log(`View PDF for notice with ID ${id}, PDF Name: ${pdfName}`);
  };

  const handleEditNotice = (id) => {
    const notice = noticeData.find((item) => item.id === id);
    setSelectedNotice(notice);
    setModalVisible(true);
  };

  const handleDeleteNotice = (id) => {
    // Logic to delete notice with the given ID
    console.log(`Delete notice with ID: ${id}`);
    // Update noticeData state after deleting the notice
    const updatedNoticeData = noticeData.filter((item) => item.id !== id);
    setFilteredNoticeData(updatedNoticeData);
  };

  const handleSaveChanges = () => {
    // Logic to save changes made in the modal
    console.log("Changes saved:", selectedNotice);
    setModalVisible(false);
  };

  const filteredData = noticeData.filter((item) =>
    item.pdfName
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim()
      .includes(searchQuery.toLowerCase().replace(/\s+/g, " ").trim())
  );

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredNoticeData([]);
    } else {
      const filteredData = noticeData.filter((item) =>
        item.pdfName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredNoticeData(filteredData);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[styles.searchBar, isInputFocused && styles.searchBarFocused]}
      >
        <TextInput
          style={[
            styles.searchInput,
            isInputFocused && styles.searchInputFocused,
          ]}
          placeholder="Search PDFs by name"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {filteredData.map((item) => (
          <View key={item.id} style={styles.noticeItem}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => handleViewPDF(item.id, item.pdfName)}
            >
              <Ionicons name={item.icon} size={24} color="black" style={styles.icon} />
              <Text style={styles.date}>{item.date}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.pdfName}>{item.pdfName}</Text>
              <TouchableOpacity onPress={() => handleEditNotice(item.id)}>
                <Ionicons name="create-outline" size={24} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteNotice(item.id)}>
                <Ionicons name="trash-outline" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Edit Notice</Text>
            <TextInput
              style={styles.input}
              placeholder="PDF Name"
              value={selectedNotice?.pdfName}
              onChangeText={(text) =>
                setSelectedNotice({ ...selectedNotice, pdfName: text })
              }
            />
            <View style={styles.modalButtons}>
              <Button title="Save" onPress={handleSaveChanges} />
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
    padding: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  searchBarFocused: {
    borderColor: "blue",
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  searchInputFocused: {
    borderWidth: 1,
    borderColor: "blue",
  },
  searchButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  noticeItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  date: {
    fontSize: 16,
    marginRight: 10,
  },
  pdfName: {
    fontSize: 16,
    flex: 1,
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
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default Noticeadmin;
