import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Form from './components/Form';
import Weather from './components/Weather';
import { API_KEY } from './helpers/API_KEY';

const App = () => {

  const [ search, setSearch ] = useState({
    city: '',
    country: '',
  });

  const { city, country } = search;

  const [ consult, setConsult ] = useState(false);

  const [result, setResult] = useState({});

  const [bgColor, setBgColor] = useState('rgb(71, 149, 212)');

  useEffect(() => {
    const consultarClima = async () => {
      if(consult) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`;  
        
        try {
          const response = await fetch(url);
          const result = await response.json();
          setResult(result);
          setConsult(false);
          // console.log(result);

          const { main } = result;
          
          if(main.temp < 10) {
            setBgColor('rgb(105,108, 149)');
          } else if(main.temp >= 10 && main.temp < 25) {
            setBgColor('rgb(71, 149, 212)');
          } else {
            setBgColor('rgb(178, 28, 61)');
          }

        } catch (error) {
          alertMsg();
        }
      }
    }
    consultarClima();
  } , [consult]);

  const alertMsg = () => {
    Alert.alert(
      'Error',
      'No hay resultados. Ciudad no encontrada',
      [
        { text: 'OK' },
      ],
      { cancelable: false },
    );
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const bgColorApp = {
    backgroundColor: bgColor,
  }

  
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => hideKeyboard()}
      >
        <View style={[styles.app, bgColorApp]}>
          <View style={styles.container}>
            <Weather 
              result={result}
            />
            <Form
              search={search}
              setSearch={setSearch}
              setConsult={setConsult}
            />

          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = {
  app: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    marginHorizontal: '2.5%',
  },
}


export default App;
