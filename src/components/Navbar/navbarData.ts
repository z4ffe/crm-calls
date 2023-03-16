import briefCasee from '../../assets/images/navbar/briefcase-outline.svg'
import calls from '../../assets/images/navbar/calls-24px.svg'
import chart from '../../assets/images/navbar/chart-timeline-variant.svg'
import documents from '../../assets/images/navbar/documents-24px.svg'
import library from '../../assets/images/navbar/local_library_black_24dp.svg'
import mail from '../../assets/images/navbar/mail_outline-24px.svg'
import orders from '../../assets/images/navbar/orders-24px.svg'
import people from '../../assets/images/navbar/people-24px.svg'
import perm from '../../assets/images/navbar/perm_identity_black_24dp.svg'
import settings from '../../assets/images/navbar/settings-24px.svg'

export interface INavbarData {
   id?: number
   name: string
   img: string
}

const navbarData: INavbarData[] = [
   {
      id: 1,
      name: 'Итоги',
      img: chart,
   },
   {
      id: 2,
      name: 'Заказы',
      img: orders,
   },
   {
      id: 3,
      name: 'Сообщения',
      img: mail,
   },
   {
      id: 4,
      name: 'Звонки',
      img: calls,
   },
   {
      id: 5,
      name: 'Контрагенты',
      img: people,
   },
   {
      id: 6,
      name: 'Документы',
      img: documents,
   },
   {
      id: 7,
      name: 'Исполнители',
      img: perm,
   },
   {
      id: 8,
      name: 'Отчёты',
      img: briefCasee,
   },
   {
      id: 9,
      name: 'База знаний',
      img: library,
   },
   {
      id: 10,
      name: 'Настройки',
      img: settings,
   },
]

export default navbarData
