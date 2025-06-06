import type React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { StackNavigationProp } from "@react-navigation/stack"
import Icon from "react-native-vector-icons/FontAwesome"
import type { RootStackParamList } from "../types/navigation"

interface HeaderProps {
  title: string
  showBackButton?: boolean
  showNotification?: boolean
}

type HeaderNavigationProp = StackNavigationProp<RootStackParamList>

const Header: React.FC<HeaderProps> = ({ title, showBackButton = true, showNotification = true }) => {
  const navigation = useNavigation<HeaderNavigationProp>()

  const handleNotificationPress = () => {
    navigation.navigate("Notifications")
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        {showBackButton && (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-left" size={20} color="#2E7D32" />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.rightSection}>
        {showNotification && (
          <TouchableOpacity onPress={handleNotificationPress} style={styles.notificationButton}>
            <Icon name="bell" size={20} color="#2E7D32" />
          </TouchableOpacity>
        )}
      </View>
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
  leftSection: {
    width: 40,
    alignItems: "flex-start",
  },
  backButton: {
    padding: 8,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "center",
  },
  rightSection: {
    width: 40,
    alignItems: "flex-end",
  },
  notificationButton: {
    padding: 8,
  },
})

export default Header
