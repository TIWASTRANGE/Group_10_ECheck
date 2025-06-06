import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

const WelcomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* TODO: Add actual illustration image here */}
        <View style={styles.illustrationContainer}>
          <Text style={styles.illustrationText}>💡</Text>
          <Text style={styles.illustrationSubtext}>Electricity Monitoring</Text>
        </View>

        <Text style={styles.title}>UnitsReload</Text>
        <Text style={styles.subtitle}>Know your credit, secure your future.</Text>
        <Text style={styles.description}>Save money to save future</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login" as never)}>
          <Text style={styles.buttonText}>Get Started</Text>
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
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  illustrationContainer: {
    width: 200,
    height: 200,
    backgroundColor: "#F5F5F5",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  illustrationText: {
    fontSize: 60,
  },
  illustrationSubtext: {
    fontSize: 14,
    color: "#757575",
    textAlign: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#757575",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: "#2E7D32",
    textAlign: "center",
    marginBottom: 40,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#2E7D32",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
    width: "100%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
})

export default WelcomeScreen
