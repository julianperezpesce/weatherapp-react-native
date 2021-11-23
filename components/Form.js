/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Picker } from '@react-native-community/picker';

const Form = () => {
  return (
    <>
      <View /*style={styles.form}*/>
        <View>
          <TextInput
          style={styles.input}
            placeholder="Ciudad"
            placeholderTextColor="#666"
          />
        </View>
        <View>
          <Picker
            itemStyle={ {
              height: 120,
              backgroundColor: '#fff',
            }}
          >
            <Picker.Item label="Elige una opción" value="" />
            <Picker.Item label="Argentina" value="us" />
            <Picker.Item label="Estados Unidos" value="us" />
            <Picker.Item label="Colombia" value="co" />
            <Picker.Item label="España" value="es" />
            <Picker.Item label="México" value="mx" />
          </Picker>
        </View>
        <TouchableWithoutFeedback>
          <View style={ styles.btnSearch }>
            <Text style={ styles.textBtnSearch }>Buscar Clima</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
    );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 0,
  },
  btnSearch: {
    marginTop: 50,
    padding: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  textBtnSearch: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#FFF',
    fontSize: 20,
    textAlign: 'center',
  },
});


export default Form;
