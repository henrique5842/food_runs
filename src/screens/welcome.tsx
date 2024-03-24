import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Pattern from "../assets/Pattern.png"
import Ilustartion from "../assets/Illustartion.png"

import { Button } from "../components/Button";

import { AntDesign } from '@expo/vector-icons';


export function Welcome () {
    const navigation = useNavigation()
    function openOnboarding() {
        navigation.navigate('Onboarding')
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
            source={Ilustartion} 
            className="justify-centers w-[410px] h-[400px] mt-16 mb-3 "
            /> 

            <Text className="text-center font-Black text-xl mb-5">
            Selecione seus {'\n'}menus Favoritos
            </Text>

            <Text className="text-center font-regular text-base mb-5">
            Agora coma bem, não saia de casa, você pode {'\n'}escolha sua comida favorita apenas com {'\n'}um clique
            </Text>

            <Button title="Proximo" onPress={openOnboarding} className="h-12 w-28  bg-red-600 "/>

            <View className="flex flex-row mt-24 px-7 ">
            <TouchableOpacity onPress={OpenSing}>
                <Text className="font-regular text-base">
                    Pular
                </Text>
                </TouchableOpacity>
                <View className="bg-red-600 w-3 h-3 rounded-full ml-[35%] "/>
                <View className="bg-zinc-300 w-3 h-3 rounded-full ml-2"/>
                <View className="ml-32 items-end" />
                <AntDesign name="arrowright" size={25}  color="red" onPress={openOnboarding}/>
            </View>
        </View>
    )
}