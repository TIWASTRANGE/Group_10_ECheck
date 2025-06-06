"use client"

import { useState } from "react"
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Header from "../components/Header"

const ChangeEmailScreen = () => {
  const navigation = useNavigation()
  const [emailData, setEmailData] = useState({
    userName: "",
    currentEmail: "",
    newEmail: "",
  })

  const handleSave = async () => {
    // TODO: Implement change email API call
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailData.newEmail)) {
      Alert.alert("Error", "Please enter a valid email address")
      return
    }

    // const response = await changeEmailAPI(emailData);
    // if (response.success) {
    //   Alert.alert('Success', 'Email changed successfully');
    //   navigation.goBack();
    // }

    Alert.alert("Success", "Email changed successfully", [{ text: "OK", onPress: () => navigation.goBack() }])
  }

  const updateEmailData = (field: string, value: string) => {
    setEmailData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <View style={styles.container}>
      <Header title="Change Email" />

      <ScrollView style={styles.content}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="User Name"
            value={emailData.userName}
            onChangeText={(text) => updateEmailData("userName", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Current Email"
            value={emailData.currentEmail}
            onChangeText={(text) => updateEmailData("currentEmail", text)}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="New Email"
            value={emailData.newEmail}
            onChangeText={(text) => updateEmailData("newEmail", text)}
            keyboardType="email-address"
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

export default ChangeEmailScreen
