import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AppInfo from "./components/AppInfo";
import AppPost from "./components/AppPost";
import AppStatics from "./components/AppStatics";

export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader />
      <AppInfo />
      <AppStatics />
      <AppPost />
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"column"
  },
});
