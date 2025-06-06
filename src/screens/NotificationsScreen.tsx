"use client"

import { useState, useEffect } from "react"
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native"
import Header from "../components/Header"
import BottomNavigation from "../components/BottomNavigation"
import Icon from "react-native-vector-icons/FontAwesome"

interface Notification {
  id: string
  type: "power_cut" | "bill" | "general"
  description: string
  date: string
  invoiceNumber?: string
  billDate?: string
  dueDate?: string
  billedAmount?: string
  billStatus?: string
}

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredNotifications, setFilteredNotifications] = useState<Notification[]>([])

  useEffect(() => {
    // TODO: Fetch notifications data from API
    // fetchNotificationsData();

    const mockNotifications = [
      {
        id: "1",
        type: "power_cut" as const,
        description: "Notice of power cut.",
        date: "22-07-2022",
      },
      {
        id: "2",
        type: "bill" as const,
        description: "Monthly electricity bill",
        date: "05-09-2022",
        invoiceNumber: "XXXXOOK",
        billDate: "05-09-2022",
        dueDate: "22-09-2022",
        billedAmount: "892",
        billStatus: "Settled",
      },
    ]

    setNotifications(mockNotifications)
    setFilteredNotifications(mockNotifications)
  }, [])

  useEffect(() => {
    const filtered = notifications.filter((notification) =>
      notification.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredNotifications(filtered)
  }, [searchQuery, notifications])

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "power_cut":
        return "bolt"
      case "bill":
        return "file-text-o"
      default:
        return "bell"
    }
  }

  const renderNotificationItem = ({ item }: { item: Notification }) => (
    <View style={styles.notificationCard}>
      <View style={styles.notificationHeader}>
        <Icon name={getNotificationIcon(item.type)} size={20} color="#2E7D32" style={styles.iconText} />
        <Text style={styles.dateText}>{item.date}</Text>
      </View>

      <Text style={styles.descriptionText}>{item.description}</Text>

      {item.type === "bill" && (
        <View style={styles.billDetails}>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Invoice Number</Text>
            <Text style={styles.billValue}>{item.invoiceNumber}</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Bill Date</Text>
            <Text style={styles.billValue}>{item.billDate}</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Due Date</Text>
            <Text style={styles.billValue}>{item.dueDate}</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Billed Amount</Text>
            <Text style={styles.billValue}>{item.billedAmount} FCFA</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>Bill Status</Text>
            <Text style={[styles.billValue, styles.settledStatus]}>{item.billStatus}</Text>
          </View>
        </View>
      )}
    </View>
  )

  return (
    <View style={styles.container}>
      <Header title="Notification" showNotification={false} />

      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={16} color="#757575" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search notifications..."
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>

        <FlatList
          data={filteredNotifications}
          renderItem={renderNotificationItem}
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  notificationCard: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  notificationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  iconText: {
    marginRight: 8,
  },
  dateText: {
    fontSize: 14,
    color: "#757575",
  },
  descriptionText: {
    fontSize: 16,
    color: "#212121",
    marginBottom: 8,
  },
  billDetails: {
    backgroundColor: "#E0E0E0",
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  billRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  billLabel: {
    fontSize: 14,
    color: "#757575",
  },
  billValue: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "500",
  },
  settledStatus: {
    color: "#4CAF50",
  },
})

export default NotificationsScreen
