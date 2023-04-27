import { useEffect } from 'react';
import {FlatList,View} from 'react-native';
import { MEALS } from '../config/dummy-data';
import { useContext } from 'react';
import { FavouriteContext } from '../context/context';
import { MealItem } from '../components/mealItems';
export const FavouriteScreen = ()=>{
    
    const {ids} = useContext(FavouriteContext);
    const favMeal = MEALS.filter(meal=>ids.includes(meal.id));

useEffect(() => {
  return () => {
    console.log('cleanup');
  }
}, [ids]);

    return (
    <View>
        <FlatList data={favMeal}  renderItem={(item,index)=>{
            console.log(item);
            return <MealItem key={index} item={item.item}/>
            }}/>
        {/* {favMeal.map((item,index)=><Text key={index}>{item.imageUrl}</Text>)} */}
    </View>
    );
};