// import React, { Component } from 'react';
// import { AppRegistry, Text, View, FlatList, StyleSheet } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
// // import Error from './Components/error'

//  class App extends React.Component{
//   constructor(props) {
//     super(props)
//     this.state = {
//       isLoading: true,
//       error: null
//     }
//   }

//   componentDidMount(){ 
//     fetch('http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=g03EsNMIdLVGVFxer9G0rkguZEPyUf2dcDyxlKH6&nutrients=205&nutrients=204&nutrients=208&nutrients=269')
//       .then(data => data.json())
//       .then(myJson => {
//           this.setState({
//             items: myJson.report.foods,
//             foodAndNutrients: myJson.report.foods.map(item => (
//               {
//               name: item.name,
//               nutrients: item.nutrients
//             })
//             )
//           })
//               this.findNutrient()
//           // console.log(this.state.nutrientList)  
//     })
// }

// findNutrient = () => {
//   const findNutrients = this.state.foodAndNutrients.map(item => item.nutrients)
//   const findAllNutrients = findNutrients.map(subarray => subarray.map(item => item.nutrient))
//   const flatenArray = findAllNutrients.flat()  
//   const uniqueNutrient = [...new Set(flatenArray)]; 
  
//   console.log(uniqueNutrient)
// }

//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>hello there</Text>
//         <Text>Choose something!</Text>
//         {/* <RNPickerSelect
//                     placeholder={{
//                         label: 'Select a color...',
//                         value: null,
//                         color: '#9EA0A4',
//                     }}
//                     items={this.state.items}
//                     onValueChange={(value) => {
//                         this.setState({
//                             favColor: value,
//                         });
//                     }}
//         /> */}
//         </View> 
//     )
//   }
// }
// export default App

// styles = StyleSheet.create({
//   bigBlue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });

