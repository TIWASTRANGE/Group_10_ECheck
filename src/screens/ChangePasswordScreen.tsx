"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Header from "../components/Header"

const ChangePasswordScreen = () => {
  const navigation = useNavigation()
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleSave = async () => {
    // TODO: Implement change password API call
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      Alert.alert("Error", "New passwords do not match")
      return
    }

    if (passwordData.newPassword.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long")
      return
    }

    // const response = await changePasswordAPI(passwordData);
    // if (response.success) {
    //   Alert.alert('Success', 'Password changed successfully');
    //   navigation.goBack();
    // }

    Alert.alert("Success", "Password changed successfully", [{ text: "OK", onPress: () => navigation.goBack() }])
  }

  const updatePasswordData = (field: string, value: string) => {
    setPasswordData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <View style={styles.container}>
      <Header title="Change Password" />

      <ScrollView style={styles.content}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Current Password"
            value={passwordData.currentPassword}
            onChangeText={(text) => updatePasswordData("currentPassword", text)}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="New Password"
            value={passwordData.newPassword}
            onChangeText={(text) => updatePasswordData("newPassword", text)}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={passwordData.confirmPassword}
            onChangeText={(text) => updatePasswordData("confirmPassword", text)}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
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
  formContainer: {
    padding: 20,
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
  button: {
    backgroundColor: "#2E7D32",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
})

export default ChangePasswordScreen
