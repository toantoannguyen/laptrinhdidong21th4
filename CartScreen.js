import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import hinhtao from "./assets/tao.jpg";
const CartScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <Image source={hinhtao} style={styles.itemImage} />
        <View>
          <Text>táo đỏ tự nhiên , 1kg</Text>
          <Text>$4.99</Text>
        </View>
        <View style={styles.quantity}>
          <TouchableOpacity>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>1</Text>
          <TouchableOpacity>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.summary}>
        <Text>Subtotal: $4.99</Text>
        <Text>Delivery Fee: $2.00</Text>
        <Text style={styles.total}>Total: $6.99</Text>
      </View>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate("Checkout")}
      >
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  item: { flexDirection: "row", padding: 15, alignItems: "center" },
  itemImage: { width: 50, height: 50, borderRadius: 5, marginRight: 10 },
  quantity: { flexDirection: "row", alignItems: "center", marginLeft: "auto" },
  summary: { padding: 15 },
  total: { fontSize: 16, fontWeight: "bold" },
  checkoutButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    margin: 15,
  },
  checkoutButtonText: { color: "#fff", fontSize: 16 },
});

export default CartScreen;
