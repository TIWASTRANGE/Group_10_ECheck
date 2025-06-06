"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { StackNavigationProp } from "@react-navigation/stack"
import Icon from "react-native-vector-icons/FontAwesome"
import type { RootStackParamList } from "../types/navigation"

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    // TODO: Implement login API call
    // const response = await loginAPI(email, password);
    // if (response.success) {
    //   navigation.navigate('Home');
    // }

    // For now, navigate directly to Home
    navigation.navigate("Home")
  }

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login
    console.log(`Login with ${provider}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ECheck</Text>

        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
            <Text style={styles.primaryButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate("Register")}>
            <Text style={styles.secondaryButtonText}>Create New Account</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>Or Login With</Text>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialLogin("Google")}>
              <Icon name="google" size={20} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialLogin("Facebook")}>
              <Icon name="facebook" size={20} color="#4267B2" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "center",
    marginBottom: 40,
  },
  formContainer: {
    width: "100%",
  },
  primaryButton: {
    backgroundColor: "#2E7D32",
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: "#2E7D32",
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  secondaryButtonText: {
    color: "#2E7D32",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  orText: {
    textAlign: "center",
    color: "#757575",
    marginVertical: 20,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
})

export default LoginScreen
