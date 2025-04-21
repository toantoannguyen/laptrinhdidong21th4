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
const ProductDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Image source={hinhtao} style={styles.productImage} />
      <View style={styles.details}>
        <Text style={styles.title}>táo đỏ tự nhiên </Text>
        <Text style={styles.price}>$4.99</Text>
        <View style={styles.quantity}>
          <TouchableOpacity>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>1</Text>
          <TouchableOpacity>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>Product Detail</Text>
        <Text>Apples May Be Good For Weight...</Text>
        <Text style={styles.sectionTitle}>Nutritions</Text>
        <Text>100gr</Text>
        <Text style={styles.sectionTitle}>Review</Text>
        <Text>⭐⭐⭐⭐⭐</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.addButtonText}>Add to Basket</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  productImage: { width: "100%", height: 300 },
  details: { padding: 15 },
  title: { fontSize: 20, fontWeight: "bold" },
  price: { fontSize: 18, color: "#4CAF50" },
  quantity: { flexDirection: "row", alignItems: "center", marginVertical: 10 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginVertical: 10 },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: { color: "#fff", fontSize: 16 },
});

export default ProductDetailScreen;
