/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React , {Component} from 'react'; 

import { 
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  Button, 
  Image,
  Dimensions
} from 'react-native';  
const deviceWidth = Dimensions.get('window').width;
class App extends Component  {

  constructor(props) {
    super(props);
    this.state = {
                pulse:"",
                time:"",
                total:""
            };
  }

_buttonCalculate(){
// Alert.alert('Cannot press this one');
// alert(this.state.pulse);

var calculate = (this.state.pulse*60)/this.state.time;
// alert(calculate);
this.setState({ total:calculate })
}
_clearCalculate(){
  this.setState({ total:"" })
}
  render() {
  return (
    <View>
      <StatusBar  backgroundColor='#FF2745'/>
      <View style={styles.header}>
        <Text style={styles.title}>
            Blood Pressure Calculation
        </Text>
      </View>
      <View style={styles.Form}>
       
      <TextInput  keyboardType="numeric" style={styles.inputField}    onChangeText={pulse => this.setState({ pulse })} placeholder="Enter Pulse" />
      <TextInput keyboardType="numeric" style={styles.inputField}  onChangeText={time => this.setState({ time })} placeholder="Enter Second" />
      <Button title="Calculate"  onPress={this._buttonCalculate.bind(this)} color="#FF2745"  />
      <View style={{paddingTop:15}} >  
      <Button style={{paddingTop:15}}  title="Clear" onPress={this._clearCalculate.bind(this)} borderColor="red"  /> 
      </View>

      <Text style={styles.total}>Result : { this.state.total }</Text>

      <Image style={{width:deviceWidth-30}}   resizeMode='contain'  source={require('./img/info.jpg')} /> 
       
      </View>
      
    </View> 
  );
} 
}; 
 
const styles = StyleSheet.create({
  header:{
    backgroundColor:'#FF2745',
    paddingTop:15,
    paddingBottom:15,
    justifyContent:"center"
},
title: {
  textAlign:"center",
  fontSize:18,
  color:'white',
  fontWeight:'bold',
  textTransform:"uppercase",
  letterSpacing:1
  },
  sectionContainer: {
    marginTop:20,
    marginLeft:20,
   marginRight:20
  }, 
  inputField:{
    lineHeight:50,
    borderWidth:1,
    textAlignVertical:"center",
    padding:10,
    borderColor:'#A9B1BC',
    borderRadius:5,
    marginBottom:15
  }, 
  Form:{    
  margin :15
  },
  total:{
    fontSize:20,
    textAlign:"center",
    marginTop:30
  }
 
});

export default App;
