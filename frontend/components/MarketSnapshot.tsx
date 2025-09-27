import { View, Text, StyleSheet } from "react-native";

export default function MarketSnapshot({ indexes }: { indexes: any[] }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Market Snapshot</Text>
      {indexes.map((idx, i) => (
        <Text key={i} style={styles.item}>
          {idx.name} ({idx.symbol}): {idx.value} ({idx.changePercent}%)
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 10 },
  title: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
  item: { fontSize: 14, marginVertical: 4 }
});