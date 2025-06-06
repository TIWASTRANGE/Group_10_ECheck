"use client"

import { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import Header from "../components/Header"

// Inline navigation stack type
type NavigationProp = NativeStackNavigationProp<
  {
    Register: undefined
    OTP: { phoneNumber: string }
    Home: undefined
  },
  "Register"
>

const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    contractNumber: "",
    password: "",
    confirmPassword: "",
  })

  const handleRegister = async () => {
    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Error", "Passwords do not match")
      return
    }

    // TODO: Implement registration API call
    navigation.navigate("OTP", { phoneNumber: formData.phoneNumber })
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <View style={styles.container}>
      <Header title="Registration" />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Create New Account</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={formData.fullName}
            onChangeText={(text) => updateFormData("fullName", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChangeText={(text) => updateFormData("phoneNumber", text)}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={formData.email}
            onChangeText={(text) => updateFormData("email", text)}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Contract Number"
            value={formData.contractNumber}
            onChangeText={(text) => updateFormData("contractNumber", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={formData.password}
            onChangeText={(text) => updateFormData("password", text)}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChangeText={(text) => updateFormData("confirmPassword", text)}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Create New Account</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "center",
    marginVertical: 20,
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

export default RegisterScreen
