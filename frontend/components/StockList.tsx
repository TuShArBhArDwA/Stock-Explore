import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function StockList({
  gainers,
  losers,
  active,
  activeTab,
  setActiveTab
}: any) {
  const getData = () => {
    if (activeTab === "gainers") return gainers;
    if (activeTab === "losers") return losers;
    if (activeTab === "active") return active;
    return [];
  };

  return (
    <View style={{ marginTop: 20 }}>
      {/* Tab Buttons */}
      <View style={styles.tabContainer}>
        {["gainers", "losers", "active"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tab, activeTab === tab && styles.activeTab]}>
              {tab.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Stock FlatList */}
      <FlatList
        data={getData()}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.ticker} — {item.price} ({item.changePercent}%)
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: { flexDirection: "row", marginBottom: 10 },
  tab: { marginHorizontal: 10, fontSize: 16, color: "gray" },
  activeTab: {
    fontWeight: "bold",
    color: "#007AFF",
    borderBottomWidth: 2,
    borderBottomColor: "#007AFF"
  },
  item: { fontSize: 14, marginVertical: 4 }
});