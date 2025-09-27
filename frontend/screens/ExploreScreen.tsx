import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import {
  fetchIndexes,
  fetchTopGainers,
  fetchLosers,
  fetchActive,
  fetchSpotlight,
  fetchNews,
} from "../services/api";

export default function ExploreScreen() {
  const [indexes, setIndexes] = useState<any[]>([]);
  const [gainers, setGainers] = useState<any[]>([]);
  const [losers, setLosers] = useState<any[]>([]);
  const [active, setActive] = useState<any[]>([]);
  const [spotlight, setSpotlight] = useState<any | null>(null);
  const [news, setNews] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<
    "gainers" | "losers" | "active"
  >("gainers");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [
          indexesData,
          gainersData,
          losersData,
          activeData,
          spotlightData,
          newsData,
        ] = await Promise.all([
          fetchIndexes(),
          fetchTopGainers(),
          fetchLosers(),
          fetchActive(),
          fetchSpotlight(),
          fetchNews(),
        ]);
        setIndexes(indexesData.indexes ?? []);
        setGainers(gainersData.gainers ?? []);
        setLosers(losersData.losers ?? []);
        setActive(activeData.active ?? []);
        setSpotlight(spotlightData.spotlight ?? null);
        setNews(newsData.news ?? []);
      } catch (err) {
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  const getStockData = () => {
    if (activeTab === "gainers") return gainers;
    if (activeTab === "losers") return losers;
    if (activeTab === "active") return active;
    return [];
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Explore</Text>
        <Image
          source={require("../assets/images/profile.jpg")}
          style={styles.profileIcon}
        />
      </View>

      {/* Market Snapshot */}
      <Text style={styles.sectionTitle}>Market Snapshot</Text>
      <View style={styles.indexRow}>
        {indexes.map((idx, i) => (
          <View key={i} style={styles.indexCard}>
            <Text style={styles.indexName}>{idx.name}</Text>
            <Text style={styles.indexValue}>{idx.value.toFixed(2)}</Text>
            <Text
              style={{
                color: idx.changePercent >= 0 ? "green" : "red",
                fontWeight: "600",
              }}
            >
              {idx.changePercent.toFixed(2)}%
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.divider} />

      {/* Stock Tabs */}
      <View style={styles.tabContainer}>
        {["gainers", "losers", "active"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab as any)}>
            <Text
              style={[styles.tab, activeTab === tab && styles.activeTab]}
            >
              {tab.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={getStockData()}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.stockRow}>
            <Text style={{ fontWeight: "600" }}>{item.ticker}</Text>
            <Text
              style={{
                color: item.changePercent >= 0 ? "green" : "red",
                fontWeight: "500",
              }}
            >
              {item.price.toFixed(2)} ({item.changePercent.toFixed(2)}%)
            </Text>
          </View>
        )}
      />

      <View style={styles.divider} />

      {/* Spotlight */}
      {spotlight && (
        <>
          <Text style={styles.sectionTitle}>Spotlight</Text>
          <View style={styles.spotlightCard}>
            <Image source={{ uri: spotlight.logoUrl }} style={styles.logo} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                {spotlight.companyName} ({spotlight.ticker})
              </Text>
              <Text numberOfLines={2} style={{ color: "gray" }}>
                {spotlight.description}
              </Text>
            </View>
          </View>
        </>
      )}

      <View style={styles.divider} />

      {/* News */}
      <Text style={styles.sectionTitle}>Latest News</Text>
      <FlatList
        data={news}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => Linking.openURL(item.url)}
            style={styles.newsItem}
          >
            <Text style={styles.headline}>{item.headline}</Text>
            <Text style={styles.newsMeta}>
              {item.source} •{" "}
              {new Date(item.timestamp).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.newsDivider} />}
        ListFooterComponent={
          <TouchableOpacity style={styles.viewMoreBtn}>
            <Text style={styles.viewMoreText}>View More</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  header: { fontSize: 26, fontWeight: "700" },
  profileIcon: { width: 32, height: 32, borderRadius: 16 },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
    color: "#111",
  },
  divider: { height: 1, backgroundColor: "#ddd", marginVertical: 15 },

  indexRow: { flexDirection: "row", justifyContent: "space-around" },
  indexCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    width: "45%",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  indexName: { fontWeight: "bold", fontSize: 14 },
  indexValue: { fontSize: 18, fontWeight: "600", marginVertical: 5 },

  tabContainer: { flexDirection: "row", marginBottom: 10 },
  tab: { marginHorizontal: 10, fontSize: 16, color: "gray" },
  activeTab: {
    fontWeight: "bold",
    color: "#007AFF",
    borderBottomWidth: 2,
    borderBottomColor: "#007AFF",
  },

  stockRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  spotlightCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  logo: { width: 50, height: 50, marginRight: 15 },

  newsItem: { paddingVertical: 10 },
  headline: { color: "#007AFF", fontWeight: "600", fontSize: 15 },
  newsMeta: { fontSize: 12, color: "gray", marginTop: 2 },
  newsDivider: { height: 1, backgroundColor: "#eee" },

  viewMoreBtn: {
    padding: 10,
    backgroundColor: "#e6e6e6",
    borderRadius: 6,
    alignItems: "center",
    marginVertical: 10,
  },
  viewMoreText: { color: "#007AFF", fontWeight: "600" },
});