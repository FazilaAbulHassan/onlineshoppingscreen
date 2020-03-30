import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity,TextInput, FlatList} from 'react-native';

const vegetable= [
    {name:"tomato"},{name: "potato"},{name: "onion"}]
const type= [{name:"country"},{name: "bangalore"}]

export default class SecondScreen extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
          showLists: false,
          showList:false,
          
          
      }}
               

    render() {
        return (
            <View style={{flex:1,justifyContent:"center"}}>

<View style={css.inputValues}>
<TouchableOpacity onPress={() => this.setState({ showList: !this.state.showList })} style={css.listStyle}>
              <View style={{justifyContent:"center",alignItems:"flex-start",marginTop:10}}>
              
              <Text style={css.text}>Vegetable</Text>
              
              </View>
            </TouchableOpacity>
            {this.state.showList ?
              <FlatList 
              style={css.flatlist}
              scrollEnabled={false}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
                data={vegetable}
                extraData={this.state}
                renderItem={({ item }) => (
                  <TouchableOpacity style={css.listItem}>
                    <Text style={css.list}>{item.name}</Text></TouchableOpacity>
                )}
              />
              : null}
<TouchableOpacity onPress={() => this.setState({ showLists: !this.state.showLists })} style={css.listStyle}>
              <View style={{justifyContent:"center",alignItems:"flex-start",marginTop:10}}>
              
              <Text style={css.text}>Type</Text>
             
              </View>
            </TouchableOpacity>
            {this.state.showLists ?
              <FlatList 
              style={css.flatlist}
              scrollEnabled={false}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
                data={type}
                extraData={this.state}
                renderItem={({ item }) => (
                  <TouchableOpacity style={css.listItem}>
                    <Text style={css.list}>{item.name}</Text></TouchableOpacity>
                )}
              />
              : null}
<TextInput placeholder = "Kg" style={css.textInput_Style} />
</View>
<View style={css.nextButton}>
<TouchableOpacity onPress={() => this.props.navigation.navigate("ThirdScreen")} style={css.buttonStyle}>
<Text style={{fontSize:16,fontWeight:"bold",color:"white"}}>NEXTs</Text>

</TouchableOpacity>
</View>
            </View>
        )
    }
}



const css = StyleSheet.create({

 
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
    paddingLeft:20,
    color:'black',
    marginVertical:20,
    borderRadius:10
  },
  nextButton:{
      flex:0.2,
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
  },
  listStyle: {
    backgroundColor: 'white',
    borderColor:"black",
    borderWidth: 1,
    paddingBottom:18,
    marginVertical: 20,   
    width: '80%',
    height:45,
    opacity:1,
    borderRadius:10,
    paddingLeft:20
  },
  listItem: {
    backgroundColor: 'white',
    borderBottomColor: '#e7e7f0',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderWidth: 0.5,
    paddingBottom:15,
    margin: 10,   
    width: 100 
  },
  list: {
    fontSize: 14,
    justifyContent:'center',
    color:"black"
  },
  flatlist:{
    flex:0.1,
    marginLeft:20
  }

})

