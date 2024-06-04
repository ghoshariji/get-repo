import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Timetable = () => {
  // Dummy data for demonstration
  const timetableData = [
    { date: 'May 10, 2024', class1: { sir: 'John Doe', subject: 'Math', time: '9:00 AM - 10:30 AM' }, class2: { sir: 'Jane Smith', subject: 'Science', time: '11:00 AM - 12:30 PM' }, batch: 'Batch A' },
    { date: 'May 11, 2024', class1: { sir: 'Alice Johnson', subject: 'English', time: '9:00 AM - 10:30 AM' }, class2: { sir: 'Bob Williams', subject: 'History', time: '11:00 AM - 12:30 PM' }, batch: 'Batch B' },
    // Add more data for other days
  ];

  return (
    <ScrollView>
    <View style={styles.container}>
      {timetableData.map((item, index) => (
        <View key={index} style={styles.dayContainer}>
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
});

export default Timetable;
