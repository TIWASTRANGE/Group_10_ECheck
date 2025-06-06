"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { StackNavigationProp } from "@react-navigation/stack"
import Header from "../components/Header"
import Icon from "react-native-vector-icons/FontAwesome"
import type { RootStackParamList } from "../types/navigation"

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, "Register">

const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>()
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    contractNumber: "",
    password: "",
    confirmPassword: "",
  })

  const handleRegister = async () => {
    // TODO: Implement registration API call
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    // const response = await registerAPI(formData);
    // if (response.success) {
    //   navigation.navigate('OTP', { phoneNumber: formData.phoneNumber });
    // }

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
          <View style={styles.inputContainer}>
            <Icon name="user" size={18} color="#757575" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={formData.fullName}
              onChangeText={(text) => updateFormData("fullName", text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="phone" size={18} color="#757575" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChangeText={(text) => updateFormData("phoneNumber", text)}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="envelope" size={18} color="#757575" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              value={formData.email}
              onChangeText={(text) => updateFormData("email", text)}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="file-text" size={18} color="#757575" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Contract Number"
              value={formData.contractNumber}
              onChangeText={(text) => updateFormData("contractNumber", text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={18} color="#757575" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              value={formData.password}
              onChangeText={(text) => updateFormData("password", text)}
              secureTextEntry
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={18} color="#757575" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChangeText={(text) => updateFormData("confirmPassword", text)}
              secureTextEntry
            />
          </View>

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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
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
function alert(arg0: string) {
  throw new Error("Function not implemented.")
}

