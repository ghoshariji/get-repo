import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  Linking,
  Modal,
  // Linking
} from "react-native";
// import RNUpiPayment from "react-native-upi-payment"
// import { BarCodeScanner } from "expo-barcode-scanner";
// import * as Linking from 'expo-linking';
// import { Camera } from "expo-camera";
// import { BarCodeScanner } from "expo-barcode-scanner";

// import QRCode from "react-native-qrcode-svg";
const Courses = ({ navigation }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showAllCourses, setShowAllCourses] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [qrData, setQRData] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // useEffect(() => {
  //   requestCameraPermission();
  // }, []);

  // const handleScan = ({ type, data }) => {
  //   console.log("QR code scanned:", data);
  //   // Set scanned state to true
  //   setScanned(true);
  //   // Set the scanned QR code data
  //   setQRData(data);
  //   // Hide the modal containing QR code
  //   setModalVisible(false);

  //   // Open the payment app using Linking
  //   console.log("coming here");
  //   const paymentAppUrl = "https://www.google.com/"; // Specify the URI for the payment app
  //   Linking.openURL(paymentAppUrl)
  //     .then((supported) => {
  //       if (!supported) {
  //         console.log("Failed to open the payment app.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "An error occurred while opening the payment app:",
  //         error
  //       );
  //     });
  // };
  // const handlePayment = () => {
  //   console.log("Buy Now button clicked");
  //   setModalVisible(false);
  //   setShowQR(true); // Show QR code scanner when payment is initiated
  // };

  // const requestCameraPermission = async () => {
  //   const { status } = await Camera.requestCameraPermissionsAsync();
  //   setHasPermission(status === "granted");
  // };

  // if (hasPermission === null) {
  //   return <Text>Requesting for camera permission</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }
  // Dummy data for all courses
  const allCourses = [
    {
      id: 1,
      name: "Course 1",
      image: require("../assets/welcome.jpg"),
      price: 199,
      discount: 50,
    },
    {
      id: 2,
      name: "Course 2",
      image: require("../assets/welcome.jpg"),
      price: 299,
      discount: 70,
    },
    {
      id: 3,
      name: "Course 3",
      image: require("../assets/welcome.jpg"),
      price: 249,
      discount: 60,
    },
    // Add more courses as needed
  ];

  const myCourses = [
    {
      id: 4,
      name: "My Course 1",
      image: require("../assets/welcome.jpg"),
      price: 149,
      discount: 30,
      lectures: [
        {
          video: require("../assets/introduction.mp4"),
          title: "Introduction 1",
          description: "Introduction of basic",
        },
      ],
      exams: [
        {
          examname: "Polity",
          duration: "20",
          questions: [
            {
              question: "what is polity?",
              options: [
                { label: "Ada", value: "A" },
                { label: "Bdsa", value: "B" },
                { label: "Cds", value: "C" },
                { label: "Ddas", value: "D" },
              ],
              correct: "A",
            },
            {
              question: "what is economics?",
              options: [
                { label: "Adsa", value: "A" },
                { label: "Bdsadsa", value: "B" },
                { label: "Cdsa", value: "C" },
                { label: "Ddsa", value: "D" },
              ],
              correct: "A",
            },
          ],
        },
        {
          examname: "Geography",
          duration: "20",
          questions: [
            {
              question: "what is polity?",
              options: [
                { label: "Ada", value: "A" },
                { label: "Bdsa", value: "B" },
                { label: "Cds", value: "C" },
                { label: "Ddas", value: "D" },
              ],
              correct: "A",
            },
            {
              question: "what is economics?",
              options: [
                { label: "Adsa", value: "A" },
                { label: "Bdsadsa", value: "B" },
                { label: "Cdsa", value: "C" },
                { label: "Ddsa", value: "D" },
              ],
              correct: "A",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "My Course 2",
      image: require("../assets/welcome.jpg"),
      price: 199,
      discount: 40,
    },
    {
      id: 6,
      name: "My Course 3",
      image: require("../assets/welcome.jpg"),
      price: 179,
      discount: 55,
    },
    // Add more courses as needed
  ];
  // const [modalVisible, setModalVisible] = useState(false);

  // const showModal = () => {
  //   setModalVisible(true);
  // };

  // const hideModal = () => {
  //   setModalVisible(false);
  // };

  const filteredCourses = showAllCourses
    ? allCourses.filter((course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : myCourses.filter((course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleSearch = () => {
    // Logic to handle search
    // For now, let's just log the search query
    console.log("Searching for:", searchQuery);
  };

  const handleExplore = () => {
    // Handle navigation to another page
    // For now, let's log a message
    navigation.navigate("Explore");
    console.log("Exploring courses...");
  };

  //   const handlePayment = () => {
  //     // RNUpiPayment.initializePayment(
  //     //   {
  //     //     vpa: '7439120030@axl', // or can be john@ybl or mobileNo@upi
  //     //     payeeName: 'Arijit Ghosh',
  //     //     amount: '1',
  //     //     transactionRef: 'aasf-332-aoei-fn',
  //     //   },
  //     //   successCallback,
  //     //   failureCallback
  //     // );
  //     // Linking.openURL("https://virtualclass-yz7w.onrender.com/uploads/back.jpg")
  // showModal()
  //   };
  // function successCallback(data) {
  //   // do whatever with the data
  //   console.log(data)
  // }

  // function failureCallback(data) {
  //   // do whatever with the data
  //   console.log(data)
  // }

  const handlePayment = (
    name,
    email,
    descriptioncourse,
    courseId,
    userId,
    price
  ) => {
    Linking.openURL(
      // `https://pay-ment-razorpay-stripe-pay-collaboration-cpb12pkiq.vercel.app/gateway-integration-payment/V1/${courseId}/fsddfds78vcx/security-allow-allregistion/${userId}/${name}/854587877fdsdssdsf/rwhefdfdsf/8844/321132/${price}/8999/1233/dshdadghjasg/2732544543eww/${email}/jdasdjkldsa55545/7473hdhdhsahgh/${descriptioncourse}`

      `https://pay-ment-razorpay-stripe-pay-collaboration.vercel.app/gateway-integration-payment/V1/${courseId}/fsddfds78vcx/security-allow-allregistion/${userId}/${name}/854587877fdsdssdsf/rwhefdfdsf/8844/321132/${price}/8999/1233/dshdadghjasg/2732544543eww/{email}/jdasdjkldsa55545/7473hdhdhsahgh/${descriptioncourse}`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Toggle buttons */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            showAllCourses ? styles.activeButton : null,
          ]}
          onPress={() => setShowAllCourses(true)}
        >
          <Text style={styles.buttonText}>All Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            !showAllCourses ? styles.activeButton : null,
          ]}
          onPress={() => setShowAllCourses(false)}
        >
          <Text style={styles.buttonText}>My Course</Text>
        </TouchableOpacity>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search courses..."
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionHeader}>Courses</Text>

      {/* Courses list */}
      <ScrollView>
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalBackground}
            activeOpacity={1}
            onPress={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButton}>Close</Text>
                </TouchableOpacity>
                <View style={styles.qrContainer}>
                  <QRCode
                    value={qrData}
                    size={200}
                    backgroundColor="white"
                    color="black"
                  />
                </View>
                <TouchableOpacity
                  style={styles.payNowButton}
                  onPress={handlePayment}
                >
                  <Text style={styles.payNowText}>Pay Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal> */}

        <View style={styles.leftSection}>
          {filteredCourses.map((course) => (
            <View key={course.id} style={styles.courseItem}>
              <Image source={course.image} style={styles.courseImage} />
              <Text style={styles.courseTitle}>{course.name}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.originalPrice}>${course.price}</Text>
                <Text style={styles.discountedPrice}>
                  ${course.price - course.discount}
                </Text>
                <Text style={styles.discount}>{course.discount}% OFF</Text>
              </View>
              {showAllCourses && (
                <TouchableOpacity
                  style={styles.exploreButton}
                  onPress={handleExplore}
                >
                  <Text style={styles.exploreText}>Explore</Text>
                </TouchableOpacity>
              )}
              {showAllCourses ? (
                <TouchableOpacity
                  style={styles.buyNowButton}
                  onPress={() =>
                    handlePayment("da", "das", "das", "das", "das", "wdasddsaw")
                  }
                >
                  <Text style={styles.buyNowText}>Buy Now</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.buyNowButton}
                  onPress={() => navigation.navigate("My course", { course })}
                >
                  <Text style={styles.buyNowText}>View Course</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
        {/* {showQR &&
          (console.log("cone"),
          (
            <Camera
              style={{ flex: 1 }}
              type={Camera.Constants.Type.back}
              onBarCodeScanned={scanned ? undefined : handleScan}
            />
          ))} */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  qrContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  toggleButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: "#2196F3",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  searchButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  sectionHeader: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 24,
  },
  leftSection: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  courseItem: {
    marginBottom: 20,
  },
  courseImage: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  originalPrice: {
    textDecorationLine: "line-through",
    marginRight: 5,
  },
  discountedPrice: {
    fontWeight: "bold",
    marginRight: 5,
  },
  discount: {
    color: "green",
    fontWeight: "bold",
  },
  buyNowButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 5,
  },
  buyNowText: {
    color: "white",
    fontWeight: "bold",
  },
  exploreButton: {
    backgroundColor: "#ccc",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    margin: 2,
  },
  exploreText: {
    fontWeight: "bold",
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
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
    fontWeight: "bold",
    color: "blue",
  },
  payNowButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  payNowText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Courses;
