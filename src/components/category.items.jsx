import { Pressable, StyleSheet, Text, View,Platform } from "react-native";

export const CategoryItems = (props)=>{
    return(
        <View style={[styles.container,{backgroundColor:props.color}]}>
            <Pressable onPress={props.onPress} style={({pressed})=>[pressed && Platform.OS==="ios"?styles.opac:null,styles.button]} android_ripple={{color:'#ccc'}}>
                <View style={styles.items}>
                    <Text style={styles.itemTitle}>{props.title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:1,
        overflow:Platform.OS==='android'?'hidden':'visible',
        
    },
    button:{
        flex:1,
    },
    opac:{
        opacity:0.5,
    },
    items:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    itemTitle:{
        fontSize:18,
        fontWeight:'bold',
    }
});