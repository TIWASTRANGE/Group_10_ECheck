"use client"

import { useState, useEffect } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import Header from "../components/Header"
import BottomNavigation from "../components/BottomNavigation"

interface Reading {
  id: string
  month: string
  kwh: string
}

const ReadingsScreen = () => {
  const [readings, setReadings] = useState<Reading[]>([])

  useEffect(() => {
    // TODO: Fetch readings data from API
    // fetchReadingsData();

    // Mock data for now
    setReadings([
      { id: "1", month: "November", kwh: "120" },
      { id: "2", month: "December", kwh: "135" },
      { id: "3", month: "January", kwh: "98" },
      { id: "4", month: "February", kwh: "110" },
    ])
  }, [])

  const renderReadingItem = ({ item }: { item: Reading }) => (
    <View style={styles.readingCard}>
      <View style={styles.readingRow}>
        <Text style={styles.monthText}>{item.month}</Text>
        <Text style={styles.kwhText}>{item.kwh} kWh</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <Header title="Readings" />

      <View style={styles.content}>
        <Text style={styles.title}>Your readings</Text>

        <FlatList
          data={readings}
          renderItem={renderReadingItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>

      <BottomNavigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  readingCard: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  readingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  monthText: {
    fontSize: 16,
    color: "#212121",
    fontWeight: "500",
  },
  kwhText: {
    fontSize: 16,
    color: "#2E7D32",
    fontWeight: "bold",
  },
})

export default ReadingsScreen
