import {useLayoutEffect} from 'react';
import { FlatList, StyleSheet,SafeAreaView } from "react-native";
import { MealItem } from "../components/mealItems";
import { CATEGORIES, MEALS } from "../config/dummy-data";

export const MealsOverviewScreen = ({route,navigation})=>{
    const catId = route.params.catId; //we can use {useRoute} props for the nested components.
    const meals = MEALS.filter((mealItems)=>mealItems.categoryIds.indexOf(catId) >=0);//true if cat matched at index 0 array -1 if not matched
  
  function renderMealItem({item}){
    return <MealItem item={item}/>
  }
  useLayoutEffect(() => {
    const category = CATEGORIES.find((cat)=>cat.id===catId);
    navigation.setOptions({
        headerTitle:category.title,
    });
  }, [catId,navigation]);
  return <SafeAreaView style={styles.container}>
       <FlatList data={meals} keyExtractor={(item)=>item.id} renderItem={renderMealItem} />
    </SafeAreaView>
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },
});