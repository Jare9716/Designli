# Designli – Real-Time Stock Tracker

A mobile application built with **Expo + React Native** that streams real-time crypto/stock prices, displays live charts, manages a watchlist, provides price alerts, and includes Auth0 authentication.

---

## 🚀 Features

### **Real-Time Market Data**
- WebSocket connection to Finnhub  
- Throttled updates (1s refresh)  
- Redux Toolkit for global state management  

### **Live Charts**
- Built with `victory-native`  
- Real-time line graphs  
- Selectable symbol view  

### **Watchlist**
- Shows latest prices for tracked symbols  
- Auto-refresh from WebSocket feed  

### **Price Alerts**
- Create target price alerts per symbol  
- Local notifications when price crosses threshold  

### **Authentication**
- Auth0 login  
- Protected screens based on authentication  

---

## 🛠 Tech Stack
- React Native (Expo)
- Redux Toolkit
- Victory Native
- Auth0
- Expo Notifications
- TypeScript

---

## 📦 Installation

```
git clone https://github.com/your-username/Designli.git
cd Designli
npm install
```

Set environment variables (Expo):

```
EXPO_PUBLIC_FINNHUB_API_KEY=your_finnhub_key
EXPO_PUBLIC_AUTH0_DOMAIN=your_auth0_domain
EXPO_PUBLIC_AUTH0_CLIENT_ID=your_client_id
```

Add to your app.json plugins:

```
[
  "react-native-auth0",
    {
      "domain": "dev-w6wz71g51a3bmae1.us.auth0.com"
    }
]
```

Run the project:

```
npx expo start
```

---

## 📁 Project Structure

```
src/
  hooks/               # WebSocket, alerts, permissions
  redux/
    slices/            # stock, alerts, auth slices
    selectors/         # memoized selectors
    store.ts           
  screens/             # Watchlist, Stocks, Alerts, Login
  components/          # UI components
  enums/               # Symbol names, colors
  types/               # TypeScript definitions
  utils/               # Formatters, symbol lists
```

---

## 🔌 APIs & Services
- **Finnhub WebSocket** for real-time trades  
- **Auth0** for secure login  
- **Expo Notifications** for local price alerts  

---

## 📱 Platform Support
- iOS  
- Android  
- EAS builds  

---

## 📝 Notes
- WebSocket updates are throttled  
- Charts use bounded history for performance  
- Selectors are memoized to avoid heavy recomputations  
- Notifications require user permission  

---

## 📄 License
This project is for technical evaluation and demonstration.
