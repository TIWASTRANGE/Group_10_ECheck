import type React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

interface HeaderProps {
  title: string
  showBackButton?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = true }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    elevation: 2,
  },
  backButton: {
    padding: 8,
    marginRight: 16,
  },
  backText: {
    fontSize: 24,
    color: "#2E7D32",
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
    flex: 1,
    textAlign: "center",
    marginRight: 40, // Compensate for back button
  },
})

export default Header
