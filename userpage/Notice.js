import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from expo/vector-icons

const Notice = () => {
  // Dummy data for demonstration
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNoticeData, setFilteredNoticeData] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false); // State to track input focus

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

  // Function to handle viewing the PDF
  const handleViewPDF = (id, pdfName) => {
    // Logic to view PDF for the given notice ID
    console.log(`View PDF for notice with ID ${id}, PDF Name: ${pdfName}`);
  };

  // Function to filter notice data based on search query
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
          //   onFocus={() => setIsInputFocused(true)}
          //   onBlur={() => setIsInputFocused(false)}
          //   onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {filteredData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.noticeItem}
            onPress={() => handleViewPDF(item.id, item.pdfName)}
          >
              <View style={{ flexDirection: "column" }}>
               
                <Text style={styles.date}>{item.date}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
              <Ionicons
                  name={item.icon}
                  size={24}
                  color="black"
                  style={styles.icon}
                />
                <Text style={styles.pdfName}>{item.pdfName}</Text>
              </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    borderColor: "blue", // Change border color when input is focused
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  searchInputFocused: {
    // Add additional styles when input is focused
    borderWidth: 1,
    borderColor: "blue",
  },
  searchButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  noticeItem: {
    flexDirection: "column",
    alignItems: "center",
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
  noPdfText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});

export default Notice;
