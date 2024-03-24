import { View, Text, Image, } from "react-native"
import { useNavigation } from "@react-navigation/native";

import Logo from "../assets/logo.png"
import Background from "../assets/background.png"

import { Button } from "../components/Button"

export function Sing() {
    const navigation = useNavigation()
    function openSingup() {
        navigation.navigate('SingUp')
    }

    function openSingin() {
        navigation.navigate('SingIn')
    }
    return (
        <View className="flex-1 bg-white">
            <Image  source={Logo} className="h-[460px] w-[425px] mb-5"/>
            <Text className="text-red-600 font-Black text-3xl text-center mb-16">Food Runs</Text>
            <View className="flex-1 bg-zinc-50 w-full h-[30%] rounded-3xl ">
                <Image source={Background} className="w-full "/>
                <Text className="font-bold text-3xl text-center -mt-40">
                    Bem vindo ao {'\n'} Food Runs
                </Text>
                <Button title="Cadastra-SE" className="bg-red-600  w-96 h-14 mt-5 rounded-xl" onPress={openSingup}/>
                <Button title="Entrar" className="bg-red-600  w-96 h-14 rounded-xl mt-2" onPress={openSingin}/>

            </View>
        </View>
    )
}