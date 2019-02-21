import React, { Component } from 'react';
import { AppRegistry, Text, View, FlatList, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
// import Error from './Components/error'
import FirstPicker from './components/picker'
import NutrientPicker from './components/nutrientPicker'
import MyStyles from './components/styles'

 class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      error: null,
      item: '',
      data: [],
      nutrientType: [],
      typeChosen: '',
      nutrient: ''
    }
  }i

  componentDidMount(){ 
    fetch('https://api.nal.usda.gov/ndb/reports/?ndbno=01009&type=f&format=json&api_key=g03EsNMIdLVGVFxer9G0rkguZEPyUf2dcDyxlKH6&nutrients=205&nutrients=204&nutrients=208&nutrients=269')
      .then(data => data.json())
      .then(myJson => {
          this.setState({
            data: myJson.report.food.nutrients,
            nutrientType: [...new Set(myJson.report.food.nutrients.map(nutrient => nutrient.group))]
            // nutrientName: myJson.report.food.nutrients.map(nutrient => nutrient.name)
    })
  }
  )
}

pickType = (event) => {
  this.setState({
    typeChosen: event 
  })
  console.log(this.state.typeChosen)
}

pickNutrient = (event) => {
  this.setState({
    nutrient: event
  })
  console.log(this.state.nutrient)
}

  render() {
    return (
      <View>
        <View style={MyStyles.item}>
          <Text style={MyStyles.textStyle}>What the Health?</Text>
        </View>
        <View style={MyStyles.item} >
          <Text style={MyStyles.textStyle}>Choose something!</Text>
        </View>
        <View>
        <FirstPicker style={MyStyles.item} nutrientType={this.state.nutrientType} item={this.state.item} pickType={this.pickType}/>
        </View>
        <NutrientPicker style={MyStyles.item} pickNutrient={this.pickNutrient} typeChosen={this.state.typeChosen} nutrientData={this.state.data}/>
      
      </View> 
    )
  }
}
export default App

