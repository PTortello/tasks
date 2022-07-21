import today from '../../assets/imgs/today.jpg';
import tomorrow from '../../assets/imgs/tomorrow.jpg';
import week from '../../assets/imgs/week.jpg';
import month from '../../assets/imgs/month.jpg';
import global from 'styles/global';

export default [
  {
    backgroundColor: global.colors.today,
    daysAhead: 0,
    image: today,
    title: 'Hoje'
  },
  {
    backgroundColor: global.colors.tomorrow,
    daysAhead: 1,
    image: tomorrow,
    title: 'Amanhã'
  },
  {
    backgroundColor: global.colors.week,
    daysAhead: 7,
    image: week,
    title: 'Semana'
  },
  {
    backgroundColor: global.colors.month,
    daysAhead: 30,
    image: month,
    title: 'Mês'
  }
]
