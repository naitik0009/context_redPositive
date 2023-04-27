import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CategoryScreen } from '../screens/categories';
import { MealDetailsScreen } from '../screens/mealDetails';
import { MealsOverviewScreen } from '../screens/meals';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavouriteScreen } from '../screens/favourite';
import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
const option = {
    headerStyle:{backgroundColor:'#351401'},
    headerTintColor:'white',
    contentStyle:{backgroundColor:'#3f2f25'}
};
const drawerOptions={
    headerStyle:{backgroundColor:'#351401'},
    headerTintColor:'white',
    contentStyle:{backgroundColor:'#3f2f25'},
    sceneContainerStyle:{backgroundColor:'#3f2f25'},
    drawerActiveBackgroundColor:'#e4baa1',
    drawerContentStyle:{backgroundColor:'#351401'},
    drawerInactiveTintColor:'white'
};
function DrawerNavigationScreen(){
    return <Drawer.Navigator  screenOptions={drawerOptions}>
        <Drawer.Screen component={CategoryScreen} name='Home' options={{drawerIcon:({color,size})=><Icon name='list' color={color} size={size}/>}}/>
        <Drawer.Screen component={FavouriteScreen} name='Favourite' options={{drawerIcon:({color,size})=><Icon name='star' color={color} size={size}/>}}/>
    </Drawer.Navigator>
};

export const NavigatiosScreens = ()=>{

    return (
        <Stack.Navigator initialRouteName='Drawer' screenOptions={option}>
            <Stack.Screen options={{headerShown:false}} name='Drawer' component={DrawerNavigationScreen} />
            <Stack.Screen options={{headerTitleAlign:'center'}} name='Meals' component={MealsOverviewScreen} />
            <Stack.Screen options={{headerTitleAlign:'center'}} name='Details' component={MealDetailsScreen} />
        </Stack.Navigator>
    );
};