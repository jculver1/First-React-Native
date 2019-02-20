import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

const FirstPicker = (props) => {
    return(
    <Picker
        onValueChange={(event) => props.pickType(event)}>{
        props.nutrientType.map( (v, i)=>{
        return <Picker.Item key={i} label={v} value={v} />
        })
        }
    </Picker>
    )}

export default FirstPicker
