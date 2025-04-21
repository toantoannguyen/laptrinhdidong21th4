import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CheckoutScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.sectionTitle}>Địa chỉ giao hàng</Text>
      <Text>Dhaka, Banassree</Text>

      <Text style={styles.sectionTitle}>Tóm tắt đơn hàng</Text>
      <Text>- Táo đỏ tự nhiên, 1kg, $4.99</Text>
      <Text>Tạm tính: $4.99</Text>
      <Text>Phí giao hàng: $2.00</Text>
      <Text style={styles.total}>Tổng cộng: $6.99</Text>

      <Text style={styles.sectionTitle}>Phương thức thanh toán</Text>
      <Text>Thẻ tín dụng</Text>
      <Text>Thanh toán khi nhận hàng</Text>

      <TouchableOpacity
        style={styles.placeOrderButton}
        onPress={() => navigation.navigate("OrderConfirmation")}
      >
        <Text style={styles.placeOrderButtonText}>Đặt hàng</Text>
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
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  placeOrderButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  placeOrderButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default CheckoutScreen;
