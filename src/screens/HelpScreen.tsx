"use client"

import { useState, useEffect } from "react"
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import Header from "../components/Header"
import BottomNavigation from "../components/BottomNavigation"
import Icon from "react-native-vector-icons/FontAwesome"

interface HelpItem {
  id: string
  question: string
  answer: string
  category: string
}

const HelpScreen = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [helpItems, setHelpItems] = useState<HelpItem[]>([])
  const [filteredItems, setFilteredItems] = useState<HelpItem[]>([])
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  useEffect(() => {
    // TODO: Fetch help data from API
    // fetchHelpData();

    const mockHelpItems = [
      {
        id: "1",
        question: "How to report outage?",
        answer:
          'To report an outage, go to the Home screen and tap on "Report Outage" button. Fill in the required details including location, time, and description of the outage.',
        category: "Outage",
      },
      {
        id: "2",
        question: "How to check my electricity consumption?",
        answer:
          "You can check your electricity consumption by going to the Readings section from the bottom navigation. This will show your monthly usage history.",
        category: "Readings",
      },
      {
        id: "3",
        question: "How to update my profile information?",
        answer:
          "Go to Profile section, then tap on Account to update your personal information including name, phone number, and email address.",
        category: "Account",
      },
    ]

    setHelpItems(mockHelpItems)
    setFilteredItems(mockHelpItems)
  }, [])

  useEffect(() => {
    const filtered = helpItems.filter(
      (item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredItems(filtered)
  }, [searchQuery, helpItems])

  const toggleExpanded = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId)
  }

  const renderHelpItem = ({ item }: { item: HelpItem }) => (
    <TouchableOpacity onPress={() => toggleExpanded(item.id)}>
      <View style={styles.helpCard}>
        <View style={styles.questionRow}>
          <Icon name="question-circle" size={18} color="#2E7D32" style={styles.questionIcon} />
          <Text style={styles.questionText}>{item.question}</Text>
          <Icon name={expandedItem === item.id ? "chevron-up" : "chevron-down"} size={16} color="#2E7D32" />
        </View>

        {expandedItem === item.id && (
          <View style={styles.answerContainer}>
            <Text style={styles.answerText}>{item.answer}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Header title="Help" showBackButton={false} />

      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={16} color="#757575" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search help topics..."
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>

        <FlatList
          data={filteredItems}
          renderItem={renderHelpItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>

      <BottomNavigation activeTab="Help" />
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
  helpCard: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
  },
  questionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionIcon: {
    marginRight: 10,
  },
  questionText: {
    fontSize: 16,
    color: "#212121",
    fontWeight: "500",
    flex: 1,
  },
  answerContainer: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  answerText: {
    fontSize: 14,
    color: "#757575",
    lineHeight: 20,
  },
})

export default HelpScreen
