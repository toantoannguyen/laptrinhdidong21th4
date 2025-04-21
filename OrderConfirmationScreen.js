import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const OrderConfirmationScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Ionicons
        name="checkmark-circle"
        size={50}
        color="#4CAF50"
        style={styles.icon}
      />
      <Text style={styles.message}>Thank you for your order!</Text>
      <Text>Order #12345</Text>

      <Text style={styles.sectionTitle}>Order Details</Text>
      <Text>- Natural Red Apple, 1kg, $4.99</Text>
      <Text>Total: $6.99</Text>
      <Text>Est. Delivery: 30 mins</Text>

      <TouchableOpacity style={styles.trackButton}>
        <Text style={styles.trackButtonText}>Track Order</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("Tabs")}
      >
        <Text style={styles.continueButtonText}>Continue Shopping</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 15,
    alignItems: "center",
  },
  icon: {
    marginVertical: 20,
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  trackButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  trackButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  continueButton: {
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },
  continueButtonText: {
    color: "#4CAF50",
    fontSize: 16,
  },
});

export default OrderConfirmationScreen;
