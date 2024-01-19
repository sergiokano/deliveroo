import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import foodDelivery from "../assets/buildCity.gif";

const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className="bg-[#e6e6e6] justify-center items-center flex-1">
      <Animatable.Image
        source={foodDelivery}
        animation="zoomInUp"
        iterationCount={1}
        className="h-80 w-full"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
