import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Pattern from "../assets/Pattern.png"
import Comida from "../assets/comida.png"

import { Button } from "../components/Button";

import { AntDesign } from '@expo/vector-icons';



export function Onboarding () {
    const navigation = useNavigation()
    function closeWelcome() {
        navigation.navigate('Welcome')
    }
    function OpenSing() {
        navigation.navigate('Sing')
    }

    return(
        <View className="flex-1 bg-white">
            <Image 
            source={Pattern}
             className="w-[100%] mt-1"
             />

            <Image 
            source={Comida} 
            className="justify-centers w-[410px] h-[405px] mt-16 mb-8"
            /> 

            <Text className="text-center font-Black text-xl mb-5">
            Boa comida a um {'\n'} preço barato
            </Text>

            <Text className="text-center font-regular text-base mb-5">
            Você pode comer em restaurantes {'\n'} caros com preço acessível
            </Text>

            <Button title="Proximo" onPress={OpenSing} className="h-12 w-28 bg-red-600 text-white"/>

            <View className="flex flex-row mt-24 px-7 ">
                <TouchableOpacity onPress={closeWelcome}>
                <Text className="font-regular text-base">
                    Voltar
                </Text>
                </TouchableOpacity>
                <View className="bg-zinc-300 w-3 h-3 rounded-full ml-[35%] "/>
                <View className="bg-red-600 w-3 h-3 rounded-full ml-2"/>
                <View className="ml-32 items-end" />
                <AntDesign name="arrowright" size={25}  color="red" onPress={OpenSing}/>
            </View>
        </View>
    )
}