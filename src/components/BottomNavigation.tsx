import type React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { StackNavigationProp } from "@react-navigation/stack"
import Icon from "react-native-vector-icons/FontAwesome"
import type { RootStackParamList } from "../types/navigation"

interface BottomNavigationProps {
  activeTab?: string
}

type BottomNavigationProp = StackNavigationProp<RootStackParamList>

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab }) => {
  const navigation = useNavigation<BottomNavigationProp>()

  const tabs = [
    { name: "Home", icon: "home", route: "Home" },
    { name: "History", icon: "history", route: "ComplaintHistory" },
    { name: "Help", icon: "question-circle", route: "Help" },
    { name: "Profile", icon: "user", route: "Profile" },
  ] as const

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity key={tab.name} style={styles.tab} onPress={() => navigation.navigate(tab.route as any)}>
          <Icon name={tab.icon} size={22} color={activeTab === tab.name ? "#2E7D32" : "#757575"} />
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
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
  },
})

export default BottomNavigation
