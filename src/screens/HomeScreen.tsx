"use client"

import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import BottomNavigation from "../components/BottomNavigation"

const HomeScreen = () => {
  const navigation = useNavigation()
  const [currentReading, setCurrentReading] = useState("000000")
  const [userName, setUserName] = useState("Maryam")

  useEffect(() => {
    // TODO: Fetch user data and current readings from API
    // fetchUserData();
    // fetchCurrentReadings();
  }, [])

  const handleReportOutage = () => {
    navigation.navigate("ReportOutage" as never)
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>

        {/* Current Reading Card */}
        <View style={styles.readingCard}>
          <Text style={styles.readingLabel}>Current Reading</Text>
          <Text style={styles.readingValue}>{currentReading}</Text>
          <Text style={styles.readingUnit}>kWh</Text>

          {/* TODO: Replace with actual chart component */}
          <View style={styles.chartPlaceholder}>
            <Text style={styles.chartText}>📊 Usage Chart</Text>
          </View>

          <Text style={styles.daysText}>days</Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.reportButton} onPress={handleReportOutage}>
            <Text style={styles.reportButtonText}>⚠️ Report Outage</Text>
          </TouchableOpacity>
        </View>

        {/* Location Info */}
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>📍 Dirty south</Text>
        </View>
      </ScrollView>

      <BottomNavigation activeTab="Home" />
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
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 16,
    color: "#757575",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  readingCard: {
    backgroundColor: "#F5F5F5",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 2,
  },
  readingLabel: {
    fontSize: 16,
    color: "#757575",
    marginBottom: 8,
  },
  readingValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "center",
  },
  readingUnit: {
    fontSize: 16,
    color: "#757575",
    textAlign: "center",
    marginBottom: 20,
  },
  chartPlaceholder: {
    height: 100,
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  chartText: {
    color: "#757575",
  },
  daysText: {
    textAlign: "center",
    color: "#757575",
  },
  actionsContainer: {
    marginBottom: 20,
  },
  reportButton: {
    backgroundColor: "#F44336",
    paddingVertical: 15,
    borderRadius: 8,
  },
  reportButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  infoCard: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#212121",
  },
})

export default HomeScreen
