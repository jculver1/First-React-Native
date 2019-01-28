import React, { Component } from 'react';
import { AppRegistry, Text, View, FlatList } from 'react-native';
// import Error from './Components/error'

 class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      foods: [],
      error: null

    }
  }

  componentDidMount(){ 
    fetch('http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=g03EsNMIdLVGVFxer9G0rkguZEPyUf2dcDyxlKH6&nutrients=205&nutrients=204&nutrients=208&nutrients=269')
      .then(data => data.json())
      .then(myJson => {
          this.setState({
            foods: myJson
          })
    })
}

findFood = () => {
  const mapFoods = this.state.foods.report.map(report =>report.food)
  console.log(mapFoods)
  return mapFoods
}

  render() {
    return (
      <View>
        <Text>hello there</Text>
        <Text>{this.findFood}</Text>
        </View> 
    )
  }
}

export default App