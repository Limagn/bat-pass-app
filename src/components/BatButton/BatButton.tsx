import React, { useState } from 'react';
import { Text, Pressable, Alert, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import ActivateSymbolStateProps from '../../types/activateSymbolState';
import theme from '../../styles/theme';

export function BatButton({activate}: ActivateSymbolStateProps) {
  const [pass, setPass] = useState('');

  function handleGenerateButton() {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass)
    Alert.alert('Senha copiada para a área de transferência.')
  }

  return (
    <>
      <BatTextInput pass={pass} activate={activate}/>
      
      <TouchableOpacity
        onPress={handleGenerateButton}
        style={[styles.button,
          {backgroundColor: activate ? theme.secondary : theme.secondary_dark}
        ]}
      >
        <Text 
          style={[styles.text,
            {color: activate ? theme.primary : theme.primary_dark}
          ]}
        >
          GENERATE
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleCopyButton}
        style={[styles.button,
          {backgroundColor: activate ? theme.secondary : theme.secondary_dark}
        ]}
      >
        <Text 
          style={[styles.text,
            {color: activate ? theme.primary : theme.primary_dark}
          ]}
        >
          ⚡ COPY
        </Text>
      </TouchableOpacity>
    </>
  );
}