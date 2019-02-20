import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

const PickerExample = (props) => {
    return(
    <Picker
        selectedValue={props.item}
        onValueChange={(event) => props.pickType(event)}>{
        props.nutrientType.map( (v, i)=>{
        return <Picker.Item key={i} label={v} value={v} />
        })
        }
    </Picker>
    )}

// const styles = StyleSheet.create({
//    text: {
//       fontSize: 30,
//       alignSelf: 'center',
//       color: 'red'
//    }
// })

export default PickerExample
