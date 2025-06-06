"use client"

import { useState, useEffect } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Header from "../components/Header"
import BottomNavigation from "../components/BottomNavigation"
import Icon from "react-native-vector-icons/FontAwesome"

const ProfileScreen = () => {
  const navigation = useNavigation()
  const [userProfile, setUserProfile] = useState({
    name: "Maryam saeed",
    phone: "0095 2102 7131",
    email: "saeedmuhdmaryam@gmail.com",
  })

  useEffect(() => {
    // TODO: Fetch user profile data from API
    // fetchUserProfile();
  }, [])

  const profileOptions = [
    {
      id: "account",
      title: "Account",
      icon: "user",
      onPress: () => navigation.navigate("Account" as never),
    },
    {
      id: "change-email",
      title: "Change Email Address",
      icon: "envelope",
      onPress: () => navigation.navigate("ChangeEmail" as never),
    },
    {
      id: "change-password",
      title: "Change Password",
      icon: "lock",
      onPress: () => navigation.navigate("ChangePassword" as never),
    },
    {
      id: "more-settings",
      title: "More Settings",
      icon: "cog",
      onPress: () => console.log("More Settings"),
    },
    {
      id: "account-security",
      title: "Account Security",
      icon: "shield",
      onPress: () => navigation.navigate("AccountSecurity" as never),
    },
    {
      id: "customer-support",
      title: "Customer Support",
      icon: "headphones",
      onPress: () => console.log("Customer Support"),
    },
  ]

  const handleLogout = () => {
    // TODO: Implement logout functionality
    // clearUserSession();
    navigation.navigate("Welcome" as never)
  }

  const renderProfileOption = (option: any) => (
    <TouchableOpacity key={option.id} onPress={option.onPress}>
      <View style={styles.optionCard}>
        <View style={styles.optionRow}>
          <View style={styles.optionLeft}>
            <Icon name={option.icon} size={20} color="#2E7D32" style={styles.optionIcon} />
            <Text style={styles.optionText}>{option.title}</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#757575" />
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Header title="Profile" showBackButton={false} />

      <ScrollView style={styles.content}>
        {/* Profile Header */}
        <View style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>MS</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{userProfile.name}</Text>
              <Text style={styles.profilePhone}>{userProfile.phone}</Text>
              <Text style={styles.profileEmail}>{userProfile.email}</Text>
            </View>
          </View>

          {/* QR Code Section */}
          <View style={styles.qrSection}>
            <TouchableOpacity style={styles.qrButton}>
              <Icon name="qrcode" size={16} color="#2E7D32" style={styles.qrIcon} />
              <Text style={styles.qrButtonText}>Soon QR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.qrButton}>
              <Icon name="qrcode" size={16} color="#2E7D32" style={styles.qrIcon} />
              <Text style={styles.qrButtonText}>My QR</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Options */}
        <View style={styles.optionsContainer}>{profileOptions.map(renderProfileOption)}</View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Icon name="sign-out" size={18} color="#FFFFFF" style={styles.logoutIcon} />
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNavigation activeTab="Profile" />
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
  profileCard: {
    backgroundColor: "#F5F5F5",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 4,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2E7D32",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 4,
  },
  profilePhone: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 2,
  },
  profileEmail: {
    fontSize: 14,
    color: "#757575",
  },
  qrSection: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  qrButton: {
    backgroundColor: "#E0E0E0",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  qrIcon: {
    marginRight: 6,
  },
  qrButtonText: {
    color: "#2E7D32",
    fontWeight: "500",
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionCard: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionIcon: {
    marginRight: 12,
  },
  optionText: {
    fontSize: 16,
    color: "#212121",
  },
  logoutButton: {
    backgroundColor: "#F44336",
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutIcon: {
    marginRight: 8,
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default ProfileScreen
