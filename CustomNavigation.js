import React from "react";
import Discover from "./src/screens/DiscoverScreen";
import Sports from "./src/screens/SportsScreen";
import Technology from "./src/screens/TechnologyScreen";
import Business from "./src/screens/BusinessScreen";
import Politics from "./src/screens/PoliticsScreen";
import Science from "./src/screens/ScienceScreen";
import Entertainment from "./src/screens/EntertainmentScreen"

import { createStackNavigator } from "@react-navigation/stack";
const stack = createStackNavigator();
const DiscoverNavigator = ()=>
{
return(
<stack.Navigator >
    <stack.Screen name = "Discover" component={Discover} options={{headerShown:false}}/>
    <stack.Screen name = "Sports" component={Sports} options={{headerShown:false}}/>
    <stack.Screen name = "Technology" component={Technology} options={{headerShown:false}}/>
    <stack.Screen name = "Business" component={Business} options={{headerShown:false}}/>
    <stack.Screen name = "Science" component={Science} options={{headerShown:false}}/>
    <stack.Screen name = "Politics" component={Politics} options={{headerShown:false}}/>
    <stack.Screen name = "Entertainment" component={Entertainment} options={{headerShown:false}}/>
</stack.Navigator>
)
}
export default DiscoverNavigator;