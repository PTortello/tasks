import { Alert } from "react-native";

const showError = (err: any) => {
  Alert.alert('Ocorreu um erro!', `Mensagem: ${err}`);
}

const showSuccess = (msg: any) => {
  Alert.alert('Sucesso!', msg);
}

export { showError, showSuccess };
