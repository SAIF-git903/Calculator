import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import {Context} from './context/Context';
import Calculator from './Components/Calculator';

import styles from './Styles/GlobalStyles';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <Context.Provider value={theme}>
      <View
        style={
          theme === 'light'
            ? Styles.container
            : [Styles.container, {backgroundColor: 'black'}]
        }>
        <Switch
          style={styles.switchStyle}
          value={theme == 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <View style={styles.calculatorStyle}>
          <Calculator />
        </View>
      </View>
    </Context.Provider>
  );
};

export default App;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
});
