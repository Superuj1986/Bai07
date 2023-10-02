import { Pressable, Text, View } from "react-native";
import React from "react";
import LinearGradient, { LinearGradientProps } from "react-native-linear-gradient";
import colours from "../constants/colours";
import Button from "../components/Button";

 const Welcome = ({navigation}) => {
    return(
        <LinearGradient
        style={{
            flex:1
        }}
        colours={[colours.secondary,colours.primary]}
        >
            <View style={{flex:1}}> 
                <View style={{
                    paddingHorizontal:22,
                    position: "absolute",
                    top:400,
                    width:"100%"
                }}>
                    <Text style={{
                        fontSize:50,
                        fontWeight:700,
                        color:colours.white
                    }}>Let's get started</Text>
                </View>
                <Button 
                    title="John now"
                    onPress={()=> navigation.navigate("SignIp")}
                    style={{
                        marginTop:22,
                        width:"100%",
                    }}
                ></Button>
                <View
                    style = {{
                        flexDirection:"row",
                        marginTop:12,
                        justifyContent:"center",
                    }}
                >
                    <Text style={{
                        fontSize:16,
                        color:colours.white,
                    }}>Đã có tài khoản ?</Text>
                    <Pressable
                        onPress={()=>navigation.navigate("SignIn")}
                    >
                        <Text style={{
                            fontSize:16,
                            color:colours.white,
                            fontWeight:"bold",
                            marginLeft:4
                        }}></Text>
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
    )
 }

 export default Welcome;