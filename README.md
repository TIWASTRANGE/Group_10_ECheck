# ECheck Mobile App

A React Native mobile application for monitoring electricity consumption and reporting outages in Cameroon. This simplified version uses **only React Native's built-in StyleSheet** for styling - no external UI libraries required.

## ✨ Key Features

### 🏠 Core Functionality
- **User Registration & Authentication**: Secure login with OTP verification
- **Real-time Monitoring**: Manual meter reading input and consumption tracking
- **Outage Reporting**: Quick and easy power outage reporting system
- **Complaint History**: Track all reported issues and their status
- **Notifications**: Stay updated with power cuts and billing information
- **Profile Management**: Complete account and security settings

### 📱 Simple & Clean Design
- **Native Styling**: Uses only React Native StyleSheet - no external dependencies
- **Professional Look**: Clean, intuitive interface with consistent green theme
- **Modular Architecture**: Reusable Header and BottomNavigation components
- **Easy Navigation**: Back buttons and bottom tab navigation
- **Responsive**: Works on various screen sizes


## 📁 Project Structure

```bash
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Simple header with back button
│   └── BottomNavigation.tsx  # Bottom tab navigation
├── screens/            # All 15 application screens
│   ├── WelcomeScreen.tsx
│   ├── LoginScreen.tsx
│   ├── RegisterScreen.tsx
│   ├── OTPScreen.tsx
│   ├── HomeScreen.tsx
│   ├── ReportOutageScreen.tsx
│   ├── ReadingsScreen.tsx
│   ├── ComplaintHistoryScreen.tsx
│   ├── NotificationsScreen.tsx
│   ├── HelpScreen.tsx
│   ├── ProfileScreen.tsx
│   ├── AccountScreen.tsx
│   ├── ChangeEmailScreen.tsx
│   ├── ChangePasswordScreen.tsx
│   └── AccountSecurityScreen.tsx
```

## 🚀 Quick Setup

### Prerequisites
- Node.js (>= 16.0.0)
- React Native CLI
- Android Studio (for Android)
- Xcode (for iOS, macOS only)

### Installation Steps

1. **Clone the project**
   \`\`\`bash
   git clone https://github.com/TIWASTRANGE/Group_10_ECheck.git
   cd ECheck
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **iOS Setup** (macOS only)
   \`\`\`bash
   cd ios && pod install && cd ..
   \`\`\`

4. **Run the app**
   \`\`\`bash
   # Start Metro bundler
   npm start

   # Run on Android
   npm run android

   # Run on iOS
   npm run ios

### Color Scheme
- **Primary Green**: `#2E7D32`
- **Secondary Green**: `#4CAF50`
- **Error Red**: `#F44336`
- **Text Gray**: `#757575`
- **Background**: `#FFFFFF`
- **Card Background**: `#F5F5F5`

## 🔗 Backend Integration

### API Integration Points
The app is ready for backend integration with TODO comments throughout:

\`\`\`typescript
// TODO: Implement login API call
// const response = await loginAPI(email, password);
// if (response.success) {
//   navigation.navigate('Home');
// }
\`\`\`

### Required API Endpoints
- **Authentication**: `/api/auth/login`, `/api/auth/register`, `/api/auth/verify-otp`
- **User Management**: `/api/user/profile`, `/api/user/update`
- **Outage Management**: `/api/outages/report`, `/api/outages/history`
- **Data**: `/api/readings`, `/api/notifications`

## 📱 Screen Overview

### Authentication Flow
1. **Welcome Screen** - App introduction
2. **Login Screen** - User login with social options
3. **Register Screen** - New user registration
4. **OTP Screen** - Phone verification

### Main Features
5. **Home Screen** - Dashboard with current readings
6. **Report Outage Screen** - Report power outages
7. **Readings Screen** - View consumption history
8. **Complaint History** - Track reported issues
9. **Notifications Screen** - System notifications

### User Management
10. **Help Screen** - FAQ and support
11. **Profile Screen** - User profile overview
12. **Account Screen** - Edit personal information
13. **Change Email Screen** - Update email address
14. **Change Password Screen** - Change password
15. **Account Security Screen** - Security settings


### Adding New Screens
1. Create new screen in `src/screens/`
2. Add route in `App.tsx`
3. Update navigation calls

### Icons
Currently uses emojis (📱, ⚡, 👤). To use vector icons:
1. Install `react-native-vector-icons`
2. Replace emoji with `<Icon name="icon-name" />`

## 🐛 Troubleshooting

### Common Issues
\`\`\`bash
# Clear Metro cache
npx react-native start --reset-cache

# Clean builds
cd android && ./gradlew clean && cd ..
cd ios && xcodebuild clean && cd ..

# Reinstall dependencies
rm -rf node_modules && npm install
\`\`\`

### Platform-Specific
- **Android**: Enable USB debugging, accept RSA key
- **iOS**: Trust developer certificate, enable developer mode

## 📝 Development Notes

### Why This Approach?
- **Simplicity**: No external UI library dependencies
- **Performance**: Lighter bundle size
- **Control**: Full control over styling
- **Learning**: Better understanding of React Native fundamentals
- **Maintenance**: Fewer dependencies to maintain

### When to Add UI Libraries?
Consider adding libraries like React Native Paper when:
- You need complex components (date pickers, charts)
- Team prefers pre-built components
- Rapid prototyping is priority

## 🤝 Contributing

1. Follow existing code structure
2. Use StyleSheet for all styling
3. Add TODO comments for API integration
4. Test on both platforms
5. Update documentation

## 📄 License

Educational project for Software Engineering course at University of Buea.


**Note**: This is a simplified version using only React Native's built-in styling. The app is fully functional and ready for backend integration. All screens are implemented with consistent styling and navigation.
\`\`\`


