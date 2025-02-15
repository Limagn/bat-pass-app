import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from "../../components/BatButton/BatButton";
import theme from "../../styles/theme";
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function Home() {
  const [activateSymbolState, setActivateState] = useState(true);

  function handleLogo() {
    setActivateState(!activateSymbolState)
  }

  return(
    <View style={[
      styles.appContainer,
      {backgroundColor: (activateSymbolState ? theme.homeBg : theme.homeBg_dark)}
    ]}>
      <View>
        <TouchableOpacity
          onPress={handleLogo}
          style={[styles.logoContainer,
            activateSymbolState 
            ? {backgroundColor: theme.secondary, borderColor: theme.border}
            : {backgroundColor:  theme.secondary_dark, borderColor: theme.border_dark}
          ]}>
          <BatLogo activate={activateSymbolState}/>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <BatButton activate={activateSymbolState}/>
      </View>

      <StatusBar style="inverted" />
    </View>
  );
}