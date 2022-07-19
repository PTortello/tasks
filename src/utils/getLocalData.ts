import { MMKVLoader } from "react-native-mmkv-storage";

const MMKV = new MMKVLoader().initialize();

export default async () => {
  const stateStr = await MMKV.getStringAsync('state');
  const state = stateStr && JSON.parse(stateStr);
  return state;
}
