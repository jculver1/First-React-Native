import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: []
    }
  }

  
  componentWillMount(){ 
    await fetch ('http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=g03EsNMIdLVGVFxer9G0rkguZEPyUf2dcDyxlKH6&nutrients=205&nutrients=204&nutrients=208&nutrients=269')
  .then(function(response) {
    return response.json()
  })
  .then(myJson => {
    myJson.map(reports => reports.foods)
      }
    )
    this.setState({
      foods: myJson
    })
  
  }
  addFood = () => {
    const NameFood = this.state.foods.map(food => food.name)
    return NameFood
  }

  render() {
    return (
      <View>
        <text Some text />

        </View> 
    )
  }
}

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);