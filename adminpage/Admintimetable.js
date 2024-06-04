import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome or any other icon library

const Admintimetable = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Dummy data for demonstration
  const timetableData = [
    { id: 1, date: 'May 10, 2024', class1: { sir: 'John Doe', subject: 'Math', time: '9:00 AM - 10:30 AM' }, class2: { sir: 'Jane Smith', subject: 'Science', time: '11:00 AM - 12:30 PM' }, batch: 'Batch A' },
    { id: 2, date: 'May 11, 2024', class1: { sir: 'Alice Johnson', subject: 'English', time: '9:00 AM - 10:30 AM' }, class2: { sir: 'Bob Williams', subject: 'History', time: '11:00 AM - 12:30 PM' }, batch: 'Batch B' },
    // Add more data for other days
  ];

  const openEditModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const saveChanges = () => {
    // Implement logic to save changes made in the modal
    // For demonstration, you can simply log the changes
    console.log('Changes saved:', selectedItem);
    setModalVisible(false); // Close the modal after saving
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {timetableData.map((item, index) => (
          <View key={index} style={styles.dayContainer}>
            <TouchableOpacity onPress={() => openEditModal(item)} style={styles.editIcon}>
              <FontAwesome name="edit" size={20} color="blue" />
            </TouchableOpacity>
            <Text style={styles.date}>{item.date}</Text>
            <View style={styles.classContainer}>
              <Text style={styles.title}>Class 1:</Text>
              <Text>{`Sir: ${item.class1.sir}`}</Text>
              <Text>{`Subject: ${item.class1.subject}`}</Text>
              <Text>{`Time: ${item.class1.time}`}</Text>
            </View>
            <View style={styles.classContainer}>
              <Text style={styles.title}>Class 2:</Text>
              <Text>{`Sir: ${item.class2.sir}`}</Text>
              <Text>{`Subject: ${item.class2.subject}`}</Text>
              <Text>{`Time: ${item.class2.time}`}</Text>
            </View>
            <Text style={styles.batch}>{`Batch: ${item.batch}`}</Text>
          </View>
        ))}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            {/* Modal content with input fields pre-filled with selectedItem data */}
            {selectedItem && (
              <View style={styles.modalContent}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <FontAwesome name="close" size={25} color="black" />
                  </TouchableOpacity>
                {/* Add TextInput components with values from selectedItem for editing */}
                <Text>Edit Data</Text>
                {/* Example of TextInput */}
                <TextInput
                  style={styles.input}
                  value={selectedItem.date} // Use selectedItem data for initial values
                  onChangeText={(text) => setSelectedItem({ ...selectedItem, date: text })} // Update the selectedItem with changed data
                />
                {/* Add more TextInputs for other fields */}
                <View style={styles.buttonContainer}>
                  <Button title="Save" onPress={saveChanges} />
                  
                </View>
              </View>
            )}
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  dayContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  classContainer: {
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  batch: {
    marginTop: 10,
  },
  editIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default Admintimetable;
