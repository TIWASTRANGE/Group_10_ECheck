"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Header from "../components/Header"
import BottomNavigation from "../components/BottomNavigation"

const ReportOutageScreen = () => {
  const navigation = useNavigation()
  const [outageData, setOutageData] = useState({
    location: "Dirty south",
    timeOfOutage: "09am",
    details: "",
  })

  const handleSubmitReport = async () => {
    // TODO: Implement outage reporting API call
    // const response = await reportOutageAPI(outageData);
    // if (response.success) {
    //   Alert.alert('Success', 'Outage reported successfully');
    //   navigation.goBack();
    // }

    Alert.alert("Success", "Outage reported successfully", [{ text: "OK", onPress: () => navigation.goBack() }])
  }

  const updateOutageData = (field: string, value: string) => {
    setOutageData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <View style={styles.container}>
      <Header title="Report Outage" />

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Report Outage</Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            value={outageData.location}
            onChangeText={(text) => updateOutageData("location", text)}
          />

          <Text style={styles.label}>Time of outage</Text>
          <TextInput
            style={styles.input}
            value={outageData.timeOfOutage}
            onChangeText={(text) => updateOutageData("timeOfOutage", text)}
            placeholder="e.g., 09am"
          />

          <Text style={styles.label}>Details</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={outageData.details}
            onChangeText={(text) => updateOutageData("details", text)}
            multiline
            numberOfLines={4}
            placeholder="Describe the outage situation..."
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmitReport}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomNavigation />
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
  textArea: {
    height: 100,
    textAlignVertical: "top",
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

export default ReportOutageScreen
