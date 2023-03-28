import {Text, View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import Button from './Button';
import styles from '../Styles/GlobalStyles';
import {Context} from '../context/Context';
import {useContext} from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(Number);
  const [error, setError] = useState("")

  const theme = useContext(Context);

  function handleFirstNumber(val: string) {
    setFirstNumber(firstNumber + val);
  }

  function handleOperator(operator: string) {
    if (firstNumber && secondNumber) {
      switch (operation) {
        case '+':
          clear();
          setResult(parseInt(firstNumber) + parseInt(secondNumber));
          if (result) {
            setResult(result + parseInt(firstNumber));
          }
          break;
        case '-':
          clear();
          setResult(parseInt(secondNumber) - parseInt(firstNumber));
          if (result) {
            setResult(result - parseInt(firstNumber));
          }
          break;
        case '/':
          clear();
          setResult(parseInt(secondNumber) / parseInt(firstNumber));
          if (result) {
            setResult(result / parseInt(firstNumber));
          }
          break;
        case '*':
          clear();
          setResult(parseInt(firstNumber) * parseInt(secondNumber));
          if (result) {
            setResult(result * parseInt(firstNumber));
          }
          break;
        default:
          console.log('In default');
          clear();
          setResult(0);
      }
    }
    if (result) {
      switch (operation) {
        case '*':
          setResult(result * parseInt(firstNumber));
          break;
        case '+':
          setResult(result + parseInt(firstNumber));
          break;
        case '-':
          setResult(result - parseInt(firstNumber));
          break;
        case '/':
          setResult(result / parseInt(firstNumber));
          break;
      }
    }
    setOperation(operator);
    setSecondNumber(firstNumber);
    setFirstNumber('');
  }

  function clear() {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(0);
  }

  function handleResult() {
    switch (operation) {
      case '+':
        clear();
        setResult(parseInt(firstNumber) + parseInt(secondNumber));
        if (result) {
          setResult(result + parseInt(firstNumber));
        }
        break;
      case '-':
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        if (result) {
          setResult(result - parseInt(firstNumber));
        }
        break;
      case '/':
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        if (result) {
          setResult(result / parseInt(firstNumber));
        }
        break;
      case '*':
        clear();
        setResult(parseInt(firstNumber) * parseInt(secondNumber));
        console.log(setResult(parseInt(firstNumber) * parseInt(secondNumber)));
        if (result) {
          setResult(result * parseInt(firstNumber));
        }
        break;
      default:
        console.log('In default');
        setError("")
        clear();
        setResult(0);
    }
  }

  const handleDisplay = () => {
    if (firstNumber.length <= 11) {
      return (
        <Text
          style={
            theme === 'dark'
              ? {fontSize: 40, color: 'white'}
              : styles.globalFont
          }>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 11) {
      return (
        <Text
          style={
            theme === 'dark'
              ? {fontSize: 40, color: 'white'}
              : [styles.greaterThanEleven]
          }>
          {firstNumber}
        </Text>
      );
    }
  };

  console.log(firstNumber, '////');

  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Text
          style={
            theme === 'light'
              ? {fontSize: 40, color: 'black'}
              : {fontSize: 40, color: 'white'}
          }>
          {result ? result : secondNumber}
        </Text>
        <Text style={{color: 'purple', fontSize: 40}}>{operation}</Text>
        <Text>{handleDisplay()}</Text>
      </View>
      <StatusBar
        backgroundColor={theme === 'dark' ? 'black' : 'lightgrey'}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.row}>
        <Button
          isBlue
          title="+/-"
          onpress={() => console.log('does nothing')}
        />
        <Button isBlue title="%" onpress={() => console.log('does nothing')} />
        <Button isBlue title="-" onpress={() => handleOperator('-')} />
        <Button
          isGrey
          title="DEL"
          onpress={() =>
            firstNumber
              ? setFirstNumber(firstNumber.slice(0, -1))
              : operation
              ? setOperation(operation.slice(0, -1))
              : setSecondNumber(secondNumber.slice(0, -1))
          }
        />
      </View>
      <View style={styles.row}>
        <Button
          title="7"
          onpress={() => {
            handleFirstNumber('7');
          }}
        />
        <Button
          title="8"
          onpress={() => {
            handleFirstNumber('8');
          }}
        />
        <Button title="9" onpress={() => handleFirstNumber('9')} />
        <Button
          isBlue
          title="+"
          onpress={() => {
            handleOperator('+');
          }}
        />
      </View>
      <View style={styles.row}>
        <Button title="4" onpress={() => handleFirstNumber('4')} />
        <Button title="5" onpress={() => handleFirstNumber('5')} />
        <Button title="6" onpress={() => handleFirstNumber('6')} />
        <Button isBlue title="÷" onpress={() => handleOperator('/')} />
      </View>
      <View style={styles.row}>
        <Button title="1" onpress={() => handleFirstNumber('1')} />
        <Button title="2" onpress={() => handleFirstNumber('2')} />
        <Button title="3" onpress={() => handleFirstNumber('3')} />
        <Button isBlue title="×" onpress={() => handleOperator('*')} />
      </View>
      <View style={styles.row}>
        <Button
          title="."
          onpress={() => {
            handleFirstNumber('.');
          }}
        />
        <Button title="0" onpress={() => handleFirstNumber('0')} />
        <Button title="C" onpress={() => clear()} />
        <Button isGrey title="=" onpress={() => handleResult()} />
      </View>
    </>
  );
};

export default Calculator;