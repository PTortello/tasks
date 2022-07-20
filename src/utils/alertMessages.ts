import { Alert } from "react-native";

export const showError = (err: any) => {
  Alert.alert('Ocorreu um erro!', `Mensagem: ${err}`);
}

export const showSuccess = (msg: any) => {
  Alert.alert('Sucesso!', msg);
}
