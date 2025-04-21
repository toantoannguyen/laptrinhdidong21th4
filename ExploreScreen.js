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
import hinhraucu from "./assets/raucuqua.jpg";
import dauan from "./assets/dauan.jpg";
import thitca from "./assets/cavathit.jpg";
import snack from "./assets/snack.jpg";
const ExploreScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Find Products</Text>
      <View style={styles.categoryRow}>
        <TouchableOpacity
          style={styles.categoryCard}
          onPress={() => navigation.navigate("Beverages")}
        >
          <Image source={hinhraucu} style={styles.categoryImage} />
          <Text>Fresh Fruits & Vegetable</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image source={dauan} style={styles.categoryImage} />
          <Text>Cooking Oil & Ghee</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryRow}>
        <TouchableOpacity style={styles.categoryCard}>
          <Image source={thitca} style={styles.categoryImage} />
          <Text>Meat & Fish</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image source={snack} style={styles.categoryImage} />
          <Text>Bakery & Snacks</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { fontSize: 18, fontWeight: "bold", padding: 15 },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  categoryCard: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  categoryImage: { width: 100, height: 100, borderRadius: 10 },
});

export default ExploreScreen;
