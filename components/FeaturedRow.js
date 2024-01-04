import { View, Text } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <Text className="font-bold text-lg">{title}</Text>
      <ArrowRightIcon size={20} color="#00CCBB" />
    </View>
  );
};

export default FeaturedRow;
