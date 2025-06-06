import { DefaultTheme } from "react-native-paper"

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2E7D32",
    secondary: "#4CAF50",
    accent: "#FF9800",
    background: "#FFFFFF",
    surface: "#F5F5F5",
    text: "#212121",
    placeholder: "#757575",
    error: "#F44336",
    success: "#4CAF50",
    warning: "#FF9800",
  },
}

export const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    padding: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    paddingVertical: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#2E7D32",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#757575",
  },
}
