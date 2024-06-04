import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';

const Explore = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Course Title and Image */}
      <View style={styles.courseHeader}>
        <Image
          source={require('../assets/welcome.jpg')}
          style={styles.courseImage}
        />
        <Text style={styles.courseTitle}>Course Title</Text>
      </View>

      {/* Motivation Section */}
      <View style={styles.section}>
        <Image
          source={require('../assets/welcome.jpg')}
          style={styles.motivationImage}
        />
      </View>

      {/* Teacher Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Teacher</Text>
        <Text style={styles.teacherName}>Teacher's Name</Text>
        <Text style={styles.teacherExperience}>Experience: X Years</Text>
      </View>

      {/* Course Timetable Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Timetable</Text>
        {/* Add timetable content here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  courseHeader: {
    padding: 20,
    alignItems: 'center',
  },
  courseImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  motivationImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  teacherName: {
    fontSize: 16,
    marginBottom: 5,
  },
  teacherExperience: {
    fontSize: 14,
    color: '#666',
  },
});

export default Explore;
