import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Props {
  value?: string;
  placeholder: string;
  onTextChange?: (text: string) => void;
  onPress?: () => void;
  showIcon?: boolean;
}

const SearchBar = ({
  onPress,
  placeholder,
  onTextChange,
  value,
  showIcon = true,
}: Props) => {
  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper
      className="flex-row items-center bg-dark-200 rounded-full px-5 py-4"
      {...(onPress ? { onPress, activeOpacity: 0.7 } : {})}
    >
      {onPress ? (
        <Text className="flex-1 text-[#A8B5DB] text-base">{placeholder}</Text>
      ) : (
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#A8B5DB"
          className="flex-1 text-white text-base"
          value={value}
          onChangeText={onTextChange}
          autoCorrect={false}
          autoCapitalize="none"
          style={{ padding: 0, margin: 0 }}
        />
      )}

      {showIcon && (
        <Image
          source={icons.search}
          className="w-5 h-5 ml-2"
          resizeMode="contain"
          tintColor="#A8B5DB"
        />
      )}
    </Wrapper>
  );
};

export default SearchBar;
