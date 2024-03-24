import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Welcome } from '../screens/welcome'
import { Onboarding } from '../screens/onboarding'
import { Sing } from '../screens/sing'
import { SingUp } from '../screens/singUp'
import { SingIn } from '../screens/singIn'

const { Screen, Navigator } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen name='Welcome' component={Welcome}/>
            <Screen name='Onboarding' component={Onboarding}/>
            <Screen name='Sing' component={Sing}/>
            <Screen name='SingUp' component={SingUp}/>
            <Screen name='SingIn' component={SingIn}/>
        </Navigator>
    )
}