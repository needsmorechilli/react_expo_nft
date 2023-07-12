import { Buffer } from "buffer";
// import 'react-native-crypto';
import "react-native-get-random-values";

// Place the App component import below your polyfill imports!
//import App from "./App";

import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/home" />;
}
