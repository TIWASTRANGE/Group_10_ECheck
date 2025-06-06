export type RootStackParamList = {
  Welcome: undefined
  Login: undefined
  Register: undefined
  OTP: { phoneNumber: string }
  Home: undefined
  ReportOutage: undefined
  Readings: undefined
  ComplaintHistory: undefined
  Notifications: undefined
  Help: undefined
  Profile: undefined
  Account: undefined
  ChangeEmail: undefined
  ChangePassword: undefined
  AccountSecurity: undefined
  SubmitReading: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
