import { Buffer } from "buffer";
import "react-native-get-random-values";

import { Pressable, View, Text } from "react-native";
import { useState, useEffect } from "react";
import { Connection, Keypair } from "@solana/web3.js";
import * as FileSystem from "expo-file-system";
import { transact } from "@solana-mobile/mobile-wallet-adapter-protocol";
import { Transaction } from "@solana-mobile/mobile-wallet-adapter-protocol-web3js";
import * as Crypto from "expo-crypto";
import {
  toMetaplexFile,
  Metaplex,
  keypairIdentity,
  bundlrStorage,
} from "@metaplex-foundation/js";

export default function MintData() {
  const [wallet, setWallet] = useState(/* initialize your wallet value here */);
  const [storage, setStorage] = useState(null);
  const [metaplex, setMetaplex] = useState(null);

  useEffect(() => {
    const setupMetaplex = async () => {
      const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
      const connection = new Connection("https://api.devnet.solana.com", {
        commitment: "confirmed",
      });
      const metaplexInstance = Metaplex.make(connection)
        .use(keypairIdentity(keypair))
        .use(
          bundlrStorage({
            address: "https://devnet.bundlr.network",
            providerUrl: "https://api.devnet.solana.com",
            timeout: 60000,
          })
        );

      setMetaplex(metaplexInstance);
    };

    setupMetaplex();
  }, [wallet]);

  const createImage = async () => {
    try {
      const image = await FileSystem.readAsStringAsync(
        "../assets/images/nft05.jpeg",
        {
          encoding: FileSystem.EncodingType.Base64,
        }
      );
      const metaplexImage = toMetaplexFile(image, "nft05.png");
      const uri = await storage.upload(metaplexImage);
      console.log("uri", uri);
    } catch (error) {
      console.log(`Oops, something went wrong: ${error}`);
    }
  };

  return (
    <View>
      <Pressable>
        <Text> Testing</Text>
      </Pressable>
    </View>
  );
}
