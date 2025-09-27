import { View, Text, Image, StyleSheet } from "react-native";

export default function SpotlightCard({ spotlight }: { spotlight: any }) {
  if (!spotlight) return null;

  return (
    <View style={styles.container}>
      <Image source={{ uri: spotlight.logoUrl }} style={styles.logo} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>
          {spotlight.companyName} ({spotlight.ticker})
        </Text>
        <Text>{spotlight.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginTop: 20
  },
  logo: { width: 50, height: 50, marginRight: 10 },
  title: { fontWeight: "bold", marginBottom: 4 }
});