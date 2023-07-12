import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Pressable,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { Stack, useRouter, Redirect, Link } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { ScreenHeaderBtn, Welcome, Button, ImageViewer } from "../components";
import { ImageBackground } from "react-native-web";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handlePress = () => {
    return <Redirect href="/mint" />;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          //ADD WALLET FUNCTIONALITIES ON LEFT
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            //PLACEHOLDER ICON FOR NOW
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <View style={{ paddingTop: 50 }}>
            <Link href="/mint" asChild>
              <Pressable>
                <Image
                  style={{
                    width: 340,
                    height: 300,
                  }}
                  source={require("../assets/images/nft02.jpeg")}
                />
                <View
                  style={{
                    position: "absolute",
                    top: 250,
                    left: 0,
                    right: 200,
                    bottom: 0,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>Mint</Text>
                </View>
              </Pressable>
            </Link>
          </View>
          <View style={{ paddingTop: 50 }}>
            <Link href="/market" asChild>
              <Pressable>
                <Image
                  style={{
                    width: 340,
                    height: 300,
                  }}
                  source={require("../assets/images/nft04.jpeg")}
                />
                <View
                  style={{
                    position: "absolute",
                    top: 250,
                    left: 0,
                    right: 200,
                    bottom: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 100,
                  }}
                >
                  <Text>Market</Text>
                </View>
              </Pressable>
            </Link>
          </View>
          <View style={{ paddingTop: 50 }}>
            <Link href="/view" asChild>
              <Pressable>
                <Image
                  style={{
                    width: 340,
                    height: 300,
                  }}
                  source={require("../assets/images/nft03.jpeg")}
                />
                <View
                  style={{
                    position: "absolute",
                    top: 250,
                    left: 0,
                    right: 200,
                    bottom: 0,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>View</Text>
                </View>
              </Pressable>
            </Link>
          </View>
        </View>
      </ScrollView>
      {/* <FlatList
        data={nftData}
        renderItem={({ item }) => <NFTCard data={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        //ListHeaderComponent={< onSearch={handleSearch} />}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },

  item: {
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "orange",
    position: "relative",
    margin: 10,
  },

  image: {
    flex: 1,
  },
});

export default Home;
