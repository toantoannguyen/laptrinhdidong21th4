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
import { Ionicons } from "@expo/vector-icons";

// Import hình ảnh từ thư mục assets
import hinhquachuoi from "./assets/chuoihuuco.jpg";
import hinhtao from "./assets/tao.jpg";
import banner from "./assets/baner.jpg";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.location}>Dhaka, Banassree</Text>
        <Ionicons name="search" size={24} color="black" />
      </View>
      <Image source={banner} style={styles.banner} />
      <Text style={styles.sectionTitle}>Ưu Đãi Độc Quyền</Text>
      <View style={styles.productRow}>
        <TouchableOpacity
          style={styles.productCard}
          onPress={() => navigation.navigate("ProductDetail")}
        >
          <Image source={hinhquachuoi} style={styles.productImage} />
          <Text>Chuối Hữu Cơ</Text>
          <Text>$4.99</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productCard}>
          <Image source={hinhtao} style={styles.productImage} />
          <Text>Táo Đỏ</Text>
          <Text>$4.99</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Bán Chạy Nhất</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  location: { fontSize: 16 },
  banner: { width: "90%", height: 100, alignSelf: "center", borderRadius: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", padding: 15 },
  productRow: { flexDirection: "row", justifyContent: "space-around" },
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

export default HomeScreen;
