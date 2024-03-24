import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <View className="flex-1 items-center ">
    <TouchableOpacity
      activeOpacity={0.7}
      className="items-center justify-center rounded-md "
      {...rest}
    >
      <Text className="text-white text-sm font-semiBold uppercase">
        {title}
      </Text>
    </TouchableOpacity>
    </View>
  )
}