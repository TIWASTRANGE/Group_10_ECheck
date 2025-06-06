"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Header from "../components/Header"
import Icon from "react-native-vector-icons/FontAwesome"

const SubmitReadingScreen = () => {
  const navigation = useNavigation()
  const [readingData, setReadingData] = useState({
    currentReading: "",
    previousReading: "",
    readingDate: new Date().toISOString().split("T")[0], // Today's date
    meterNumber: "",
    notes: "",
  })

  const [calculatedUsage, setCalculatedUsage] = useState<number | null>(null)

  const handleCalculateUsage = () => {
    const current = Number.parseFloat(readingData.currentReading)
    const previous = Number.parseFloat(readingData.previousReading)

    if (isNaN(current) || isNaN(previous)) {
      Alert.alert("Error", "Please enter valid numbers for both readings")
      return
    }

    if (current < previous) {
      Alert.alert("Error", "Current reading cannot be less than previous reading")
      return
    }

    const usage = current - previous
    setCalculatedUsage(usage)
  }

  const handleSubmitReading = async () => {
    if (!readingData.currentReading || !readingData.previousReading) {
      Alert.alert("Error", "Please fill in all required fields")
      return
    }

    if (calculatedUsage === null) {
      Alert.alert("Error", "Please calculate usage first")
      return
    }

    // TODO: Implement submit reading API call
    // const response = await submitReadingAPI({
    //   ...readingData,
    //   usage: calculatedUsage,
    //   submissionDate: new Date().toISOString()
    // });
    // if (response.success) {
    //   Alert.alert('Success', 'Reading submitted successfully');
    //   navigation.navigate('Home');
    // }

    Alert.alert("Success", `Reading submitted successfully!\nUsage: ${calculatedUsage} kWh`, [
      { text: "OK", onPress: () => navigation.navigate("Home" as never) },
    ])
  }

  const updateReadingData = (field: string, value: string) => {
    setReadingData((prev) => ({ ...prev, [field]: value }))
    // Reset calculated usage when readings change
    if (field === "currentReading" || field === "previousReading") {
      setCalculatedUsage(null)
    }
  }

  const getUsageColor = (usage: number) => {
    if (usage <= 100) return "#4CAF50" // Green - Low usage
    if (usage <= 200) return "#FF9800" // Orange - Medium usage
    return "#F44336" // Red - High usage
  }

  const getUsageCategory = (usage: number) => {
    if (usage <= 100) return "Low Usage"
    if (usage <= 200) return "Medium Usage"
    return "High Usage"
  }

  return (
    <View style={styles.container}>
      <Header title="Submit Reading" />

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Electricity Meter Reading</Text>
        <Text style={styles.subtitle}>Enter your current meter reading to track consumption</Text>

        <View style={styles.formContainer}>
          {/* Meter Number */}
          <View style={styles.inputContainer}>
            <Icon name="tachometer" size={18} color="#757575" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Meter Number (Optional)"
              value={readingData.meterNumber}
              onChangeText={(text) => updateReadingData("meterNumber", text)}
            />
          </View>

          {/* Previous Reading */}
          <View style={styles.inputContainer}>
            <Icon name="history" size={18} color="#757575" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Previous Reading (kWh)"
              value={readingData.previousReading}
              onChangeText={(text) => updateReadingData("previousReading", text)}
              keyboardType="numeric"
            />
          </View>

          {/* Current Reading */}
          <View style={styles.inputContainer}>
            <Icon name="bolt" size={18} color="#757575" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Current Reading (kWh)"
              value={readingData.currentReading}
              onChangeText={(text) => updateReadingData("currentReading", text)}
              keyboardType="numeric"
            />
          </View>

          {/* Reading Date */}
          <View style={styles.inputContainer}>
            <Icon name="calendar" size={18} color="#757575" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Reading Date (YYYY-MM-DD)"
              value={readingData.readingDate}
              onChangeText={(text) => updateReadingData("readingDate", text)}
            />
          </View>

          {/* Notes */}
          <View style={styles.inputContainer}>
            <Icon name="sticky-note" size={18} color="#757575" style={styles.inputIcon} />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Notes (Optional)"
              value={readingData.notes}
              onChangeText={(text) => updateReadingData("notes", text)}
              multiline
              numberOfLines={3}
            />
          </View>

          {/* Calculate Button */}
          <TouchableOpacity style={styles.calculateButton} onPress={handleCalculateUsage}>
            <Icon name="calculator" size={18} color="#FFFFFF" style={styles.buttonIcon} />
            <Text style={styles.calculateButtonText}>Calculate Usage</Text>
          </TouchableOpacity>

          {/* Usage Display */}
          {calculatedUsage !== null && (
            <View style={[styles.usageCard, { borderLeftColor: getUsageColor(calculatedUsage) }]}>
              <View style={styles.usageHeader}>
                <Icon name="flash" size={24} color={getUsageColor(calculatedUsage)} />
                <Text style={styles.usageTitle}>Calculated Usage</Text>
              </View>

              <Text style={[styles.usageValue, { color: getUsageColor(calculatedUsage) }]}>{calculatedUsage} kWh</Text>

              <Text style={[styles.usageCategory, { color: getUsageColor(calculatedUsage) }]}>
                {getUsageCategory(calculatedUsage)}
              </Text>

              {/* Usage Breakdown */}
              <View style={styles.breakdownContainer}>
                <View style={styles.breakdownRow}>
                  <Text style={styles.breakdownLabel}>Current Reading:</Text>
                  <Text style={styles.breakdownValue}>{readingData.currentReading} kWh</Text>
                </View>
                <View style={styles.breakdownRow}>
                  <Text style={styles.breakdownLabel}>Previous Reading:</Text>
                  <Text style={styles.breakdownValue}>{readingData.previousReading} kWh</Text>
                </View>
                <View style={styles.breakdownRow}>
                  <Text style={styles.breakdownLabel}>Consumption:</Text>
                  <Text style={[styles.breakdownValue, styles.consumptionValue]}>{calculatedUsage} kWh</Text>
                </View>
              </View>

              {/* Usage Tips */}
              <View style={styles.tipsContainer}>
                <Icon name="lightbulb-o" size={16} color="#757575" style={styles.tipIcon} />
                <Text style={styles.tipText}>
                  {calculatedUsage <= 100
                    ? "Great! You're maintaining low energy consumption."
                    : calculatedUsage <= 200
                      ? "Consider reducing usage during peak hours to save costs."
                      : "High usage detected. Check for energy-efficient alternatives."}
                </Text>
              </View>
            </View>
          )}

          {/* Submit Button */}
          <TouchableOpacity
            style={[styles.submitButton, { opacity: calculatedUsage !== null ? 1 : 0.6 }]}
            onPress={handleSubmitReading}
            disabled={calculatedUsage === null}
          >
            <Icon name="check" size={18} color="#FFFFFF" style={styles.buttonIcon} />
            <Text style={styles.submitButtonText}>Submit Reading</Text>
          </TouchableOpacity>

          {/* Info Card */}
          <View style={styles.infoCard}>
            <Icon name="info-circle" size={20} color="#2E7D32" style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>How to read your meter:</Text>
              <Text style={styles.infoText}>
                1. Locate your electricity meter{"\n"}
                2. Read the numbers from left to right{"\n"}
                3. Ignore any red numbers or numbers after a decimal point{"\n"}
                4. Enter the reading exactly as shown
              </Text>
            </View>
          </View>
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
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "#757575",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
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
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  calculateButton: {
    backgroundColor: "#FF9800",
    paddingVertical: 15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonIcon: {
    marginRight: 8,
  },
  calculateButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  usageCard: {
    backgroundColor: "#F5F5F5",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderLeftWidth: 4,
    elevation: 2,
  },
  usageHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  usageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121",
    marginLeft: 10,
  },
  usageValue: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  usageCategory: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 15,
  },
  breakdownContainer: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  breakdownRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  breakdownLabel: {
    fontSize: 14,
    color: "#757575",
  },
  breakdownValue: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "500",
  },
  consumptionValue: {
    color: "#2E7D32",
    fontWeight: "bold",
  },
  tipsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#E8F5E8",
    padding: 12,
    borderRadius: 8,
  },
  tipIcon: {
    marginRight: 8,
    marginTop: 2,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: "#2E7D32",
    lineHeight: 18,
  },
  submitButton: {
    backgroundColor: "#2E7D32",
    paddingVertical: 15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoCard: {
    backgroundColor: "#E8F5E8",
    padding: 15,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  infoIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#2E7D32",
    lineHeight: 18,
  },
})

export default SubmitReadingScreen
