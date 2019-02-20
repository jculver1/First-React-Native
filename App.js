import React, { Component } from 'react';
import { AppRegistry, Text, View, FlatList, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
// import Error from './Components/error'
import PickerExample from './components/picker'

 class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      error: null,
      item: '',
      data: [],
      nutrientType: [],
      chosen: ''
    }
  }i

  componentDidMount(){ 
    fetch('https://api.nal.usda.gov/ndb/reports/?ndbno=01009&type=f&format=json&api_key=g03EsNMIdLVGVFxer9G0rkguZEPyUf2dcDyxlKH6&nutrients=205&nutrients=204&nutrients=208&nutrients=269')
      .then(data => data.json())
      .then(myJson => {
          this.setState({
            data: myJson.report.food,
            nutrientType: myJson.report.food.nutrients.map(nutrient => nutrient.group),
            // nutrientName: myJson.report.food.nutrients.map(nutrient => nutrient.name)
    })
  }
  )
}

pickType = (event) => {
  this.setState({
    chosen: event 
  })
  console.log(this.state.chosen)
}

  render() {
    return (
      <View>
        <Text style={styles.red}>hello there</Text>
        <Text>Choose something!</Text>
        <PickerExample nutrientType={this.state.nutrientType} item={this.state.item} pickType={this.pickType}/>
        </View> 
    )
  }
}
export default App

styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

