import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./Style";

export default function Home() {
  return(
    <View style={styles.container}>
      <Text>Hello Gabriel</Text>
      <StatusBar style="auto" />
    </View>
  );
}
