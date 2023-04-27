import {CATEGORIES} from '../config/dummy-data';
import {FlatList, SafeAreaView} from 'react-native';
import {CategoryItems} from '../components/category.items';



export const CategoryScreen = ({navigation}) => {
    function renderItem({item}) {
        const pressHandler = ()=>{
            navigation.navigate('Meals',{catId:item.id});
        }
          return (
          <CategoryItems
            title={item.title}
            onPress={pressHandler}
            color={item.color}
            key={item.index}
          />
        );
      }
  return (
    <SafeAreaView style={{backgroundColor: '#24180f'}}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
