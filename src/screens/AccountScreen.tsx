"use client"

import { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Header from "../components/Header"

const AccountScreen = () => {
  const navigation = useNavigation()
  const [accountData, setAccountData] = useState({
    fullName: "Maryam Saeed Muhammad",
    phoneNumber: "07063535621",
    contactEmail: "saeedmuhdmaryam@gmail.com",
    password: "........",
  })

  useEffect(() => {
    // TODO: Fetch user account data from API
    // fetchAccountData();
  }, [])

  const handleSave = async () => {
    // TODO: Implement save account data API call
    // const response = await updateAccountAPI(accountData);
    // if (response.success) {
    //   Alert.alert('Success', 'Account updated successfully');
    // }
    console.log("Saving account data:", accountData)
  }

  const updateAccountData = (field: string, value: string) => {
    setAccountData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <View style={styles.container}>
      <Header title="My Account" />

      <ScrollView style={styles.content}>
        <View style={styles.profileHeader}>
          <Text style={styles.profileName}>Maryam saeed</Text>
          <Text style={styles.profileEmail}>saeedmuhdmaryam@gmail.com</Text>
          <Text style={styles.profilePhone}>0996 2102 7825</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={accountData.fullName}
            onChangeText={(text) => updateAccountData("fullName", text)}
          />

          <Text style={styles.label}>Phone number</Text>
          <TextInput
            style={styles.input}
            value={accountData.phoneNumber}
            onChangeText={(text) => updateAccountData("phoneNumber", text)}
            keyboardType="phone-pad"
          />

          <View style={styles.emailSection}>
            <Text style={styles.emailLabel}>Contact Email</Text>
            <Text style={styles.emailDescription}>Manage your account email address for the invoice</Text>
            <TextInput
              style={styles.input}
              value={accountData.contactEmail}
              onChangeText={(text) => updateAccountData("contactEmail", text)}
              keyboardType="email-address"
            />
            <TouchableOpacity style={styles.addEmailButton}>
              <Text style={styles.addEmailText}>Add another email</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.passwordSection}>
            <Text style={styles.passwordLabel}>Password</Text>
            <TextInput style={styles.input} value={accountData.password} secureTextEntry editable={false} />
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
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
  },
  profileHeader: {
    padding: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  profileName: {
    fontSize: 20,
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
  formContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#212121",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  emailSection: {
    marginBottom: 20,
  },
  emailLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#212121",
    marginBottom: 4,
  },
  emailDescription: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 10,
  },
  addEmailButton: {
    alignSelf: "flex-start",
  },
  addEmailText: {
    color: "#2E7D32",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  passwordSection: {
    marginBottom: 20,
  },
  passwordLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#212121",
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "#2E7D32",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
})

export default AccountScreen
