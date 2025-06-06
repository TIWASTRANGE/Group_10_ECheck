import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StatusBar } from "react-native"

// Import screens
import WelcomeScreen from "./src/screens/WelcomeScreen"
import LoginScreen from "./src/screens/LoginScreen"
import RegisterScreen from "./src/screens/RegisterScreen"
import OTPScreen from "./src/screens/OTPScreen"
import HomeScreen from "./src/screens/HomeScreen"
import ReportOutageScreen from "./src/screens/ReportOutageScreen"
import ReadingsScreen from "./src/screens/ReadingsScreen"
import ComplaintHistoryScreen from "./src/screens/ComplaintHistoryScreen"
import NotificationsScreen from "./src/screens/NotificationsScreen"
import HelpScreen from "./src/screens/HelpScreen"
import ProfileScreen from "./src/screens/ProfileScreen"
import AccountScreen from "./src/screens/AccountScreen"
import ChangeEmailScreen from "./src/screens/ChangeEmailScreen"
import ChangePasswordScreen from "./src/screens/ChangePasswordScreen"
import AccountSecurityScreen from "./src/screens/AccountSecurityScreen"

const Stack = createStackNavigator()

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="OTP" component={OTPScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ReportOutage" component={ReportOutageScreen} />
          <Stack.Screen name="Readings" component={ReadingsScreen} />
          <Stack.Screen name="ComplaintHistory" component={ComplaintHistoryScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="Help" component={HelpScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name="ChangeEmail" component={ChangeEmailScreen} />
          <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
          <Stack.Screen name="AccountSecurity" component={AccountSecurityScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
