import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"

import { AntDesign } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  title: string
  iconsName: string
  iconSize: number
  iconsColor: string
}

export function ButtonIcons({ title, iconsName, iconSize, iconsColor, ...rest }: Props) {
  return (
    <View className="-mt-200">
    <TouchableOpacity
      activeOpacity={0.7}
      className="bg-slate-200 items-center justify-center rounded-md w-52 h-12"
      {...rest}
    >
      <Text className="text-black text-lg font-semiBold">
      <AntDesign name={iconsName as any} size={iconSize} color={iconsColor}/>
    
        {title}
      </Text>
    </TouchableOpacity>
    </View>
  )
}