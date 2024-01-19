import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import foodDelivery from "../assets/buildCity.gif";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery");
        }, 4000);
    }, []);


  return (
    <SafeAreaView className="bg-[#e6e6e6] justify-center items-center flex-1">
      <Animatable.Image
        source={foodDelivery}
        animation="zoomInUp"
        iterationCount={1}
        className="h-80 w-full"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-[#00CCBB] font-bold text-center"
      >
        Waiting for Restaurant to confirm your order...
      </Animatable.Text>
      <Progress.Circle size={30} indeterminate={true} borderWidth={1} color="#00CCBB" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
