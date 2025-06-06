import type React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

interface BottomNavigationProps {
  activeTab?: string
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab }) => {
  const navigation = useNavigation()

  const tabs = [
    { name: "Home", route: "Home" },
    { name: "History", route: "ComplaintHistory" },
    { name: "Help", route: "Help" },
    { name: "Profile", route: "Profile" },
  ]

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity key={tab.name} style={styles.tab} onPress={() => navigation.navigate(tab.route as never)}>
          <Text style={[styles.tabText, { color: activeTab === tab.name ? "#2E7D32" : "#757575" }]}>{tab.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    elevation: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
})

export default BottomNavigation
