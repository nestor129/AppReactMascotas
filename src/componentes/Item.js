import React from 'react';
import {View, Text} from 'react-native';


/**
 * Componenten que da una un formato general para mostrar la informacion de una mascota.
 * @return View con estilo de Item.
 */
const Item = (props) =>{
    return <View style={styles.estiloContenedor}>{props.children}</View>
};

// Estilos del item
const styles={
    estiloContenedor:{
        flexDirection:"column",
        marginTop: 20,
        marginBotton: 20,
        backgroundColor: "#817767",
        paddingTop:15,
        paddingBottom:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 2,     
        borderRadius: 5,

    }
};

export default Item;