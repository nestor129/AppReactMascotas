import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Item from './Item';
import ItemSeccion from './ItemSeccion';
import Boton from './Boton';

/**
 * traer y le da formato a los datos de una mascota de porps, para ser mostrada.
 * @param props datos de una mascota siguiendo el modelo de la tabla mascotas.
 * @return Componente Item con todos los datos de una mascota.
 */
const Info = (props) => {
    return(
        <Item>
            <ItemSeccion>
                <Text style={styles.textBold, styles.estiloTitulo}>Mascota {props.mascota.id}</Text>
            </ItemSeccion>            
            <ItemSeccion>
                    <Image style={styles.estiloImagen} source={{uri: props.mascota.imagen}} />
            </ItemSeccion>
            <ItemSeccion>
                <View style={styles.estiloDesc}>
                        <Text style={styles.estiloTextoDesc}><Text style={styles.textBold}>Raza: </Text>{props.mascota.raza}</Text>
                        <Text style={styles.estiloTextoDesc}><Text style={styles.textBold}>Nombre: </Text>{props.mascota.nombre}</Text>
                </View>
            </ItemSeccion>
            <ItemSeccion>
                <Boton botonPresionado={() => {Linking.openURL(props.mascota.información)}} />
            </ItemSeccion>
        </Item>
    );
};

// estilos del info
const styles = {
    estiloTitulo:{
        alignSelf: "center",
        fontSize: 25,
        color: "white"

    },
    estiloDesc:{
        alignSelf: 'flex-start',
        margin: 10,
        marginLeft: 30,
    },
    estiloImagen:{
        alignSelf: "center",
        height: 300,
        width: 300,
        borderRadius: 500,
        margin:10,
    },
    estiloTextoDesc:{
        fontSize:20
    },
    estiloBoton:{
        alignSelf: "center"
    },
    textBold:{
        fontWeight: "bold",
    }

    
};

export default Info;