import React from 'react';
import { TextInput } from 'react-native';
import theme from '../../styles/theme';
import { styles } from './BatTextInputStyles';
import ActivateSymbolStateProps from '../../types/activateSymbolState';
import BatTextInputProps from '../../types/batTextInputProps';

type CombinedProps = ActivateSymbolStateProps & BatTextInputProps;

export function BatTextInput({activate, pass} : CombinedProps) {
  return (
      <TextInput
      style={[styles.inputer,
        {backgroundColor: activate ? theme.primary : theme.primary_dark}
      ]}
      placeholder='Pass'
      value={pass}
      secureTextEntry={activate ? true : false}
      readOnly
      />
  );
}