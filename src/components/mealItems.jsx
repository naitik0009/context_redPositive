import { useNavigation } from '@react-navigation/native';

import {View,Text,Image,Pressable,StyleSheet} from 'react-native';

export const MealItem = (props)=>{

    const navigation = useNavigation();
    return <View style={styles.container}> 
      <Pressable android_ripple={{color:"black"}} onPress={()=>{navigation.navigate('Details',{props:props})}}>
        <View>
        <Image alt="Can't load the image" style={styles.img} source={{uri : props.item.imageUrl }}/>
        <Text style={styles.txt}>{props.item.title}</Text>
        </View>
        <View style={styles.details}>
            <Text style={styles.detailTxt}>{props.item.duration}min</Text>
            <Text style={styles.detailTxt}>{props.item.complexity}</Text>
            <Text style={styles.detailTxt}>{props.item.affordability}</Text>
        </View>
      </Pressable>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        margin:16,
        borderRadius:8,
        overflow:'hidden',
        elevation:4,
    },
    img:{
        width:'100%',
        height:200,
       
    },
    txt:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        alignSelf:'center',
        margin:5
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:8,
    },
    detailTxt:{
        fontSize:20,
        fontWeight:'bold',
        padding:4,
    },
});