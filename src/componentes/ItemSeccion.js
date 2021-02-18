import React from 'react';
import {View, Text} from 'react-native';


/**
 *  Secciona la informacion de una mascota dentro de un componente Item.
 *  @return View con estilo de seccion. 
 */
const ItemSeccion = (props) =>{
    return <View>{props.children}</View>
};

export default ItemSeccion;