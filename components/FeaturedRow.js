import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>

        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>
      <Text className="text-gray-500 text-xs px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Restaurant"
          rating={4.5}
          genre="American"
          address="123 Main St"
          short_description="Short description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
