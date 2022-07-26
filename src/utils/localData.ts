import { MMKVLoader } from "react-native-mmkv-storage";

const MMKV = new MMKVLoader().initialize();

export const setLocalData = async (key: string, value: any) => {
  await MMKV.setStringAsync(key, JSON.stringify(value));
}

export const getLocalData = async (key: string) => {
  const valueStr = await MMKV.getStringAsync(key);
  const value = valueStr && JSON.parse(valueStr);
  return value;
}

export const removeLocalData = async (key: string) => {
  await MMKV.removeItem(key);
}
