import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
// import Error from './Components/error'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      foods: [],
      error: null,

    }
  }
  
  componentDidMount(){ 
    fetch('http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=g03EsNMIdLVGVFxer9G0rkguZEPyUf2dcDyxlKH6&nutrients=205&nutrients=204&nutrients=208&nutrients=269')
      .then(res => res.json())
      .then(myJson => {
        myJson.map(food => {
          this.setState({
            foods: food,
            isLoading: false 
          })
    })
  })
}

  addFood = () => {
    const NameFood = this.state.foods.map(food => food.name)
    return NameFood[1]
  }

  render() {
    return (
      <View>
        {/* this.state.error ? <Error>Oh No!</Error> : <text addFood /> */}
        <text>addFood</text>
        </View> 
    )
  }
}

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);