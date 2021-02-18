import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import Info from './Info';

/**
 * Muesta una lista con toda la imforamcion de cada una de las mascotas.
 * @property {Array} state array que contiene toda la informacion obtenida del servidor REST.
 * @property {string} url  URL del servicio REST en json-server.
 */
class ListaMascotas extends Component{
    state = {listaMascotas:[]};
    
    url = "http://192.168.0.17:3000/mascotas";//json-server
    
    // esta funcion se ejecutara al crear el componente, consume el 
    // servicio rest y guarda la informacion en state.
    componentDidMount(){
        axios.get(this.url)
        .then(response =>{
            this.setState({listaMascotas: response.data});
            //console.log(response);
        })
        .catch(error => {
            console.log("Ocurrio un error **** " + error);
        });
    }

    /**
     * crea un componente Info por cada una de las mascotas.
     * @returns array de componentes Info.
     */
    MostrarLista = () =>{
        return this.state.listaMascotas.map(mascota => {
            return <Info key={mascota.id} mascota={mascota}></Info>
        })
    }

    /**
     * manda el array de componentes Info dentro de un ScrollView.
     * @return ScrollView con componentes Info de todas las mascotas.
     */
    render(){
        //console.log(this.state);
        return <ScrollView style={styles.scrolStyle}>{this.MostrarLista()}</ScrollView>;
    }

}


// estilos de ListaMascotas
const styles ={
    scrolStyle:{
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
    }
}


export default ListaMascotas;