/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { Picker } from '@react-native-community/picker';

const Form = ({ search, setSearch }) => {

  const { city, country } = search;

  const [ animatedBtn ] = useState(new Animated.Value(1));

  const animateIn = () => {
    Animated.spring(animatedBtn, {
      toValue: 0.9,
    }).start();
  };

  const animateOut = () => {
    Animated.spring(animatedBtn, {
      toValue: 1,
      friction: 1,
      tension: 30,
    }).start();
  };

  const animatedStyle = {
    transform: [{
      scale: animatedBtn,
    }],
  };

  return (
    <>
      <View /*style={styles.form}*/>
        <View>
          <TextInput
            value={city}
            style={styles.input}
            onChangeText={writedCity => setSearch({ ...search, city: writedCity })}
            placeholder="Ciudad"
            placeholderTextColor="#666"
          />
        </View>
        <View>
          <Picker
            selectedValue={country}
            onValueChange={(choosedCountry) => setSearch({ ...search, country: choosedCountry })}
            itemStyle={ {
              height: 120,
              backgroundColor: '#fff',
            }}
          >
            <Picker.Item label="Elige tu país" value="" />
            <Picker.Item label="Argentina" value="ar" />
            <Picker.Item label="Estados Unidos" value="us" />
            <Picker.Item label="Colombia" value="co" />
            <Picker.Item label="España" value="es" />
            <Picker.Item label="México" value="mx" />
          </Picker>
        </View>
        <TouchableWithoutFeedback
          onPressIn={() => animateIn() }
          onPressOut={() => animateOut() }
        >
          <Animated.View
            style={[ styles.btnSearch, animatedStyle ]}
          >
            <Text style={ styles.textBtnSearch }>Buscar Clima</Text>
          </Animated.View>
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
