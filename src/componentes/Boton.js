import React from 'react';
import {Text, TouchableOpacity} from 'react-native';



/**
 * Componente que muestra un boton TouchableOpacity y con una funcion onPress cualquiera.
 * @param props.botonPresionado funcion que se ejecuta con el boton.
 * @return TouchableOpacity con texto y formato de Boton
 */
const Boton = (props) =>{
    const {estiloTexto, estiloBoton} = styles;

    return (
        <TouchableOpacity style={estiloBoton} onPress={props.botonPresionado}>
                <Text style={estiloTexto} >Mas Informacion</Text>
        </TouchableOpacity>
    );
};


// Estilos del Boton
const styles={
    estiloTexto:{
        fontSize: 18,
        fontWeight: '400',
        paddingBottom: 3,
        color: 'white'
    },
    estiloBoton:{
        alignSelf: 'center',
        backgroundColor: '#EF8E11',
        alignItems: 'center',
        borderWidth: .5,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop:10,
        marginLeft:7,
        marginRight: 7,
        marginBotton:15,
        paddingLeft:15,
        paddingRight: 15,
        borderRadius: 10
    }
}

export default Boton;