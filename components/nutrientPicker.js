import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

const NutrientPicker= (props) => {
    return(
    <Picker
        onValueChange={(event) => props.pickNutrient(event)}>{
        props.nutrientData.map( (v, i)=>{
            if(v.group === props.typeChosen){
        return <Picker.Item key={i} label={v.name} value={v.name} />
            }
        })
        }
    </Picker>
    )}

export default NutrientPicker