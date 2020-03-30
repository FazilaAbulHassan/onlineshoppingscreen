import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity,TextInput } from 'react-native';


export default class ThirdScreen extends Component {
    
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
            <View style={{flex:1,marginTop:40}}>
                <View style={css.heading}>
                    <Text>TRANSPORT</Text>
                </View>
                <View style={css.options}>
                    <TouchableOpacity style={css.optionsView}>
                        <Text>Company</Text>
                    
                    </TouchableOpacity>
                    <TouchableOpacity style={css.optionsView}>
                        <Text>Own</Text>
                 
                    </TouchableOpacity>
                </View>
                <View style={css.heading}>
                    <Text>PACKAGE</Text>
                </View>
                <View style={css.options}>
                    <TouchableOpacity style={css.optionsView}>
                        <Text>Company</Text>
                    
                    </TouchableOpacity>
                    <TouchableOpacity style={css.optionsView}>
                        <Text>Own</Text>
                 
                    </TouchableOpacity>
                </View>
                <View style={css.heading}>
                    <Text>PAYMENT</Text>
                </View>
                <View style={css.options}>
                    <TouchableOpacity style={css.optionsView}>
                        <Text>Cash</Text>
                    
                    </TouchableOpacity>
                    <TouchableOpacity style={css.optionsView}>
                        <Text>Credit</Text>
                 
                    </TouchableOpacity>
                </View>
                <View style={css.amount}>
                <TextInput placeholder = "Amount" value={this.state.amount} onChangeText={(amount) => this.setState({ amount })} style={css.textInput_Style} />

                </View>
                <View style={css.buttons}>
                <TouchableOpacity style={css.buttonStyle}>
<Text style={{fontSize:16,fontWeight:"bold",color:"white"}}>RESET</Text>

</TouchableOpacity>
<TouchableOpacity style={css.buttonStyle}>
<Text style={{fontSize:16,fontWeight:"bold",color:"white"}}>SAVE</Text>

</TouchableOpacity>
                </View>
            </View>
        )
    }
}



const css = StyleSheet.create({
 heading:{
     flex:0.03,
    //  backgroundColor:"red",
     justifyContent:"flex-end",
     alignItems:"flex-start",
     marginTop:20,
     marginBottom:10,
     marginLeft:30
 },
 options:{
     flex:0.1,
    //  backgroundColor:"yellow",
     flexDirection:"row",
     alignItems:"center",
     justifyContent:"space-around"
 },
 optionsView:{
height:50,
width:'30%',
justifyContent:"center",
alignItems:"center",
borderRadius:15,
borderColor:"black",
borderWidth:1
 },
 amount:{
     flex:0.2,
     justifyContent:"center",
     alignItems:"center",
     
 },
 textInput_Style:
  {
    width: '50%',
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
  buttons:{
      flex:0.15,
      justifyContent:"space-around",
      alignItems:"center",
      flexDirection:"row"
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

