"use client"

import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import BottomNavigation from "../components/BottomNavigation"
import Icon from "react-native-vector-icons/FontAwesome"

interface ReadingData {
  id: string
  date: string
  currentReading: number
  previousReading: number
  usage: number
  month: string
}

const HomeScreen = () => {
  const navigation = useNavigation()
  const [currentReading, setCurrentReading] = useState("000000")
  const [userName, setUserName] = useState("Maryam")
  const [monthlyUsage, setMonthlyUsage] = useState<ReadingData[]>([])
  const [totalUsage, setTotalUsage] = useState(0)
  const [averageUsage, setAverageUsage] = useState(0)

  useEffect(() => {
    // TODO: Fetch user data and current readings from API
    // fetchUserData();
    // fetchCurrentReadings();

    // Mock data for demonstration
    const mockReadings: ReadingData[] = [
      { id: "1", date: "2024-01-15", currentReading: 1200, previousReading: 1080, usage: 120, month: "Jan" },
      { id: "2", date: "2024-02-15", currentReading: 1335, previousReading: 1200, usage: 135, month: "Feb" },
      { id: "3", date: "2024-03-15", currentReading: 1433, previousReading: 1335, usage: 98, month: "Mar" },
      { id: "4", date: "2024-04-15", currentReading: 1543, previousReading: 1433, usage: 110, month: "Apr" },
      { id: "5", date: "2024-05-15", currentReading: 1668, previousReading: 1543, usage: 125, month: "May" },
      { id: "6", date: "2024-06-15", currentReading: 1758, previousReading: 1668, usage: 90, month: "Jun" },
    ]

    setMonthlyUsage(mockReadings)
    setCurrentReading(mockReadings[mockReadings.length - 1]?.currentReading.toString() || "000000")

    // Calculate totals
    const total = mockReadings.reduce((sum, reading) => sum + reading.usage, 0)
    setTotalUsage(total)
    setAverageUsage(Math.round(total / mockReadings.length))
  }, [])

  const handleReportOutage = () => {
    navigation.navigate("ReportOutage" as never)
  }

  const handleSubmitReading = () => {
    navigation.navigate("SubmitReading" as never)
  }

  const getMaxUsage = () => {
    return Math.max(...monthlyUsage.map((reading) => reading.usage))
  }

  const renderUsageChart = () => {
    const maxUsage = getMaxUsage()
    const chartWidth = Dimensions.get("window").width - 80
    const barWidth = (chartWidth - (monthlyUsage.length - 1) * 8) / monthlyUsage.length

    return (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Monthly Usage (kWh)</Text>
        <View style={styles.chart}>
          {monthlyUsage.map((reading, index) => {
            const barHeight = (reading.usage / maxUsage) * 100
            const barColor = reading.usage <= 100 ? "#4CAF50" : reading.usage <= 120 ? "#FF9800" : "#F44336"

            return (
              <View key={reading.id} style={styles.barContainer}>
                <View style={styles.barWrapper}>
                  <View
                    style={[
                      styles.bar,
                      {
                        height: barHeight,
                        backgroundColor: barColor,
                        width: barWidth,
                      },
                    ]}
                  />
                </View>
                <Text style={styles.barValue}>{reading.usage}</Text>
                <Text style={styles.barLabel}>{reading.month}</Text>
              </View>
            )
          })}
        </View>
        <View style={styles.chartLegend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: "#4CAF50" }]} />
            <Text style={styles.legendText}>Low (≤100)</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: "#FF9800" }]} />
            <Text style={styles.legendText}>Medium (101-120)</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: "#F44336" }]} />
            <Text style={styles.legendText}>High ({">"}120)</Text>
          </View>
        </View>
      </View>
    )
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

          {/* Usage Chart */}
          {monthlyUsage.length > 0 && renderUsageChart()}

          {/* Usage Statistics */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Icon name="flash" size={16} color="#2E7D32" />
              <Text style={styles.statLabel}>Total Usage</Text>
              <Text style={styles.statValue}>{totalUsage} kWh</Text>
            </View>
            <View style={styles.statItem}>
              <Icon name="bar-chart" size={16} color="#FF9800" />
              <Text style={styles.statLabel}>Average</Text>
              <Text style={styles.statValue}>{averageUsage} kWh</Text>
            </View>
            <View style={styles.statItem}>
              <Icon name="calendar" size={16} color="#4CAF50" />
              <Text style={styles.statLabel}>This Month</Text>
              <Text style={styles.statValue}>{monthlyUsage[monthlyUsage.length - 1]?.usage || 0} kWh</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmitReading}>
            <Icon name="plus" size={18} color="#FFFFFF" style={styles.buttonIcon} />
            <Text style={styles.submitButtonText}>Submit Reading</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.reportButton} onPress={handleReportOutage}>
            <Icon name="warning" size={18} color="#FFFFFF" style={styles.buttonIcon} />
            <Text style={styles.reportButtonText}>Report Outage</Text>
          </TouchableOpacity>
        </View>

        {/* Location Info */}
        <View style={styles.infoCard}>
          <Icon name="map-marker" size={18} color="#2E7D32" style={styles.infoIcon} />
          <Text style={styles.infoText}>Dirty south</Text>
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
  chartContainer: {
    marginVertical: 20,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121",
    textAlign: "center",
    marginBottom: 15,
  },
  chart: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 120,
    marginBottom: 10,
  },
  barContainer: {
    alignItems: "center",
    flex: 1,
  },
  barWrapper: {
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bar: {
    borderRadius: 4,
    minHeight: 10,
  },
  barValue: {
    fontSize: 10,
    color: "#212121",
    fontWeight: "bold",
    marginTop: 4,
  },
  barLabel: {
    fontSize: 10,
    color: "#757575",
    marginTop: 2,
  },
  chartLegend: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 2,
    marginRight: 4,
  },
  legendText: {
    fontSize: 10,
    color: "#757575",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    color: "#757575",
    marginTop: 4,
  },
  statValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#212121",
    marginTop: 2,
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#2E7D32",
    paddingVertical: 15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  reportButton: {
    backgroundColor: "#F44336",
    paddingVertical: 15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonIcon: {
    marginRight: 8,
  },
  reportButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoCard: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  infoIcon: {
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#212121",
  },
})

export default HomeScreen
