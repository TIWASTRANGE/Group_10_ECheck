"use client"

import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Header from "../components/Header"

const AccountSecurityScreen = () => {
  const navigation = useNavigation()
  const [securitySettings, setSecuritySettings] = useState({
    savePassword: false,
  })
  const [userProfile, setUserProfile] = useState({
    fullName: "Maryam Saeed Muhammad",
    phoneNumber: "07063535621",
    emailAddress: "saeedmuhdmaryamg@email.com",
    password: "........",
  })

  useEffect(() => {
    // TODO: Fetch security settings from API
    // fetchSecuritySettings();
  }, [])

  const handleToggleSavePassword = (value: boolean) => {
    setSecuritySettings((prev) => ({ ...prev, savePassword: value }))
    // TODO: Update security settings via API
    // updateSecuritySettingsAPI({savePassword: value});
  }

  const handleSavePassword = async () => {
    // TODO: Implement save password functionality
    // const response = await savePasswordAPI();
    console.log("Save password settings updated")
  }

  const handleLogout = () => {
    // TODO: Implement logout functionality
    // clearUserSession();
    navigation.navigate("Welcome" as never)
  }

  return (
    <View style={styles.container}>
      <Header title="Account Security" />

      <ScrollView style={styles.content}>
        {/* User Profile Section */}
        <View style={styles.profileCard}>
          <Text style={styles.profileName}>{userProfile.fullName}</Text>
          <Text style={styles.profileEmail}>{userProfile.emailAddress}</Text>
          <Text style={styles.profilePhone}>{userProfile.phoneNumber}</Text>
        </View>

        {/* Account Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Full Name</Text>
            <Text style={styles.detailValue}>{userProfile.fullName}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Phone number</Text>
            <Text style={styles.detailValue}>{userProfile.phoneNumber}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Email Address</Text>
            <Text style={styles.detailValue}>{userProfile.emailAddress}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Password</Text>
            <Text style={styles.detailValue}>{userProfile.password}</Text>
          </View>
        </View>

        {/* Security Settings */}
        <View style={styles.securityCard}>
          <View style={styles.securityRow}>
            <View style={styles.securityTextContainer}>
              <Text style={styles.securityTitle}>Save password</Text>
              <Text style={styles.securityDescription}>Save password or always input password while login</Text>
            </View>
            <Switch
              value={securitySettings.savePassword}
              onValueChange={handleToggleSavePassword}
              trackColor={{ false: "#E0E0E0", true: "#4CAF50" }}
              thumbColor={securitySettings.savePassword ? "#2E7D32" : "#757575"}
            />
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSavePassword}>
            <Text style={styles.saveButtonText}>Save password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 2,
  },
  profilePhone: {
    fontSize: 14,
    color: "#757575",
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  detailLabel: {
    fontSize: 16,
    color: "#757575",
    flex: 1,
  },
  detailValue: {
    fontSize: 16,
    color: "#212121",
    flex: 1,
    textAlign: "right",
  },
  securityCard: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 2,
  },
  securityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  securityTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  securityTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#212121",
    marginBottom: 4,
  },
  securityDescription: {
    fontSize: 14,
    color: "#757575",
    lineHeight: 20,
  },
  buttonContainer: {
    gap: 12,
  },
  saveButton: {
    backgroundColor: "#2E7D32",
    paddingVertical: 15,
    borderRadius: 8,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "#F44336",
    paddingVertical: 15,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
})

export default AccountSecurityScreen
