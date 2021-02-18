import React from 'react';
import {View, Text} from 'react-native';


/**
 * Crea un componente de texto con formato.
 * @param titulo Texto que se muestra en el Header.
 */
const Header = (props) => {
    const {estiloTexto, estiloContenedor} = styles;
    return(
        <View style={estiloContenedor}>
            <Text style={estiloTexto}>{props.titulo}</Text>
        </View>
    );

};

//estilos de el Header
const styles = {
    estiloTexto:{
        fontSize:25,
        color: "#fff",
        fontWeight: "bold"
    },
    estiloContenedor:{
        width:"100%",
        backgroundColor: "#614343",
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderBottomWidth: 2,     
        elevation: 5,
        
    }
}

export default Header;