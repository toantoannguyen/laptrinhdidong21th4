import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import coca from "./assets/cocacola.jpg";
import sevenup from "./assets/sevenup.jpg";
const BeveragesScreen = () => (
  <ScrollView style={styles.container}>
    <View style={styles.productRow}>
      <View style={styles.productCard}>
        <Image source={coca} style={styles.productImage} />
        <Text>cocacola</Text>
        <Text>$1.99</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productCard}>
        <Image source={sevenup} style={styles.productImage} />
        <Text>7up</Text>
        <Text>$1.50</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  productCard: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
  },
  productImage: { width: 100, height: 100, borderRadius: 10 },
  addButton: { backgroundColor: "#4CAF50", padding: 5, borderRadius: 5 },
  addButtonText: { color: "#fff", fontSize: 16 },
});

export default BeveragesScreen;
