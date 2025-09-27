import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";

export default function NewsList({ news }: { news: any[] }) {
  // start by showing first 3 news items
  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewMore = () => {
    // show 3 more each click, up to the full list length
    setVisibleCount((prev) => Math.min(prev + 3, news.length));
  };

  return (
    <FlatList
      data={news.slice(0, visibleCount)}  
      keyExtractor={(item, i) => i.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
          <Text style={styles.headline}>
            {item.headline} - {item.source}
          </Text>
          <Text style={styles.timestamp}>
            {new Date(item.timestamp).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </TouchableOpacity>
      )}
      ListFooterComponent={
        visibleCount < news.length ? (   
          <TouchableOpacity style={styles.viewMoreBtn} onPress={handleViewMore}>
            <Text style={styles.viewMoreText}>View More</Text>
          </TouchableOpacity>
        ) : null
      }
    />
  );
}

const styles = StyleSheet.create({
  headline: { color: "blue", marginVertical: 4 },
  timestamp: { fontSize: 12, color: "gray", marginBottom: 10 },
  viewMoreBtn: {
    marginTop: 10,
    padding: 8,
    backgroundColor: "#eee",
    borderRadius: 6,
    alignItems: "center",
  },
  viewMoreText: { color: "blue", fontWeight: "600" },
});