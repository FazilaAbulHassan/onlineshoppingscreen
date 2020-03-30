import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity,TextInput } from 'react-native';


export default class FirstScreen extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            phoneNumber: "",
            name:""
        }
    }
               

    render() {
        return (
            <View style={{flex:1}}>
<View style={css.heading}>
<Text style={css.headingText}>CUSTOMER DETAILS</Text>
</View>
<View style={css.inputValues}>
<TextInput placeholder = "Name" value={this.state.name} onChangeText={(name) => this.setState({ name })} style={css.textInput_Style} />
<TextInput placeholder = "Phone No" value={this.state.phoneNumber} onChangeText={(phoneNumber) => this.setState({ phoneNumber })} style={css.textInput_Style} />
<TextInput placeholder = "E-Mail" value={this.state.email} onChangeText={(email) => this.setState({ email })} style={css.textInput_Style} />
</View>
<View style={css.nextButton}>
<TouchableOpacity onPress={() => this.props.navigation.navigate("SecondScreen")} style={css.buttonStyle}>
<Text style={{fontSize:16,fontWeight:"bold",color:"white"}}>NEXT</Text>

</TouchableOpacity>
</View>
            </View>
        )
    }
}



const css = StyleSheet.create({
 heading:{
     flex:0.2,
    //  backgroundColor:"red",
     justifyContent:"flex-end",
     alignItems:"center",
     marginTop:40
 }  ,
 headingText:{
     fontSize:20,
     fontWeight:"bold"
 } ,
 inputValues:{
     flex:0.5,
    //  backgroundColor:"yellow",
     justifyContent:"center",
     alignItems:"center",
     flexDirection:"column"
 },
 textInput_Style:
  {
    width: '80%',
    height: 45,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: 'white',
    // textAlign:'center',
    paddingLeft:20,
    color:'black',
    marginVertical:20,
    borderRadius:10
  },
  nextButton:{
      flex:0.2,
    //   backgroundColor:"red",
      justifyContent:"flex-start",
      alignItems:"flex-end",
      marginRight:35
      
      
  },
  buttonStyle:{
      height:45,
      width:'30%',
      borderWidth:1,
      borderColor:"black",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10,
      backgroundColor:"black"
  }

})

