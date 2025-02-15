import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './BatLogosStyles';
import batLogo from '../../../assets/bat-logo-white.png'
import batLogoBlack from '../../../assets/bat-logo-black-orange.png'
import ActivateSymbolStateProps from '../../types/activateSymbolState';
import theme from '../../styles/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export function BatLogo({activate}: ActivateSymbolStateProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title,
        {color: (activate ? theme.primary : theme.primary_dark)}
      ]}>
        BAT PASS GENERATOR
      </Text>
      <Image
        source={(activate ? batLogo : batLogoBlack)}
        style={{
          resizeMode: 'contain',
          height: 170
        }}
      />
      <MaterialIcons name="touch-app" size={24} color="white"/>
    </View>
  );
}