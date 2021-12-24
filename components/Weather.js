import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Weather = ({result}) => {
    
    const { name, main } = result;
    if(!name) return null;
    console.log(result);

    return (
        <View style={styles.clima}>
            <Text style={[ styles.texto, styles.actual ]}
            >{main.temp}<Text style={styles.grados}>°C</Text> <Image
            style={{ width: 60, height: 60 }}
            source={{ uri: `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`}}
        />
            </Text>

            <View style={styles.temps}>
                <Text style={styles.temps}>Min: {' '}
                    <Text style={styles.tempText}>
                        {main.temp_min} &#x2103; 
                    </Text>
                </Text>
                <Text style={styles.temps}>Max: {' '}
                    <Text style={styles.tempText}>
                        {main.temp_max} &#x2103; 
                    </Text>
                </Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({  
    clima: { 
        marginBottom: 20,
    },
    texto: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 20,
    },
    actual: {
        fontSize: 80,
        marginRight: 0,
        fontWeight: 'bold',
    },
    grados: {
        fontSize: 40,
        fontWeight: 'normal',
    },
    temps: {     
        marginLeft: 10,
        marginRight: 10,   
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tempText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
});

export default Weather;
