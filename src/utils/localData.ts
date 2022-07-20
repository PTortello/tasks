import { MMKVLoader } from "react-native-mmkv-storage";

const MMKV = new MMKVLoader().initialize();

export const getLocalData = async () => {
  const stateStr = await MMKV.getStringAsync('state');
  const state = stateStr && JSON.parse(stateStr);
  return state;
}

export const setLocalData = async (state: any) => {
  await MMKV.setStringAsync('state', JSON.stringify(state));
}
