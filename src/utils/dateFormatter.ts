import moment from 'moment';
import 'moment/locale/pt-br'; 

export default (date?: Date) => {
  return moment(date).locale('pt-br').format('ddd, D [de] MMMM');
}
