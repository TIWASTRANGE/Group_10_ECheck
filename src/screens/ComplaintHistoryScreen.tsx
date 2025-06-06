"use client"

import { useState, useEffect } from "react"
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native"
import Header from "../components/Header"
import BottomNavigation from "../components/BottomNavigation"

interface Complaint {
  id: string
  complaintId: string
  description: string
  status: "Active" | "Resolved" | "Pending"
  date: string
}

const ComplaintHistoryScreen = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredComplaints, setFilteredComplaints] = useState<Complaint[]>([])

  useEffect(() => {
    // TODO: Fetch complaints data from API
    // fetchComplaintsData();

    const mockComplaints = [
      {
        id: "1",
        complaintId: "KXXXXXXXXX",
        description: "Fluctuation in voltage.",
        status: "Active" as const,
        date: "22-07-2022",
      },
      {
        id: "2",
        complaintId: "3000000",
        description: "Power outage in residential area.",
        status: "Resolved" as const,
        date: "20-07-2022",
      },
    ]

    setComplaints(mockComplaints)
    setFilteredComplaints(mockComplaints)
  }, [])

  useEffect(() => {
    const filtered = complaints.filter(
      (complaint) =>
        complaint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        complaint.complaintId.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredComplaints(filtered)
  }, [searchQuery, complaints])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "#FF9800"
      case "Resolved":
        return "#4CAF50"
      case "Pending":
        return "#F44336"
      default:
        return "#757575"
    }
  }

  const renderComplaintItem = ({ item }: { item: Complaint }) => (
    <View style={styles.complaintCard}>
      <View style={styles.complaintHeader}>
        <Text style={styles.complaintId}>Complaint id</Text>
        <View style={[styles.statusChip, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <Text style={styles.complaintIdValue}>{item.complaintId}</Text>

      <View style={styles.complaintDetails}>
        <Text style={styles.descriptionLabel}>Description</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>

      <View style={styles.complaintFooter}>
        <Text style={styles.dateLabel}>Date</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <Header title="History" />

      <View style={styles.content}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search complaints..."
          onChangeText={setSearchQuery}
          value={searchQuery}
        />

        <FlatList
          data={filteredComplaints}
          renderItem={renderComplaintItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>

      <BottomNavigation activeTab="History" />
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
  searchBar: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  complaintCard: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  complaintHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  complaintId: {
    fontSize: 14,
    color: "#757575",
  },
  statusChip: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  complaintIdValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 12,
  },
  complaintDetails: {
    marginBottom: 12,
  },
  descriptionLabel: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: "#212121",
  },
  complaintFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateLabel: {
    fontSize: 14,
    color: "#757575",
  },
  dateText: {
    fontSize: 14,
    color: "#212121",
  },
})

export default ComplaintHistoryScreen
