import { View, Text } from "react-native";
import React from "react";
import { GalleryButton } from "../components";
import { Link, Navigator } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

import ImageViewer from "../components/imageViewer";
import Button from "../components/Button";

const placeholderImage = require("../assets/images/nft06.jpeg");

export default function Mint() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const logImage = async () => {
    console.log(selectedImage); //this is what i want but using params its telling me its a url(?)
    //sample data: file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540livinoffwater%252Fjobsift/ImagePicker/1e4903fe-6094-4cfa-b7dd-35d75d75e9d2.jpeg
    console.log(setSelectedImage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={placeholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button
          label="Choose a photo"
          theme="primary"
          onPress={pickImageAsync}
        />
        <Link
          href={{ pathname: "/mintData", params: { id: setSelectedImage } }}
          asChild
        >
          <Button label="Use this photo" onPress={logImage} />
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
