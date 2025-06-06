"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation, useRoute, type RouteProp } from "@react-navigation/native"
import Header from "../components/Header"

// Add type definition for route params
type RootStackParamList = {
  OTP: { phoneNumber: string }
}

type OTPScreenRouteProp = RouteProp<RootStackParamList, "OTP">

const OTPScreen = () => {
  const navigation = useNavigation()
  const route = useRoute<OTPScreenRouteProp>()
  const [otp, setOtp] = useState("")

  // Now phoneNumber will be properly typed
  const phoneNumber = route.params?.phoneNumber || ""

  const handleVerifyOTP = async () => {
    // TODO: Implement OTP verification API call
    // const response = await verifyOTPAPI(phoneNumber, otp);
    // if (response.success) {
    //   navigation.navigate('Home');
    // }

    navigation.navigate("Home" as never)
  }

  const handleResendOTP = async () => {
    // TODO: Implement resend OTP API call
    console.log("Resending OTP to:", phoneNumber)
  }

  return (
    <View style={styles.container}>
      <Header title="OTP Verification" />

      <View style={styles.content}>
        {/* TODO: Add actual person illustration */}
        <View style={styles.illustrationContainer}>
          <Text style={styles.illustrationText}>👤</Text>
        </View>

        <Text style={styles.title}>Enter the verification code</Text>
        <Text style={styles.subtitle}>Code sent to {phoneNumber}</Text>

        <TextInput
          style={styles.input}
          placeholder="Verification Code"
          value={otp}
          onChangeText={setOtp}
          keyboardType="numeric"
          maxLength={6}
        />

        <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
          <Text style={styles.buttonText}>VERIFY</Text>
        </TouchableOpacity>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't get the code yet? </Text>
          <TouchableOpacity onPress={handleResendOTP}>
            <Text style={styles.resendLink}>Re-send</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.changeNumberContainer}>
          <Text style={styles.changeNumberText}>Use another mobile number</Text>
        </TouchableOpacity>
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
    padding: 20,
    justifyContent: "center",
  },
  illustrationContainer: {
    width: 150,
    height: 150,
    backgroundColor: "#F5F5F5",
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 30,
  },
  illustrationText: {
    fontSize: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#757575",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2E7D32",
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  resendText: {
    color: "#757575",
  },
  resendLink: {
    color: "#2E7D32",
    fontWeight: "bold",
  },
  changeNumberContainer: {
    alignItems: "center",
  },
  changeNumberText: {
    color: "#2E7D32",
    textDecorationLine: "underline",
  },
})

export default OTPScreen
