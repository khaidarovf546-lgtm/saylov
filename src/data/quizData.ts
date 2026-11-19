import { QuizQuestion } from '../types/editorial';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q-1',
    number: 1,
    articleRef: '4-modda',
    articleId: 'modda-4',
    question: 'O‘zbekiston Respublikasi fuqarolari necha yoshdan boshlab saylash huquqiga ega bo‘ladi?',
    questionRu: 'С какого возраста граждане Республики Узбекистан обладают правом избирать?',
    questionEn: 'At what age do citizens of the Republic of Uzbekistan gain the right to vote?',
    options: [
      'Saylov kuniga qadar yoki saylov kuni 18 yoshga to‘lganda',
      'Saylovdan kamida 1 yil oldin 18 yoshga to‘lganda',
      'Faqat 21 yoshga to‘lganda',
      '25 yoshga to‘lganda',
    ],
    optionsRu: [
      'Достигнув 18 лет ко дню выборов или в день выборов',
      'Достигнув 18 лет минимум за 1 год до выборов',
      'Только с 21 года',
      'С 25 лет',
    ],
    optionsEn: [
      'Upon turning 18 prior to or on election day',
      'Upon turning 18 at least 1 year before election day',
      'Only upon reaching age 21',
      'Upon reaching age 25',
    ],
    correctIndex: 0,
    explanation:
      '4-moddaga ko‘ra, saylov kuniga qadar yoki saylov kuni o‘n sakkiz yoshga to‘lgan O‘zbekiston Respublikasi fuqarolari saylash huquqiga egadir.',
    explanationRu:
      'Согласно статье 4, право избирать имеют граждане, достигшие 18 лет ко дню выборов или в день выборов.',
    explanationEn:
      'Under Article 4, citizens who have reached 18 years of age prior to or on election day hold the right to vote.',
  },
  {
    id: 'q-2',
    number: 2,
    articleRef: '5-modda',
    articleId: 'modda-5',
    question: 'Fuqarolarning saylovda ishtirok etish huquqidan mahrum etilishi qanday asosda amalga oshirilishi mumkin?',
    questionRu: 'На каком основании гражданин может быть лишён права участвовать в выборах?',
    questionEn: 'On what legal basis may a citizen be deprived of the right to participate in elections?',
    options: [
      'Saylov komissiyasining ma’muriy qarori bilan',
      'Faqat qonunga muvofiq hamda sudning qarori asosida (muomalaga layoqatsiz yoki og‘ir/o‘ta og‘ir jinoyatlar uchun ozodlikdan mahrum etilganlar)',
      'Mahalla fuqarolar yig‘ini bayonnomasi bilan',
      'Siyosiy partiyalar tavsiyasi bilan',
    ],
    optionsRu: [
      'Административным решением избирательной комиссии',
      'Только по закону и решению суда (недееспособные или осуждённые к лишению свободы за тяжкие/особо тяжкие преступления)',
      'Протоколом схода граждан махалли',
      'По рекомендации политической партии',
    ],
    optionsEn: [
      'By an administrative decision of an election commission',
      'Solely pursuant to law and a court ruling (legal incapacity or imprisonment for grave/especially grave crimes)',
      'By a local community assembly protocol',
      'Upon recommendation of a political party',
    ],
    correctIndex: 1,
    explanation:
      '5-moddaga ko‘ra, faqat sud tomonidan muomalaga layoqatsiz deb topilganlar hamda og‘ir va o‘ta og‘ir jinoyatlar uchun sud hukmi bilan ozodlikdan mahrum etilganlar sud qarori asosida mahrum etilishi mumkin.',
    explanationRu:
      'Согласно статье 5, ограничение возможно исключительно на основании закона и судебного решения.',
    explanationEn:
      'Article 5 restricts deprivation strictly to statutory grounds determined by a court ruling.',
  },
  {
    id: 'q-3',
    number: 3,
    articleRef: '9-modda',
    articleId: 'modda-9',
    question: 'Qonunchilik palatasi deputatlari saylovini o‘tkazish uchun nechta hududiy bir mandatli saylov okrugi tuziladi?',
    questionRu: 'Сколько территориальных одномандатных округов образуется для выборов в Законодательную палату?',
    questionEn: 'How many territorial single-mandate districts are formed for Legislative Chamber elections?',
    options: ['50 ta', '75 ta', '100 ta', '150 ta'],
    optionsRu: ['50', '75', '100', '150'],
    optionsEn: ['50', '75', '100', '150'],
    correctIndex: 1,
    explanation:
      '9-moddaga binoan, Qonunchilik palatasi deputatlari saylovini o‘tkazish uchun yetmish beshta (75 ta) hududiy bir mandatli saylov okrugi, partiya ro‘yxati asosidagi saylov uchun esa yagona saylov okrugi tuziladi.',
    explanationRu:
      'Согласно статье 9, образуются 75 территориальных одномандатных округов (а для выборов по партийным спискам — единый округ).',
    explanationEn:
      'Under Article 9, 75 territorial single-mandate electoral districts are formed (with a single nationwide district for party lists).',
  },
  {
    id: 'q-4',
    number: 4,
    articleRef: '9-modda',
    articleId: 'modda-9',
    question: 'Bir mandatli saylov okruglaridagi saylovchilar sonining yo‘l qo‘yiladigan eng ko‘p chetga chiqishi necha foizdan oshmasligi kerak?',
    questionRu: 'Какое максимальное отклонение числа избирателей допускается в одномандатных округах?',
    questionEn: 'What is the maximum permitted voter count deviation across single-mandate districts?',
    options: ['5 foizdan', '10 foizdan', '15 foizdan', '25 foizdan'],
    optionsRu: ['5 процентов', '10 процентов', '15 процентов', '25 процентов'],
    optionsEn: ['5 percent', '10 percent', '15 percent', '25 percent'],
    correctIndex: 1,
    explanation:
      '9-modda talabiga ko‘ra, saylov okruglaridagi saylovchilar sonining yo‘l qo‘yiladigan eng ko‘p chetga chiqishi, qoida tariqasida, 10 foizdan oshmasligi kerak.',
    explanationRu:
      'По статье 9, допустимое отклонение числа избирателей, как правило, не должно превышать 10%.',
    explanationEn:
      'Article 9 stipulates that voter count deviation must, as a rule, not exceed 10 percent.',
  },
  {
    id: 'q-5',
    number: 5,
    articleRef: '9-modda',
    articleId: 'modda-9',
    question: 'Bir mandatli saylov okruglarining ro‘yxatlari saylovdan kamida necha kun oldin e’lon qilinadi?',
    questionRu: 'Не менее чем за сколько дней до выборов публикуются списки одномандатных округов?',
    questionEn: 'At least how many days before election day must single-mandate district lists be published?',
    options: ['30 kun oldin', '45 kun oldin', '60 kun oldin', 'Kamida 70 kun oldin'],
    optionsRu: ['За 30 дней', 'За 45 дней', 'За 60 дней', 'Не менее чем за 70 дней'],
    optionsEn: ['30 days before', '45 days before', '60 days before', 'At least 70 days before'],
    correctIndex: 3,
    explanation:
      '9-moddaga ko‘ra, okruglar ro‘yxatlari chegaralari, saylovchilar soni va komissiya manzili ko‘rsatilgan holda saylovdan kamida yetmish kun (70 kun) oldin e’lon qilinadi.',
    explanationRu:
      'Согласно статье 9, списки округов публикуются не менее чем за 70 дней до выборов.',
    explanationEn:
      'Under Article 9, lists of single-mandate districts are published at least 70 days before election day.',
  },
  {
    id: 'q-6',
    number: 6,
    articleRef: '10-modda',
    articleId: 'modda-10',
    question: 'Saylov uchastkalarida saylovchilar soni qoida tariqasida qanday oraliqda belgilanadi?',
    questionRu: 'В каких пределах устанавливается численность избирателей на избирательном участке?',
    questionEn: 'What is the standard voter count range per polling station?',
    options: [
      '10 nafardan 1 000 nafargacha',
      'Kamida 20 nafardan, ko‘pi bilan 3 000 nafardan oshmagan holda',
      '50 nafardan 5 000 nafargacha',
      'Cheklanmagan',
    ],
    optionsRu: [
      'От 10 до 1 000',
      'От 20 до 3 000 избирателей',
      'От 50 до 5 000',
      'Без ограничений',
    ],
    optionsEn: [
      '10 to 1,000 voters',
      'Minimum 20 and maximum 3,000 voters',
      '50 to 5,000 voters',
      'Unlimited',
    ],
    correctIndex: 1,
    explanation:
      '10-moddaga ko‘ra, saylov uchastkalari saylovga kamida 60 kun qolganida, saylovchilar soni kamida 20 nafardan va ko‘pi bilan 3 000 nafardan oshmagan holda tuziladi.',
    explanationRu:
      'По статье 10, участки образуются с числом избирателей не менее 20 и не более 3 000 человек.',
    explanationEn:
      'Article 10 specifies a minimum of 20 and a maximum of 3,000 voters per polling station.',
  },
  {
    id: 'q-7',
    number: 7,
    articleRef: '12-modda',
    articleId: 'modda-12',
    question: 'Markaziy saylov komissiyasi necha nafar a’zodan iborat tarkibda tuziladi?',
    questionRu: 'Из скольких членов состоит Центральная избирательная комиссия?',
    questionEn: 'How many members compose the Central Election Commission?',
    options: ['7 nafar', '9 nafar', '11 nafar', '15 nafar'],
    optionsRu: ['7 членов', '9 членов', '11 членов', '15 членов'],
    optionsEn: ['7 members', '9 members', '11 members', '15 members'],
    correctIndex: 1,
    explanation:
      '12-moddaga ko‘ra, Markaziy saylov komissiyasi Oliy Majlis palatalari tomonidan to‘qqiz nafar (9 nafar) a’zodan iborat tarkibda tuziladi va doimiy asosda faoliyat yuritadi.',
    explanationRu:
      'Согласно статье 12, ЦИК состоит из 9 членов и действует на постоянной основе.',
    explanationEn:
      'Under Article 12, the Central Election Commission consists of 9 permanent members elected by the Oliy Majlis chambers.',
  },
  {
    id: 'q-8',
    number: 8,
    articleRef: '13-modda',
    articleId: 'modda-13',
    question: 'Markaziy saylov komissiyasi a’zosi bo‘lish uchun minimal yosh talabi necha yosh etib belgilangan?',
    questionRu: 'Каков минимальный возрастной ценз для члена Центральной избирательной комиссии?',
    questionEn: 'What is the minimum age requirement to become a member of the Central Election Commission?',
    options: ['18 yosh', '21 yosh', '25 yosh', '30 yosh'],
    optionsRu: ['18 лет', '21 год', '25 лет', '30 лет'],
    optionsEn: ['18 years', '21 years', '25 years', '30 years'],
    correctIndex: 2,
    explanation:
      '13-moddaga binoan, Markaziy saylov komissiyasi a’zosi yigirma besh yoshga to‘lgan, kamida oxirgi besh yil O‘zbekistonda doimiy yashagan va obro‘-e’tibor qozongan fuqaro bo‘lishi kerak.',
    explanationRu:
      'По статье 13, членом ЦИК может быть гражданин, достигший 25 лет и постоянно проживающий в стране не менее 5 лет.',
    explanationEn:
      'Article 13 requires a candidate for CEC membership to be at least 25 years old with 5 years of continuous residence.',
  },
  {
    id: 'q-9',
    number: 9,
    articleRef: '81-modda',
    articleId: 'modda-81',
    question: 'Favqulodda holat amal qilishining butun muddati davomida saylovlar o‘tkaziladimi?',
    questionRu: 'Проводятся ли выборы в течение всего срока действия чрезвычайного положения?',
    questionEn: 'Are elections conducted during an active state of emergency?',
    options: [
      'Ha, faqat mahalliy Kengashlarga',
      'Yo‘q, favqulodda holat amal qilishining butun muddati davomida saylovlar o‘tkazilmaydi',
      'Faqat Prezident saylovi o‘tkaziladi',
      'Kuzatuvchilar ruxsati bilan o‘tkaziladi',
    ],
    optionsRu: [
      'Да, только в местные Кенгаши',
      'Нет, в течение всего срока чрезвычайного положения выборы не проводятся',
      'Проводятся только выборы Президента',
      'Проводятся с согласия наблюдателей',
    ],
    optionsEn: [
      'Yes, only for local Councils',
      'No, elections are not held for the entire duration of the state of emergency',
      'Only Presidential elections are held',
      'Yes, if observers approve',
    ],
    correctIndex: 1,
    explanation:
      '81-moddaga ko‘ra, O‘zbekiston Respublikasining butun hududida yoki ayrim joylarida joriy etilgan favqulodda holat amal qilishining butun muddati davomida saylovlar o‘tkazilmaydi.',
    explanationRu:
      'Согласно статье 81, на весь период чрезвычайного положения проведение выборов приостанавливается.',
    explanationEn:
      'Under Article 81, no elections may be held anywhere a state of emergency is in force for its entire duration.',
  },
  {
    id: 'q-10',
    number: 10,
    articleRef: '12-modda',
    articleId: 'modda-12',
    question: 'Ayni bir shaxs Markaziy saylov komissiyasining Raisi etib surunkasiga necha muddatdan ortiq saylanishi mumkin emas?',
    questionRu: 'Сколько сроков подряд одно и то же лицо не может превышать на посту Председателя ЦИК?',
    questionEn: 'What is the maximum consecutive term limit for the Chairperson of the Central Election Commission?',
    options: [
      'Bir muddatdan ortiq emas',
      'Ikki muddatdan ortiq emas (har biri 5 yil)',
      'Uch muddatdan ortiq emas',
      'Muddat cheklanmagan',
    ],
    optionsRu: [
      'Не более одного срока',
      'Не более двух сроков подряд (по 5 лет)',
      'Не более трёх сроков',
      'Без ограничений',
    ],
    optionsEn: [
      'One consecutive term',
      'No more than two consecutive 5-year terms',
      'Three consecutive terms',
      'No term limit',
    ],
    correctIndex: 1,
    explanation:
      '12-moddaga ko‘ra, Markaziy saylov komissiyasining Raisi 5 yillik muddatga saylanadi va ayni bir shaxs surunkasiga ikki muddatdan ortiq Rais etib saylanishi mumkin emas.',
    explanationRu:
      'По статье 12, Председатель ЦИК избирается на 5 лет и не может занимать этот пост более двух сроков подряд.',
    explanationEn:
      'Article 12 sets a 5-year term and prohibits the same person from serving more than two consecutive terms as Chairperson.',
  },
];
