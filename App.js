import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Form from './components/Form';

const App = () => {

  const [ search, setSearch ] = useState({
    city: '',
    country: '',
  });

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => hideKeyboard()}
      >
        <View style={styles.app}>
          <View style={styles.container}>

            <Form
              search={search}
              setSearch={setSearch}
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
    backgroundColor: 'rgb(71, 149, 212)',
    justifyContent: 'center',
  },
  container: {
    marginHorizontal: '2.5%',
  },
}


export default App;
