import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useContext} from 'react';
import {Context} from '../context/Context';
import styles from '../Styles/GlobalStyles';
import React from 'react';

interface buttonProps {
  onpress: () => void;
  title: string;
  isBlue?: Boolean;
  isGrey?: Boolean;
}

const Button = (props: buttonProps) => {
  const {onpress, title, isBlue, isGrey} = props;

  const theme = useContext(Context);
  return (
    <TouchableOpacity
      style={
        isBlue
          ? styles.btnBlue
          : isGrey
          ? styles.btnGrey
          : theme === 'light'
          ? styles.btnLight
          : styles.btnDark
      }
      onPress={onpress}>
      <Text
        style={
          isBlue || isGrey
            ? styles.lightText
            : theme === 'dark'
            ? styles.lightText
            : styles.darkText
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
  