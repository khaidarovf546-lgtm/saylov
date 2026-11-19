import { ElectionArticle, FaqItem, GlossaryItem, PillarId } from '../types/editorial';

export interface EditorialPillar {
  id: PillarId;
  index: string;
  categoryLabel: string;
  categoryLabelRu: string;
  categoryLabelEn: string;
  title: string;
  titleRu: string;
  titleEn: string;
  description: string;
  descriptionRu: string;
  descriptionEn: string;
  divisionRange: string;
  defaultArticleId: string;
}

export const EDITORIAL_PILLARS: EditorialPillar[] = [
  {
    id: 'kodeks',
    index: '01',
    categoryLabel: 'I, III VA IV BO‘LIMLAR',
    categoryLabelRu: 'РАЗДЕЛЫ I, III И IV',
    categoryLabelEn: 'DIVISIONS I, III & IV',
    title: 'Saylov kodeksi',
    titleRu: 'Избирательный кодекс',
    titleEn: 'The Election Code',
    description: 'O‘zbekiston Respublikasida saylov jarayonining huquqiy asoslari va asosiy qoidalari.',
    descriptionRu: 'Правовые основы и ключевые положения избирательного процесса в Республике Узбекистан.',
    descriptionEn: 'Legal foundations and core provisions governing the electoral process in the Republic of Uzbekistan.',
    divisionRange: '1, 2, 3, 81, 9, 10-moddalar',
    defaultArticleId: 'modda-1',
  },
  {
    id: 'huquq',
    index: '02',
    categoryLabel: 'II BO‘LIM · KONSTITUTSIYAVIY KAFOLAT',
    categoryLabelRu: 'РАЗДЕЛ II · КОНСТИТУЦИОННЫЕ ГАРАНТИИ',
    categoryLabelEn: 'DIVISION II · CONSTITUTIONAL GUARANTEES',
    title: 'Saylov huquqi',
    titleRu: 'Избирательное право',
    titleEn: 'Electoral Rights',
    description: 'Fuqarolarning saylash va saylanish huquqlari, tenglik va erkinlik prinsiplari.',
    descriptionRu: 'Права граждан избирать и быть избранными, принципы равенства и свободы волеизъявления.',
    descriptionEn: 'Citizens’ rights to vote and stand for election, grounded in equality, directness, and secrecy.',
    divisionRange: '4, 5, 6, 7, 8-moddalar',
    defaultArticleId: 'modda-4',
  },
  {
    id: 'komissiyalar',
    index: '03',
    categoryLabel: 'V BO‘LIM · TASHKILIY TIZIM',
    categoryLabelRu: 'РАЗДЕЛ V · ОРГАНИЗАЦИОННАЯ СИСТЕМА',
    categoryLabelEn: 'DIVISION V · INSTITUTIONAL SYSTEM',
    title: 'Saylov komissiyalari',
    titleRu: 'Избирательные комиссии',
    titleEn: 'Election Commissions',
    description: 'Saylov jarayonini tashkil etuvchi komissiyalar va ularning vakolatlari.',
    descriptionRu: 'Система комиссий, организующих выборы, и их полномочия на всех уровнях.',
    descriptionEn: 'The five-tier commission system organizing elections, membership rules, and mandates.',
    divisionRange: '11, 12, 13, 14-moddalar',
    defaultArticleId: 'modda-11',
  },
  {
    id: 'izohlar',
    index: '04',
    categoryLabel: 'DOKTRINAL VA AMALIY SHARH',
    categoryLabelRu: 'ДОКТРИНАЛЬНЫЙ И ПРАКТИЧЕСКИЙ КОММЕНТАРИЙ',
    categoryLabelEn: 'LEGAL COMMENTARY & PRACTICE',
    title: 'Yurist izohlari',
    titleRu: 'Комментарии юриста',
    titleEn: 'Legal Commentaries',
    description: 'Murakkab huquqiy normalarning sodda va tushunarli sharhlari.',
    descriptionRu: 'Ясные и доступные разъяснения сложных правовых норм Избирательного кодекса.',
    descriptionEn: 'Clear, accessible legal explanations of complex electoral norms and practical safeguards.',
    divisionRange: '14 ta modda sharhi · FAQ · Lug‘at',
    defaultArticleId: 'modda-1',
  },
];

export const PHOTO_ARCHIVE = [
  {
    id: 'fig-1',
    figureNo: 'FIG. 01',
    src: '/assets/aistudio/WFzrKNNBufVceB8NjYVBPF2eEyEHk4yJ_318201ec.webp',
    alt: 'Saylov uchastkasida fuqaroning shaffof saylov qutisiga byulleten tashlash jarayoni',
    caption: 'Saylov uchastkasida fuqarolarning ovoz berish jarayoni — yashirin ovoz berish kabinalari va shaffof saylov qutisi.',
    captionRu: 'Процесс голосования граждан на избирательном участке — кабины тайного голосования и прозрачная урна.',
    captionEn: 'Citizens casting ballots at a polling station — secret voting booths and transparent ballot box.',
    articleId: 'modda-7',
  },
  {
    id: 'fig-2',
    figureNo: 'FIG. 02',
    src: '/assets/aistudio/doska_08fbf89c.jpg',
    alt: 'Saylov uchastkasidagi nomzodlar va siyosiy partiyalarning saylovoldi dasturlari taxtasi',
    caption: 'Nomzodlar hamda siyosiy partiyalarning saylovoldi dasturlari haqida ochiq axborot taxtasi.',
    captionRu: 'Информационный стенд с данными о кандидатах и предвыборных программах политических партий.',
    captionEn: 'Public information board displaying registered candidates and political party election programs.',
    articleId: 'modda-8',
  },
  {
    id: 'fig-3',
    figureNo: 'FIG. 03',
    src: '/assets/aistudio/o_tkazish_30c7b27c.webp',
    alt: 'Uchastka saylov komissiyasi a’zolari saylov qutisini muhrlash va tekshirish jarayonida',
    caption: 'Saylov komissiyasi a’zolari tomonidan ovoz berish boshlanishidan avval saylov qutisining ochiq tekshirilishi.',
    captionRu: 'Открытая проверка и опечатывание избирательной урны членами комиссии перед началом голосования.',
    captionEn: 'Election commission members inspecting and sealing a transparent ballot box in open view.',
    articleId: 'modda-11',
  },
  {
    id: 'fig-4',
    figureNo: 'FIG. 04',
    src: '/assets/aistudio/qasamyod_35220883.jpg',
    alt: 'Saylov uchastkasi ochilishida komissiya a’zolari va kuzatuvchilar davlat madhiyasi ijro etilayotgan paytda',
    caption: 'Saylov uchastkasining tantanali ochilishi: uchastka saylov komissiyasi a’zolari va kuzatuvchilar ishtirokida.',
    captionRu: 'Торжественное открытие избирательного участка с участием членов комиссии и наблюдателей.',
    captionEn: 'Opening ceremony at a polling station with commission members and accredited observers.',
    articleId: 'modda-10',
  },
  {
    id: 'fig-5',
    figureNo: 'FIG. 05',
    src: '/assets/aistudio/chet_el_80c2c82d.jpg',
    alt: 'Chet davlatdagi diplomatik vakolatxona huzuridagi saylov uchastkasida ovoz berish',
    caption: 'Xorijiy davlatlardagi diplomatik vakolatxonalar huzurida tashkil etilgan saylov uchastkasida ovoz berish jarayoni.',
    captionRu: 'Голосование на избирательном участке при дипломатическом представительстве за рубежом.',
    captionEn: 'Voting at a polling station established at an Uzbekistan diplomatic mission abroad.',
    articleId: 'modda-10',
  },
];

export const ELECTION_ARTICLES: ElectionArticle[] = [
  {
    id: 'modda-1',
    numberLabel: '1-modda',
    articleNumber: 1,
    divisionId: 'bolim-1',
    divisionTitle: 'I BO‘LIM. UMUMIY QOIDALAR',
    pillarId: 'kodeks',
    title: 'Ushbu Kodeks bilan tartibga solinadigan munosabatlar',
    titleRu: 'Отношения, регулируемые настоящим Кодексом',
    titleEn: 'Relations Regulated by This Code',
    leadSummary: 'Kodeks qaysi saylovlarga tayyorgarlik ko‘rish va ularni o‘tkazish munosabatlarini tartibga solishini belgilaydi.',
    leadSummaryRu: 'Определяет круг выборов и отношений, регулируемых Избирательным кодексом.',
    leadSummaryEn: 'Defines the scope of elections and legal guarantees regulated by the Election Code.',
    blocks: [
      {
        type: 'paragraph',
        runs: [
          {
            text: 'Ushbu Kodeks O‘zbekiston Respublikasi Prezidenti, O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi deputatlari, O‘zbekiston Respublikasi Oliy Majlisi Senati a’zolari, xalq deputatlari viloyat, tuman va shahar Kengashlari deputatlari saylovlariga tayyorgarlik ko‘rish va ularni o‘tkazish bilan bog‘liq munosabatlarni tartibga soladi hamda O‘zbekiston Respublikasi fuqarolarining xohish-irodasi erkin bildirilishini ta’minlovchi kafolatlarni belgilaydi.',
          },
        ],
      },
      {
        type: 'table',
        caption: 'Kodeks qamrab oladigan saylovlar:',
        headers: ['Saylov turi', 'Saylanadigan organ'],
        rows: [
          ['Prezident saylovi', 'O‘zbekiston Respublikasi Prezidenti'],
          ['Qonunchilik palatasi saylovi', 'Oliy Majlis Qonunchilik palatasi deputatlari'],
          ['Senat saylovi', 'Oliy Majlis Senati a’zolari'],
          ['Mahalliy Kengashlar saylovi', 'Viloyat, tuman, shahar xalq deputatlari Kengashlari deputatlari'],
        ],
      },
    ],
    lawyerCommentary:
      'Kodeksning 1-moddasi uning predmetini belgilaydi — ya’ni qaysi munosabatlar ushbu hujjat bilan tartibga solinishini ko‘rsatadi. Bu norma Kodeksning butun tizimini tushunish uchun boshlang‘ich nuqtadir.',
    lawyerCommentaryRu:
      'Статья 1 Кодекса определяет его предмет — какие именно общественные отношения регулируются данным документом. Эта норма является отправной точкой для понимания всей системы Кодекса.',
    lawyerCommentaryEn:
      'Article 1 establishes the subject matter of the Code — specifying which elections and legal relations fall under its authority. It serves as the foundational starting point for the entire Code.',
    quickFacts: [
      { label: 'Bo‘lim', value: 'I Bo‘lim · Umumiy qoidalar' },
      { label: 'Qamrov', value: '4 turdagi saylovlar' },
      { label: 'Asosiy maqsad', value: 'Xohish-iroda erkinligi kafolati' },
    ],
  },
  {
    id: 'modda-2',
    numberLabel: '2-modda',
    articleNumber: 2,
    divisionId: 'bolim-1',
    divisionTitle: 'I BO‘LIM. UMUMIY QOIDALAR',
    pillarId: 'kodeks',
    title: 'Saylov to‘g‘risidagi qonunchilik',
    titleRu: 'Законодательство о выборах',
    titleEn: 'Legislation on Elections',
    leadSummary: 'Saylov to‘g‘risidagi qonunchilik hujjatlarining ierarxik tarkibini belgilaydi.',
    leadSummaryRu: 'Закрепляет иерархическую систему нормативно-правовых актов о выборах.',
    leadSummaryEn: 'Establishes the hierarchical structure of electoral legislation.',
    blocks: [
      {
        type: 'paragraph',
        runs: [{ text: 'Saylov to‘g‘risidagi qonunchilik quyidagilardan iborat:' }],
      },
      {
        type: 'list',
        ordered: true,
        items: [
          [
            { text: 'O‘zbekiston Respublikasining Konstitutsiyasi', bold: true },
            { text: ' — asosiy qonun, saylov huquqining konstitutsiyaviy asosi;' },
          ],
          [
            { text: 'Ushbu Kodeks', bold: true },
            { text: ' — saylov jarayonini batafsil tartibga soluvchi asosiy hujjat;' },
          ],
          [
            { text: 'O‘zbekiston Respublikasining boshqa qonunchilik hujjatlari', bold: true },
            { text: ' — tegishli qonunlar va normativ hujjatlar.' },
          ],
        ],
      },
    ],
    lawyerCommentary:
      'Qonunchilik tizimi ierarxik tuzilgan. Konstitutsiya eng yuqori kuchga ega, undan keyin Kodeks va boshqa qonunlar turadi. Bu ierarxiya saylov jarayonida huquqiy ziddiyat yuzaga kelganda qo‘llaniladi.',
    lawyerCommentaryRu:
      'Система законодательства построена иерархически. Конституция обладает высшей юридической силой, за ней следуют Кодекс и иные законы. Эта иерархия применяется при возникновении правовых коллизий.',
    lawyerCommentaryEn:
      'The legislative framework is structured hierarchically: the Constitution holds supreme legal authority, followed by the Election Code and other laws, resolving any legal conflicts during elections.',
    quickFacts: [
      { label: 'Eng yuqori kuch', value: 'Konstitutsiya' },
      { label: 'Asosiy hujjat', value: 'Saylov kodeksi' },
      { label: 'Qo‘llanilishi', value: 'Huquqiy ziddiyatlarda' },
    ],
  },
  {
    id: 'modda-3',
    numberLabel: '3-modda',
    articleNumber: 3,
    divisionId: 'bolim-1',
    divisionTitle: 'I BO‘LIM. UMUMIY QOIDALAR',
    pillarId: 'kodeks',
    title: 'O‘zbekiston Respublikasida saylov o‘tkazishning asosiy prinsiplari',
    titleRu: 'Основные принципы проведения выборов в Республике Узбекистан',
    titleEn: 'Fundamental Principles of Conducting Elections',
    leadSummary: 'Demokratik saylovlarning beshta tayanch prinsipini va ularning mazmunini belgilaydi.',
    leadSummaryRu: 'Устанавливает пять фундаментальных принципов демократических выборов.',
    leadSummaryEn: 'Sets forth the five core democratic principles governing all elections.',
    blocks: [
      {
        type: 'paragraph',
        runs: [
          { text: 'O‘zbekiston Respublikasida saylov ' },
          { text: 'umumiy, teng, to‘g‘ridan-to‘g‘ri saylov huquqi', bold: true },
          { text: ' asosida ' },
          { text: 'yashirin ovoz berish', bold: true },
          { text: ' orqali o‘tkaziladi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Saylov ' },
          { text: 'ochiq va oshkora', bold: true },
          { text: ' o‘tkaziladi.' },
        ],
      },
      {
        type: 'table',
        caption: 'Asosiy prinsiplar tizimi:',
        headers: ['Prinsiplar', 'Mazmuni', 'Kodeks moddasi'],
        rows: [
          ['Umumiylik', 'Saylovlarda keng fuqarolar qatlami ishtirok etadi', '4-modda'],
          ['Tenglik', 'Har bir fuqaro bir ovozga ega', '5-modda'],
          ['To‘g‘ridan-to‘g‘rilik', 'Deputatlar va Prezident bevosita saylanadi', '6-modda'],
          ['Yashirin ovoz berish', 'Saylovchining xohish-irodasi ustidan nazorat yo‘q', '7-modda'],
          ['Ochiqlik va oshkoralik', 'Saylov komissiyalari ochiq ishlaydi', '8-modda'],
        ],
      },
    ],
    lawyerCommentary:
      'Bu besh prinsip — saylovning demokratik xususiyatini belgilovchi asosiy kafolatlardir. Ularning har biri Kodeksning alohida moddalarida batafsil ochib berilgan.',
    lawyerCommentaryRu:
      'Эти пять принципов — ключевые гарантии, определяющие демократический характер выборов. Каждый из них подробно раскрыт в отдельных статьях Кодекса.',
    lawyerCommentaryEn:
      'These five principles constitute the core guarantees of democratic elections, with each principle elaborated in dedicated articles of the Code.',
    quickFacts: [
      { label: 'Prinsiplar soni', value: '5 ta asosiy prinsip' },
      { label: 'Batafsil moddalar', value: '4–8-moddalar' },
      { label: 'Xususiyati', value: 'Ochiq va oshkora' },
    ],
  },
  {
    id: 'modda-4',
    numberLabel: '4-modda',
    articleNumber: 4,
    divisionId: 'bolim-2',
    divisionTitle: 'II BO‘LIM. SAYLOV HUQUQI',
    pillarId: 'huquq',
    title: 'Umumiy saylov huquqi',
    titleRu: 'Всеобщее избирательное право',
    titleEn: 'Universal Suffrage',
    leadSummary: '18 yoshga to‘lgan barcha fuqarolarning hech qanday kamsitishlarsiz saylash huquqini kafolatlaydi.',
    leadSummaryRu: 'Гарантирует право голоса всем гражданам с 18 лет без какой-либо дискриминации.',
    leadSummaryEn: 'Guarantees voting rights to all citizens aged 18 and older without discrimination.',
    blocks: [
      {
        type: 'paragraph',
        runs: [
          { text: 'O‘zbekiston Respublikasi Prezidenti, Qonunchilik palatasi deputatlari va mahalliy Kengashlar deputatlari saylovlari ' },
          { text: 'umumiydir', bold: true },
          { text: '.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Saylov kuniga qadar yoki saylov kuni ' },
          { text: 'o‘n sakkiz yoshga to‘lgan', bold: true },
          { text: ' O‘zbekiston Respublikasi fuqarolari saylash huquqiga egadir.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Fuqarolar ' },
          {
            text: 'jinsi, irqiy va milliy mansubligi, tili, dinga munosabati, ijtimoiy kelib chiqishi, e’tiqodi, ijtimoiy mavqeyi, ma’lumoti, mashg‘ulotining turi va xususiyatidan qat’i nazar, teng saylov huquqiga egadir.',
            bold: true,
          },
        ],
      },
      {
        type: 'table',
        caption: 'Saylash huquqining asosiy sharti:',
        headers: ['Shart', 'Mazmuni'],
        rows: [
          ['Fuqarolik', 'O‘zbekiston Respublikasi fuqarosi bo‘lish'],
          ['Yosh', 'Saylov kuniga qadar yoki saylov kuni 18 yoshga to‘lgan bo‘lish'],
          ['Diskriminatsiya taqiqi', 'Jinsi, irqi, tili, dini, e’tiqodi va boshqa belgilar bo‘yicha cheklash mumkin emas'],
        ],
      },
    ],
    lawyerCommentary:
      '18 yosh — saylov huquqining yosh chegarasi. Bu xalqaro standartlarga mos keladi. "Saylov kuniga qadar yoki saylov kuni" degan ibora muhim: agar fuqaro saylov kuni tug‘ilgan bo‘lsa ham, u saylash huquqiga ega bo‘ladi.',
    lawyerCommentaryRu:
      '18 лет — возрастной порог избирательного права, соответствующий международным стандартам. Важна формулировка «до дня выборов или в день выборов»: даже если гражданин родился в день выборов, он имеет право голосовать.',
    lawyerCommentaryEn:
      '18 is the voting age threshold aligned with international standards. Notably, citizens whose 18th birthday falls on election day itself are also entitled to vote.',
    quickFacts: [
      { label: 'Yosh chegarasi', value: '18 yosh' },
      { label: 'Asosiy talab', value: 'O‘zbekiston fuqaroligi' },
      { label: 'Kamsitish taqiqi', value: 'Mutlaq taqiqlangan' },
    ],
  },
  {
    id: 'modda-5',
    numberLabel: '5-modda',
    articleNumber: 5,
    divisionId: 'bolim-2',
    divisionTitle: 'II BO‘LIM. SAYLOV HUQUQI',
    pillarId: 'huquq',
    title: 'Teng saylov huquqi',
    titleRu: 'Равное избирательное право',
    titleEn: 'Equal Suffrage',
    leadSummary: '“Bir fuqaro — bir ovoz” qoidasini va saylov huquqini cheklashning qat’iy sud tartibini belgilaydi.',
    leadSummaryRu: 'Закрепляет принцип «один гражданин — один голос» и строгие судебные основания ограничения.',
    leadSummaryEn: 'Establishes the “one citizen, one vote” rule and strict judicial grounds for restriction.',
    blocks: [
      {
        type: 'paragraph',
        runs: [
          { text: 'Saylovda ishtirok etuvchi har bir fuqaro ' },
          { text: 'bir ovozga', bold: true },
          { text: ' ega bo‘ladi.' },
        ],
      },
      { type: 'subheading', text: 'Saylanishi mumkin bo‘lmagan shaxslar:' },
      {
        type: 'list',
        items: [
          [{ text: 'Sud tomonidan ' }, { text: 'muomalaga layoqatsiz', bold: true }, { text: ' deb topilgan fuqarolar;' }],
          [{ text: 'Sud hukmi bilan ' }, { text: 'ozodlikdan mahrum etish joylarida', bold: true }, { text: ' saqlanayotgan shaxslar.' }],
        ],
      },
      { type: 'subheading', text: 'Saylovda ishtirok etish huquqidan mahrum etish shartlari:' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Sud tomonidan muomalaga layoqatsiz deb topilgan fuqarolar, shuningdek ' },
          { text: 'og‘ir va o‘ta og‘ir jinoyatlar', bold: true },
          { text: ' sodir etganlik uchun sudning hukmiga ko‘ra ozodlikdan mahrum etish joylarida saqlanayotgan shaxslar saylovda ishtirok etish huquqidan ' },
          { text: 'faqat qonunga muvofiq hamda sudning qarori asosida', bold: true },
          { text: ' mahrum etilishi mumkin.' },
        ],
      },
      {
        type: 'rule',
        label: 'Muhim qoida',
        runs: [
          { text: 'Boshqa har qanday hollarda fuqarolarning saylov huquqlarini to‘g‘ridan-to‘g‘ri yoki bilvosita cheklashga yo‘l qo‘yilmaydi.' },
        ],
      },
      {
        type: 'table',
        caption: 'Teng saylov huquqining mazmuni:',
        headers: ['Jihat', 'Mazmuni'],
        rows: [
          ['Bir fuqaro — bir ovoz', 'Har bir saylovchi faqat bir marta ovoz beradi'],
          ['Ovozlar tengligi', 'Barcha saylovchilarning ovozlari bir xil qiymatga ega'],
          ['Cheklash faqat qonun asosida', 'Saylov huquqini cheklash faqat qonunda belgilangan hollarda va sud qarori bilan'],
        ],
      },
    ],
    lawyerCommentary:
      '"Bir fuqaro — bir ovoz" prinsipi saylov natijalariga ta’sir ko‘rsatishda fuqarolar o‘rtasida tenglikni ta’minlaydi. Og‘ir va o‘ta og‘ir jinoyatlar uchun sudlangan shaxslarga nisbatan cheklov — bu jazoning qo‘shimcha elementi emas, balki qonunda belgilangan maxsus tartibdir.',
    lawyerCommentaryRu:
      'Принцип «один гражданин — один голос» обеспечивает равенство граждан при влиянии на итоги выборов. Ограничение в отношении осуждённых за тяжкие и особо тяжкие преступления — не дополнительный элемент наказания, а специальный порядок, установленный законом.',
    lawyerCommentaryEn:
      '“One citizen, one vote” guarantees equal weight for every ballot. Any restriction for grave or especially grave crimes is not an extra penalty, but a strict statutory measure requiring a court ruling.',
    quickFacts: [
      { label: 'Asosiy qoida', value: '1 fuqaro = 1 ovoz' },
      { label: 'Cheklov asosi', value: 'Faqat sud qarori bilan' },
      { label: 'Bilvosita cheklash', value: 'Qat’iyan taqiqlanadi' },
    ],
  },
  {
    id: 'modda-6',
    numberLabel: '6-modda',
    articleNumber: 6,
    divisionId: 'bolim-2',
    divisionTitle: 'II BO‘LIM. SAYLOV HUQUQI',
    pillarId: 'huquq',
    title: 'To‘g‘ridan-to‘g‘ri saylov huquqi',
    titleRu: 'Прямое избирательное право',
    titleEn: 'Direct Suffrage',
    leadSummary: 'Prezident va deputatlarning fuqarolar tomonidan vositachilarsiz bevosita saylanishini mustahkamlaydi.',
    leadSummaryRu: 'Закрепляет непосредственное избрание Президента и депутатов гражданами без посредников.',
    leadSummaryEn: 'Guarantees that the President and deputies are elected directly by citizens without intermediaries.',
    blocks: [
      {
        type: 'paragraph',
        runs: [
          { text: 'O‘zbekiston Respublikasi Prezidenti, Qonunchilik palatasi deputatlari, mahalliy Kengashlar deputatlari fuqarolar tomonidan ' },
          { text: 'bevosita saylanadi', bold: true },
          { text: '.' },
        ],
      },
      { type: 'subheading', text: 'To‘g‘ridan-to‘g‘ri saylovning mazmuni:' },
      {
        type: 'list',
        items: [
          [{ text: 'Saylovchilar o‘z vakillarini ' }, { text: 'vositachilarsiz', bold: true }, { text: ' saylaydi;' }],
          [{ text: 'Har bir saylovchi ' }, { text: 'bevosita', bold: true }, { text: ' o‘z nomzodiga ovoz beradi;' }],
          [{ text: 'Saylov natijasi ' }, { text: 'saylovchilarning bevosita ovozlari', bold: true }, { text: ' asosida aniqlanadi.' }],
        ],
      },
    ],
    lawyerCommentary:
      'To‘g‘ridan-to‘g‘ri saylov — bilvosita saylovdan farqli o‘laroq, saylovchilar va saylanadigan organ o‘rtasida hech qanday vositachi bo‘lmasligini anglatadi. Bu fuqarolarning saylov jarayonidagi bevosita ishtirokini ta’minlaydi.',
    lawyerCommentaryRu:
      'Прямые выборы, в отличие от косвенных, означают отсутствие каких-либо посредников между избирателями и избираемым органом, обеспечивая непосредственное участие граждан.',
    lawyerCommentaryEn:
      'Unlike indirect elections, direct suffrage ensures there are no electoral intermediaries between citizens and the elected office.',
    quickFacts: [
      { label: 'Saylash usuli', value: 'Bevosita (vositachisiz)' },
      { label: 'Qamrovi', value: 'Prezident, Palata, Kengashlar' },
    ],
  },
  {
    id: 'modda-7',
    numberLabel: '7-modda',
    articleNumber: 7,
    divisionId: 'bolim-2',
    divisionTitle: 'II BO‘LIM. SAYLOV HUQUQI',
    pillarId: 'huquq',
    title: 'Yashirin ovoz berish',
    titleRu: 'Тайное голосование',
    titleEn: 'Secret Ballot',
    leadSummary: 'Saylovchining xohish-irodasi ustidan har qanday nazoratni istisno etuvchi maxfiy ovoz berish kafolatlari.',
    leadSummaryRu: 'Гарантии тайны голосования, исключающие любой контроль над волеизъявлением избирателя.',
    leadSummaryEn: 'Guarantees a free and secret vote, excluding any external control over the voter’s choice.',
    blocks: [
      {
        type: 'paragraph',
        runs: [
          { text: 'Saylovda ' },
          { text: 'erkin va yashirin', bold: true },
          { text: ' ovoz beriladi. Saylovchilarning xohish-irodasini ' },
          { text: 'nazorat qilishga yo‘l qo‘yilmaydi', bold: true },
          { text: '.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Yashirin ovoz berish saylovchining xohish-irodasi ustidan ' },
          { text: 'har qanday tarzda nazorat qilish imkoniyatini istisno etadigan', bold: true },
          { text: ' tegishli sharoitlarni yaratish orqali ta’minlanadi.' },
        ],
      },
      {
        type: 'table',
        caption: 'Yashirin ovoz berish kafolatlari:',
        headers: ['Kafolat', 'Mazmuni'],
        rows: [
          ['Erkin ovoz berish', 'Saylovchi o‘z xohishini erkin bildiradi'],
          ['Maxfiylik', 'Ovoz berish jarayoni va natijasi maxfiy'],
          ['Nazorat taqiqi', 'Hech kim saylovchining ovozini nazorat qila olmaydi'],
          ['Sharoit yaratish', 'Ovoz berish xonalari maxfiylikni ta’minlaydi'],
        ],
      },
    ],
    lawyerCommentary:
      'Yashirin ovoz berish — saylovchining erkinligini ta’minlovchi muhim kafolatdir. Bu prinsip buzilishi saylov natijalarining qonuniyligiga putur yetkazadi.',
    lawyerCommentaryRu:
      'Тайное голосование — важнейшая гарантия свободы избирателя. Нарушение этого принципа подрывает законность итогов выборов.',
    lawyerCommentaryEn:
      'Secret voting is a vital safeguard of voter autonomy; any breach of ballot secrecy undermines the legitimacy of election outcomes.',
    quickFacts: [
      { label: 'Prinsip', value: 'Erkin va maxfiy' },
      { label: 'Nazorat', value: 'Mutlaqo taqiqlangan' },
      { label: 'Kafolat', value: 'Yashirin ovoz berish kabinalari' },
    ],
    figure: {
      src: '/assets/aistudio/WFzrKNNBufVceB8NjYVBPF2eEyEHk4yJ_318201ec.webp',
      figureNo: 'FIG. 01',
      alt: 'Saylov uchastkasida fuqaroning shaffof saylov qutisiga byulleten tashlash jarayoni',
      caption: 'Saylov uchastkasida yashirin ovoz berish kabinalari va shaffof saylov qutisi orqali erkin ovoz berish jarayoni.',
    },
  },
  {
    id: 'modda-8',
    numberLabel: '8-modda',
    articleNumber: 8,
    divisionId: 'bolim-2',
    divisionTitle: 'II BO‘LIM. SAYLOV HUQUQI',
    pillarId: 'huquq',
    title: 'Saylovga tayyorgarlik ko‘rish hamda uni o‘tkazishdagi ochiqlik va oshkoralik',
    titleRu: 'Открытость и гласность при подготовке и проведении выборов',
    titleEn: 'Openness and Transparency in Elections',
    leadSummary: 'Komissiyalar faoliyatining shaffofligi, OAV roli va kuzatuvchilarning ishtirok etish huquqlari.',
    leadSummaryRu: 'Прозрачность работы избирательных комиссий, роль СМИ и права наблюдателей.',
    leadSummaryEn: 'Transparency of commission proceedings, the role of media, and the rights of domestic and international observers.',
    blocks: [
      {
        type: 'paragraph',
        runs: [
          { text: 'Saylovga tayyorgarlik ko‘rish hamda uni o‘tkazishni saylov komissiyalari ' },
          { text: 'ochiq va oshkora', bold: true },
          { text: ' amalga oshiradi.' },
        ],
      },
      { type: 'subheading', text: 'Saylov komissiyalari fuqarolarni xabardor etadi:' },
      {
        type: 'list',
        items: [
          [{ text: 'O‘z ishi to‘g‘risida;' }],
          [{ text: 'Saylov okruglari, uchastkalari tuzilganligi haqida;' }],
          [{ text: 'Saylov komissiyalarining tarkibi, joylashgan yeri va ish vaqti to‘g‘risida;' }],
          [{ text: 'Saylovchilarning ro‘yxatlari bilan tanishtiradi;' }],
          [{ text: 'Saylovda ishtirok etayotgan siyosiy partiyalarning ro‘yxati bilan tanishtiradi;' }],
          [{ text: 'Prezidentlikka, Qonunchilik palatasi deputatligiga, mahalliy Kengashlar deputatligiga nomzodlar to‘g‘risida ma’lum qiladi;' }],
          [{ text: 'Ovoz berish va saylov yakunlari haqidagi ma’lumotlarni ma’lum qiladi.' }],
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Ommaviy axborot vositalarining roli: ', bold: true },
          { text: 'OAV saylovga tayyorgarlikning borishini va saylov qanday o‘tayotganligini yoritib boradi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Saylov komissiyalarining majlislari ochiq o‘tkaziladi. ', bold: true },
          { text: 'Qarorlar OAVda e’lon qilinadi yoki Kodeksda belgilangan tartibda hammaga ma’lum qilinadi.' },
        ],
      },
      { type: 'subheading', text: 'Kuzatuvchilar ishtirok etish huquqiga ega:' },
      {
        type: 'list',
        items: [
          [{ text: 'Prezidentlikka, Qonunchilik palatasi deputatligiga, mahalliy Kengashlar deputatligiga nomzodlar ko‘rsatgan siyosiy partiyalardan kuzatuvchilar;' }],
          [{ text: 'Fuqarolarning o‘zini o‘zi boshqarish organlaridan kuzatuvchilar;' }],
          [{ text: 'Ommaviy axborot vositalari vakillari;' }],
          [{ text: 'Boshqa davlatlardan kuzatuvchilar;' }],
          [{ text: 'Xalqaro tashkilotlardan kuzatuvchilar.' }],
        ],
      },
      { type: 'subheading', text: 'Kuzatuvchilar ishtirok etish huquqiga ega bo‘lgan tadbirlar:' },
      {
        type: 'list',
        items: [
          [{ text: 'Saylovga tayyorgarlik ko‘rish va uni o‘tkazishga doir barcha tadbirlar;' }],
          [{ text: 'Saylov kuni ovoz berish xonalari;' }],
          [{ text: 'Ovozlarni sanab chiqish.' }],
        ],
      },
    ],
    lawyerCommentary:
      'Ochiqlik va oshkoralik — saylovning halolligi va ishonchliligining muhim kafolatidir. Kuzatuvchilarning ishtiroki saylov jarayonining shaffofligini ta’minlaydi va saylov natijalariga bo‘lgan ishonchni oshiradi.',
    lawyerCommentaryRu:
      'Открытость и гласность — важная гарантия честности и достоверности выборов. Участие наблюдателей обеспечивает прозрачность процесса и повышает доверие к его результатам.',
    lawyerCommentaryEn:
      'Openness and transparency uphold electoral integrity. Independent observation across all stages builds public confidence in election outcomes.',
    quickFacts: [
      { label: 'Kuzatuvchilar', value: '5 toifa (mahalliy va xalqaro)' },
      { label: 'Majlislar', value: 'Ochiq tartibda' },
      { label: 'Huquqlar', value: 'Ovoz sanashda ishtirok etish' },
    ],
    figure: {
      src: '/assets/aistudio/doska_08fbf89c.jpg',
      figureNo: 'FIG. 02',
      alt: 'Saylov uchastkasidagi nomzodlar va siyosiy partiyalarning saylovoldi dasturlari taxtasi',
      caption: 'Saylovchilarning partiyalar va nomzodlar haqida xabardor qilinishi — ochiqlik va oshkoralik prinsipining amaliy ifodasi.',
    },
  },
  {
    id: 'modda-81',
    numberLabel: '81-modda',
    articleNumber: 81,
    divisionId: 'bolim-3',
    divisionTitle: 'III BO‘LIM. SAYLOV O‘TKAZILISHINI CHEKLASH',
    pillarId: 'kodeks',
    title: 'Saylov o‘tkazilishini cheklash',
    titleRu: 'Ограничение проведения выборов',
    titleEn: 'Restriction on Holding Elections',
    leadSummary: 'Favqulodda holat joriy etilgan davrda saylovlarni o‘tkazmaslik tartibini belgilaydi.',
    leadSummaryRu: 'Устанавливает запрет на проведение выборов в период действия чрезвычайного положения.',
    leadSummaryEn: 'Prohibits holding elections during a declared state of emergency.',
    blocks: [
      {
        type: 'paragraph',
        runs: [
          { text: 'O‘zbekiston Respublikasining butun hududida yoki ayrim joylarida joriy etilgan ' },
          { text: 'favqulodda holat', bold: true },
          { text: ' amal qilishining butun muddati davomida ' },
          { text: 'saylovlar o‘tkazilmaydi', bold: true },
          { text: '.' },
        ],
      },
      {
        type: 'table',
        caption: 'Cheklovning mazmuni:',
        headers: ['Jihat', 'Mazmuni'],
        rows: [
          ['Shart', 'Favqulodda holat joriy etilgan bo‘lishi'],
          ['Hudud', 'Butun mamlakat yoki ayrim joylar'],
          ['Muddat', 'Favqulodda holat amal qilishining butun muddati'],
          ['Natija', 'Saylovlar o‘tkazilmaydi'],
        ],
      },
    ],
    lawyerCommentary:
      'Bu qoida favqulodda holat sharoitida saylovning erkin va xavfsiz o‘tkazilishini ta’minlash maqsadida belgilangan. Favqulodda holat tugagach, saylovlar qonunchilikda belgilangan tartibda o‘tkaziladi.',
    lawyerCommentaryRu:
      'Данное правило установлено для обеспечения свободы и безопасности выборов. После окончания чрезвычайного положения выборы проводятся в установленном законодательством порядке.',
    lawyerCommentaryEn:
      'This safeguard ensures elections are held only under free and secure conditions. Once the state of emergency ends, elections proceed in accordance with the law.',
    quickFacts: [
      { label: 'Huquqiy rejim', value: 'Favqulodda holat' },
      { label: 'Natija', value: 'Saylovlar o‘tkazilmaydi' },
      { label: 'Muddat tugagach', value: 'Qonuniy tartibda o‘tkaziladi' },
    ],
  },
  {
    id: 'modda-9',
    numberLabel: '9-modda',
    articleNumber: 9,
    divisionId: 'bolim-4',
    divisionTitle: 'IV BO‘LIM. SAYLOV OKRUGLARI VA UCHASTKALARI',
    pillarId: 'kodeks',
    title: 'Saylov okruglarini tuzish',
    titleRu: 'Образование избирательных округов',
    titleEn: 'Formation of Electoral Districts',
    leadSummary: 'Prezident, Qonunchilik palatasi (75 bir mandatli + yagona) va mahalliy Kengashlar okruglarini tuzish qoidalari.',
    leadSummaryRu: 'Порядок образования избирательных округов по всем видам выборов и квоты избирателей.',
    leadSummaryEn: 'Rules for establishing electoral districts, 10% population variance limits, and the 70-day publication deadline.',
    blocks: [
      { type: 'subheading', text: 'Prezident saylovi' },
      {
        type: 'paragraph',
        runs: [
          { text: 'O‘zbekiston Respublikasi Prezidenti saylovini o‘tkazishda O‘zbekiston Respublikasining ' },
          { text: 'butun hududi yagona saylov okrugi', bold: true },
          { text: ' hisoblanadi.' },
        ],
      },
      { type: 'subheading', text: 'Qonunchilik palatasi deputatlari saylovi' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Qonunchilik palatasi deputatlari saylovini o‘tkazish uchun ' },
          { text: 'yetmish beshta hududiy bir mandatli saylov okrugi', bold: true },
          { text: ' tuziladi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Qonunchilik palatasi deputatlari saylovini o‘tkazish bo‘yicha bir mandatli saylov okruglari Qoraqalpog‘iston Respublikasi Jo‘qorg‘i Kengesining, xalq deputatlari viloyatlar va Toshkent shahar Kengashlarining taqdimnomasiga binoan ' },
          { text: 'Markaziy saylov komissiyasi', bold: true },
          { text: ' tomonidan ' },
          { text: 'har besh yilda bir marta', bold: true },
          { text: ' tuziladi.' },
        ],
      },
      { type: 'subheading', text: 'Partiya ro‘yxati asosidagi saylov' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Qonunchilik palatasi deputatligiga siyosiy partiyalar tomonidan ko‘rsatilgan nomzodlar ro‘yxati asosida Qonunchilik palatasiga saylov o‘tkazish uchun O‘zbekiston Respublikasining ' },
          { text: 'butun hududi yagona saylov okrugi', bold: true },
          { text: ' hisoblanadi.' },
        ],
      },
      { type: 'subheading', text: 'Okruglar chegaralari va saylovchilar soni' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Qonunchilik palatasi deputatlari saylovini o‘tkazish bo‘yicha bir mandatli saylov okruglarining chegaralari Qoraqalpog‘iston Respublikasining, viloyatlarning va Toshkent shahrining ma’muriy-hududiy tuzilishi inobatga olingan holda, qoida tariqasida, O‘zbekiston Respublikasining butun hududida ' },
          { text: 'saylovchilar soni teng holda', bold: true },
          { text: ' belgilanadi.' },
        ],
      },
      { type: 'subheading', text: 'Mahalliy Kengashlar saylovi' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Mahalliy Kengashlarga saylov o‘tkazish uchun saylov okruglari xalq deputatlari viloyatlar, Toshkent shahar, tuman (shahar) Kengashlaridagi ' },
          { text: 'deputatlik o‘rinlariga teng miqdorda', bold: true },
          { text: ' tuziladi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Bir mandatli saylov okrugidan Qonunchilik palatasiga hamda mahalliy Kengashlarga bo‘lib o‘tadigan saylovda ' },
          { text: 'har bir saylov okrugidan bitta deputat saylanadi.', bold: true },
        ],
      },
      { type: 'subheading', text: 'Yangi tashkil etilgan hududlar' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Yangi tashkil etilgan viloyatning xalq deputatlari viloyat Kengashiga saylov o‘tkazish bo‘yicha saylov okruglari soni ' },
          { text: 'Senat', bold: true },
          { text: ' tomonidan belgilanadi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Yangi tashkil etilgan tumanning, shaharning xalq deputatlari tuman, shahar Kengashiga saylov o‘tkazish bo‘yicha saylov okruglarining soni esa ushbu ' },
          { text: 'Kodeks 88-moddasining talablari', bold: true },
          { text: ' inobatga olingan holda tegishli xalq deputatlari viloyat, Toshkent shahar Kengashi tomonidan belgilanadi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Yangi tashkil etilgan viloyatning xalq deputatlari viloyat Kengashiga saylov o‘tkazish bo‘yicha saylov okruglari ' },
          { text: 'Senatning taqdimnomasiga binoan Markaziy saylov komissiyasi', bold: true },
          { text: ' tomonidan tuziladi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Yangi tashkil etilgan tumanning, shaharning xalq deputatlari tuman, shahar Kengashiga saylov o‘tkazish bo‘yicha saylov okruglari esa tegishli xalq deputatlari viloyat, Toshkent shahar Kengashining taqdimnomasiga binoan ' },
          { text: 'tegishli viloyat va Toshkent shahar hududiy saylov komissiyasi', bold: true },
          { text: ' tomonidan tuziladi.' },
        ],
      },
      { type: 'subheading', text: 'Mahalliy Kengashlar saylov okruglari' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Mahalliy Kengashlarga saylov o‘tkazish bo‘yicha bir mandatli saylov okruglari tegishli hududiy, tuman, shahar saylov komissiyasi tomonidan, qoida tariqasida, ' },
          { text: 'saylovchilar soni teng holda har besh yilda bir marta', bold: true },
          { text: ' tuziladi. Saylov okruglarining chegaralari viloyatlar, tumanlar va shaharlarning ma’muriy-hududiy tuzilishi inobatga olingan holda belgilanadi.' },
        ],
      },
      { type: 'subheading', text: 'Saylovchilar sonining chetga chiqishi' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Bir mandatli saylov okruglarini tuzishda saylov okruglaridagi saylovchilar sonining yo‘l qo‘yiladigan eng ko‘p chetga chiqishi, qoida tariqasida, ' },
          { text: 'o‘n foizdan oshmasligi', bold: true },
          { text: ' kerak.' },
        ],
      },
      { type: 'subheading', text: 'Okruglar ro‘yxatini e’lon qilish' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Bir mandatli saylov okruglarining ro‘yxatlari ularning chegaralari, saylovchilar soni va saylov komissiyalarining joylashgan yeri ko‘rsatilgan holda saylovdan ' },
          { text: 'kamida yetmish kun oldin', bold: true },
          { text: ' tegishli saylov komissiyasi tomonidan e’lon qilinadi.' },
        ],
      },
      {
        type: 'table',
        caption: 'Saylov okruglari bo‘yicha qisqa jadval:',
        headers: ['Saylov turi', 'Okruglar soni', 'Tuzuvchi organ', 'Muddat'],
        rows: [
          ['Prezident', '1 ta yagona okrug', '—', '—'],
          ['Qonunchilik palatasi (bir mandatli)', '75 ta', 'Markaziy saylov komissiyasi', 'Har 5 yilda'],
          ['Qonunchilik palatasi (partiya ro‘yxati)', '1 ta yagona okrug', '—', '—'],
          ['Mahalliy Kengashlar', 'Deputatlik o‘rinlariga teng', 'Hududiy/tuman/shahar komissiyalari', 'Har 5 yilda'],
        ],
      },
    ],
    lawyerCommentary:
      'Okruglarni tuzishda saylovchilar sonining tengligi — "bir kishi — bir ovoz" prinsipining amalda ta’minlanishidir. 10% chetga chiqish — bu tabiiy geografik va demografik farqlarni hisobga olish uchun ruxsat etilgan chegara. 70 kunlik muddat — siyosiy partiyalar va nomzodlarga tayyorgarlik ko‘rish uchun yetarli vaqt berish maqsadida belgilangan.',
    lawyerCommentaryRu:
      'Равенство числа избирателей при образовании округов — практическое воплощение принципа «один человек — один голос». Отклонение до 10% учитывает географию и демографию, а 70-дневный срок даёт партиям время на подготовку.',
    lawyerCommentaryEn:
      'Equal voter counts across districts operationalize “one person, one vote.” The 10% variance accommodates geography and demographics, while the 70-day notice gives parties adequate preparation time.',
    quickFacts: [
      { label: 'Bir mandatli okrug', value: '75 ta (Palata)' },
      { label: 'Ruxsat etilgan farq', value: 'Ko‘pi bilan 10%' },
      { label: 'E’lon qilish muddati', value: 'Kamida 70 kun oldin' },
    ],
  },
  {
    id: 'modda-10',
    numberLabel: '10-modda',
    articleNumber: 10,
    divisionId: 'bolim-4',
    divisionTitle: 'IV BO‘LIM. SAYLOV OKRUGLARI VA UCHASTKALARI',
    pillarId: 'kodeks',
    title: 'Saylov uchastkalarini tuzish tartibi va normasi',
    titleRu: 'Порядок и норма образования избирательных участков',
    titleEn: 'Formation and Norms of Polling Stations',
    leadSummary: '5 yillik muddat, 20 dan 3 000 nafargacha saylovchi normasi hamda xorijiy va maxsus uchastkalar tartibi.',
    leadSummaryRu: 'Срок образования (5 лет), норма численности (20–3 000 избирателей) и участки за рубежом.',
    leadSummaryEn: 'Five-year duration, 20–3,000 voter thresholds, and rules for diplomatic and special polling stations.',
    blocks: [
      { type: 'subheading', text: 'Umumiy qoidalar' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Saylov uchastkalari tumanlar va shaharlar hokimliklarining taqdimnomasiga binoan ' },
          { text: 'hududiy saylov komissiyalari', bold: true },
          { text: ' tomonidan ' },
          { text: 'besh yil muddatga', bold: true },
          { text: ' tuziladi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Zarur bo‘lgan hollarda, saylov uchastkalari tumanlar va shaharlar hokimliklarining taqdimnomasiga binoan ' },
          { text: 'qayta tuzilishi, amaldagi saylov uchastkalarining chegaralari o‘zgartirilishi yoki tugatilishi', bold: true },
          { text: ' mumkin.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Saylovchilarga mumkin qadar ko‘proq qulaylik yaratish maqsadida saylov uchastkalari tumanlarning, shaharlarning, shaharlardagi tumanlarning chegaralari inobatga olingan holda tuziladi.' },
        ],
      },
      { type: 'subheading', text: 'Maxsus joylardagi uchastkalar' },
      {
        type: 'paragraph',
        runs: [
          { text: 'O‘zbekiston Respublikasining chet davlatlardagi diplomatik va boshqa vakolatxonalari huzurida, harbiy qismlarda, sanatoriylarda, dam olish uylarida, kasalxonalarda va boshqa statsionar davolash muassasalarida, olis va borish qiyin bo‘lgan hududlardagi fuqarolar turgan joylarda, qamoqda saqlash va ozodlikdan mahrum etish joylarida ham saylov uchastkalari saylovga tayyorgarlik ko‘rish va uni o‘tkazish davriga tuzilishi mumkin.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Bu saylov uchastkalari ular joylashgan yerdagi saylov okruglariga kiradi. Saylov uchastkalarining chegaralari boshqa saylov okruglarining chegaralarini ' },
          { text: 'kesib o‘tmasligi', bold: true },
          { text: ' kerak.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Harbiy qismlarda saylov uchastkalari qismlar yoki harbiy qo‘shilmalar komandirlarining, qamoqda saqlash va ozodlikdan mahrum etish joylarida saylov uchastkalari ushbu muassasalar va organlar boshliqlarining taqdimnomasiga binoan hududiy saylov komissiyalari tomonidan tuziladi.' },
        ],
      },
      { type: 'subheading', text: 'Chet davlatlardagi uchastkalar' },
      {
        type: 'paragraph',
        runs: [
          { text: 'O‘zbekiston Respublikasi Prezidenti saylovini va partiya ro‘yxati asosida Qonunchilik palatasi deputatlarining yagona saylov okrugi bo‘yicha saylovini o‘tkazish uchun O‘zbekiston Respublikasi Tashqi ishlar vazirligining taqdimnomasiga binoan ' },
          { text: 'Markaziy saylov komissiyasi', bold: true },
          { text: ' tomonidan O‘zbekiston Respublikasining chet davlatlardagi diplomatik va boshqa vakolatxonalari huzurida saylov uchastkalari tuzilishi mumkin.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'O‘zbekiston Respublikasidan tashqarida tuziladigan saylov uchastkalarini tegishli hududga biriktirish to‘g‘risidagi masala ' },
          { text: 'Markaziy saylov komissiyasi', bold: true },
          { text: ' tomonidan hal etiladi.' },
        ],
      },
      { type: 'subheading', text: 'Uchastkalar soni va muddatlari' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Saylov uchastkalari saylovga ' },
          { text: 'kamida oltmish kun', bold: true },
          { text: ' qolganida, qoida tariqasida, saylovchilar soni ' },
          { text: 'kamida yigirma nafardan va ko‘pi bilan uch ming nafardan', bold: true },
          { text: ' oshmagan holda tuziladi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Harbiy qismlarda, O‘zbekiston Respublikasining chet davlatlardagi diplomatik va boshqa vakolatxonalari huzurida, shuningdek olis va borish qiyin bo‘lgan hududlardagi fuqarolar turgan joylarda, qamoqda saqlash va ozodlikdan mahrum etish joylarida saylov uchastkalari ana shu muddatda, ayrim hollarda esa saylovga ' },
          { text: 'kamida yetti kun', bold: true },
          { text: ' qolganida tuziladi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Saylov uchastkalarining soni ' },
          { text: 'okruglar sonidan kam bo‘lishi mumkin emas.', bold: true },
        ],
      },
      { type: 'subheading', text: 'Uchastkalar to‘g‘risida xabardor qilish' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Hududiy saylov komissiyasi saylov uchastkalarining tartib raqamini belgilaydi hamda tegishli uchastka saylov komissiyasining telefon raqamlarini, joylashgan yerini va ovoz berish binosini ko‘rsatgan holda saylovchilarni har bir uchastkaning chegaralari to‘g‘risida xabardor etishni tashkil qiladi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Saylov uchastkalari O‘zbekiston Respublikasi Prezidenti, Qonunchilik palatasi deputatlari va mahalliy Kengashlar deputatlari saylovlari uchun ' },
          { text: 'yagona', bold: true },
          { text: ' hisoblanadi.' },
        ],
      },
      {
        type: 'table',
        caption: 'Saylov uchastkalari bo‘yicha asosiy raqamlar:',
        headers: ['Ko‘rsatkich', 'Qiymat'],
        rows: [
          ['Tuzish muddati', '5 yil'],
          ['Saylovga qolgan muddat', 'Kamida 60 kun (ayrim hollarda 7 kun)'],
          ['Saylovchilar soni', '20 — 3 000 nafar'],
          ['Minimal soni', 'Okruglar sonidan kam bo‘lmasligi kerak'],
        ],
      },
    ],
    lawyerCommentary:
      'Saylov uchastkalari — ovoz berish bevosita tashkil etiladigan joy. Ularning soni va joylashuvi saylovchilarga qulaylik yaratish, shuningdek ovoz berish jarayonining tartibli o‘tishini ta’minlash uchun belgilanadi. Chet davlatlardagi uchastkalar — xorijda yashovchi fuqarolarning saylov huquqini ta’minlashning muhim mexanizmidir.',
    lawyerCommentaryRu:
      'Избирательные участки — места непосредственной организации голосования. Участки за рубежом служат важным механизмом обеспечения избирательных прав граждан за пределами страны.',
    lawyerCommentaryEn:
      'Polling stations are where voting directly takes place. Establishing overseas stations at diplomatic missions ensures citizens abroad can exercise their constitutional right to vote.',
    quickFacts: [
      { label: 'Muddat', value: '5 yil' },
      { label: 'Tuzish vaqti', value: 'Kamida 60 kun oldin' },
      { label: 'Saylovchi normasi', value: '20 — 3 000 nafar' },
    ],
    figure: {
      src: '/assets/aistudio/chet_el_80c2c82d.jpg',
      figureNo: 'FIG. 05',
      alt: 'Chet davlatdagi diplomatik vakolatxona huzuridagi saylov uchastkasida ovoz berish',
      caption: 'Chet davlatlardagi diplomatik vakolatxonalar huzurida tashkil etilgan saylov uchastkasida ovoz berish.',
    },
  },
  {
    id: 'modda-11',
    numberLabel: '11-modda',
    articleNumber: 11,
    divisionId: 'bolim-5',
    divisionTitle: 'V BO‘LIM. SAYLOV KOMISSIYALARI',
    pillarId: 'komissiyalar',
    title: 'Saylov komissiyalari tizimi',
    titleRu: 'Система избирательных комиссий',
    titleEn: 'System of Election Commissions',
    leadSummary: 'Besh bosqichli komissiyalar tizimi, mustaqillik, kollegiallik, oshkoralik va budjet mablag‘larining adolatli taqsimlanishi.',
    leadSummaryRu: 'Пятиуровневая система избирательных комиссий, их независимость, коллегиальность и гласность.',
    leadSummaryEn: 'The five-tier commission hierarchy, institutional independence, collegiality, and equitable funding.',
    blocks: [
      { type: 'subheading', text: 'Tizim tarkibi' },
      {
        type: 'paragraph',
        runs: [{ text: 'Saylov komissiyalari tizimiga quyidagilar kiradi:' }],
      },
      {
        type: 'list',
        ordered: true,
        items: [
          [{ text: 'Markaziy saylov komissiyasi;', bold: true }],
          [{ text: 'Hududiy saylov komissiyalari;', bold: true }],
          [{ text: 'Tuman va shahar saylov komissiyalari;', bold: true }],
          [{ text: 'Xalq deputatlari viloyatlar va Toshkent shahar Kengashlariga saylov o‘tkazish bo‘yicha okrug saylov komissiyalari;', bold: true }],
          [{ text: 'Uchastka saylov komissiyalari.', bold: true }],
        ],
      },
      { type: 'subheading', text: 'Mustaqillik prinsipi' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Saylov komissiyalari va ularning a’zolari o‘z faoliyatini ' },
          { text: 'har qanday davlat organlaridan, jamoat birlashmalaridan va mansabdor shaxslardan mustaqil holda', bold: true },
          { text: ' amalga oshiradi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Saylov komissiyalarining faoliyatiga aralashishga ' },
          { text: 'yo‘l qo‘yilmaydi', bold: true },
          { text: ' va bunday aralashuv qonunga muvofiq ' },
          { text: 'javobgarlikka sabab bo‘ladi.', bold: true },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Saylov komissiyalari va ularning a’zolari o‘z faoliyatida O‘zbekiston Respublikasi Konstitutsiyasiga, ushbu Kodeksga va boshqa qonun hujjatlariga amal qiladi.' },
        ],
      },
      { type: 'subheading', text: 'Kollegiallik va oshkoralik' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Masalalarni ko‘rib chiqish va qarorlar qabul qilish saylov komissiyasi tomonidan ' },
          { text: 'kollegial tarzda', bold: true },
          { text: ' amalga oshiriladi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Saylov komissiyalari o‘z faoliyatini ' },
          { text: 'ochiq va oshkora', bold: true },
          { text: ' amalga oshiradi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [{ text: 'Saylov komissiyasining majlislarida quyidagilar hozir bo‘lishi mumkin:' }],
      },
      {
        type: 'list',
        items: [
          [{ text: 'Siyosiy partiyalarning vakillari;' }],
          [{ text: 'Ommaviy axborot vositalarining vakillari;' }],
          [{ text: 'Fuqarolarning o‘zini o‘zi boshqarish organlaridan kuzatuvchilar;' }],
          [{ text: 'Boshqa davlatlardan kuzatuvchilar;' }],
          [{ text: 'Xalqaro tashkilotlardan kuzatuvchilar.' }],
        ],
      },
      { type: 'subheading', text: 'Teng shart-sharoitlar va adolatli taqsimlash' },
      {
        type: 'paragraph',
        runs: [{ text: 'Saylov komissiyalari quyidagi masalalar bo‘yicha zarur choralar ko‘radi:' }],
      },
      {
        type: 'list',
        items: [
          [{ text: 'Nomzodlarga, siyosiy partiyalarga saylov kampaniyasini o‘tkazish uchun ' }, { text: 'teng shart-sharoitlar', bold: true }, { text: ' yaratish;' }],
          [{ text: 'Saylovga tayyorgarlik ko‘rish hamda uni o‘tkazish uchun ajratilgan ' }, { text: 'budjet mablag‘larining adolatli taqsimlanishi;', bold: true }],
          [{ text: 'Ovoz berishning va saylov yakunlarini chiqarishning ' }, { text: 'halol bo‘lishi.', bold: true }],
        ],
      },
      {
        type: 'schema',
        label: 'Saylov komissiyalari tizimi — sxematik:',
        steps: [
          'Markaziy saylov komissiyasi (9 a’zo, doimiy)',
          'Hududiy saylov komissiyalari',
          'Tuman va shahar saylov komissiyalari',
          'Okrug saylov komissiyalari (viloyat/Toshkent shahar Kengashlari uchun)',
          'Uchastka saylov komissiyalari',
        ],
      },
    ],
    lawyerCommentary:
      'Saylov komissiyalarining mustaqilligi — saylovning halolligi va qonuniyligining muhim kafolatidir. Besh bosqichli tizim saylov jarayonini markazdan quyi bo‘g‘ingacha samarali boshqarish imkonini beradi.',
    lawyerCommentaryRu:
      'Независимость избирательных комиссий — ключевая гарантия честности и законности выборов. Пятиуровневая система обеспечивает эффективное управление процессом от центра до нижнего звена.',
    lawyerCommentaryEn:
      'Commission independence is crucial for lawful, fair elections. The five-tier structure coordinates administration seamlessly from the central level down to every local polling station.',
    quickFacts: [
      { label: 'Bosqichlar', value: '5 bosqichli tizim' },
      { label: 'Ish tartibi', value: 'Kollegial va ochiq' },
      { label: 'Aralashish', value: 'Qonuniy javobgarlik' },
    ],
    figure: {
      src: '/assets/aistudio/o_tkazish_30c7b27c.webp',
      figureNo: 'FIG. 03',
      alt: 'Uchastka saylov komissiyasi a’zolari saylov qutisini muhrlash jarayonida',
      caption: 'Saylov komissiyasi a’zolarining kollegial va ochiq faoliyati — saylov qutisini ovoz berishdan oldin tekshirish.',
    },
  },
  {
    id: 'modda-12',
    numberLabel: '12-modda',
    articleNumber: 12,
    divisionId: 'bolim-5',
    divisionTitle: 'V BO‘LIM. SAYLOV KOMISSIYALARI',
    pillarId: 'komissiyalar',
    title: 'Markaziy saylov komissiyasini tuzish',
    titleRu: 'Образование Центральной избирательной комиссии',
    titleEn: 'Formation of the Central Election Commission',
    leadSummary: '9 nafar doimiy a’zo, Qoraqalpog‘iston vakili, Raisning 5 yillik muddati va guvohnomalar berish tartibi.',
    leadSummaryRu: '9 постоянных членов ЦИК, представитель Каракалпакстана, срок полномочий Председателя и удостоверения.',
    leadSummaryEn: 'Composition of 9 permanent members, representation from Karakalpakstan, and the Chairperson’s two-term limit.',
    blocks: [
      { type: 'subheading', text: 'Tarkibi' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Markaziy saylov komissiyasi O‘zbekiston Respublikasi Oliy Majlisining palatalari tomonidan ' },
          { text: 'to‘qqiz nafar a’zodan', bold: true },
          { text: ' iborat tarkibda tuziladi va ' },
          { text: 'doimiy asosda', bold: true },
          { text: ' faoliyat yuritadi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Markaziy saylov komissiyasining ' },
          { text: 'bir nafar a’zosi Qoraqalpog‘iston Respublikasining vakili', bold: true },
          { text: ' bo‘ladi.' },
        ],
      },
      { type: 'subheading', text: 'A’zolarni saylash tartibi' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Markaziy saylov komissiyasining a’zolari Qoraqalpog‘iston Respublikasi Jo‘qorg‘i Kengesining, xalq deputatlari viloyatlar va Toshkent shahar Kengashlarining tavsiyasiga ko‘ra ' },
          { text: 'Qonunchilik palatasi hamda Senat', bold: true },
          { text: ' tomonidan saylanadi.' },
        ],
      },
      { type: 'subheading', text: 'Raisni saylash' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Markaziy saylov komissiyasining Raisi O‘zbekiston Respublikasi ' },
          { text: 'Prezidentining taqdimnomasiga binoan', bold: true },
          { text: ' komissiya a’zolari orasidan ' },
          { text: 'besh yillik muddatga', bold: true },
          { text: ' komissiya majlisida saylanadi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Ayni bir shaxs surunkasiga ' },
          { text: 'ikki muddatdan ortiq', bold: true },
          { text: ' Markaziy saylov komissiyasining Raisi etib saylanishi mumkin emas.' },
        ],
      },
      { type: 'subheading', text: 'Rais o‘rinbosari va kotib' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Markaziy saylov komissiyasi Raisining o‘rinbosari va komissiya kotibi komissiya a’zolari orasidan ' },
          { text: 'komissiya majlisida', bold: true },
          { text: ' saylanadi.' },
        ],
      },
      { type: 'subheading', text: 'Guvohnomalar' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Markaziy saylov komissiyasining a’zosi tegishli ' },
          { text: 'guvohnomaga', bold: true },
          { text: ' ega bo‘ladi.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Markaziy saylov komissiyasi Raisining va uning o‘rinbosarining guvohnomasi ' },
          { text: 'O‘zbekiston Respublikasi Prezidenti', bold: true },
          { text: ' tomonidan, Markaziy saylov komissiyasi boshqa a’zolarining guvohnomasi esa ' },
          { text: 'Qonunchilik palatasi Spikeri va Senat Raisi', bold: true },
          { text: ' tomonidan imzolanadi.' },
        ],
      },
      {
        type: 'table',
        caption: 'Markaziy saylov komissiyasi tarkibi — jadval:',
        headers: ['Lavozim', 'Kim saylaydi', 'Muddat'],
        rows: [
          ['9 nafar a’zo', 'Qonunchilik palatasi va Senat', '—'],
          ['Rais', 'Komissiya majlisi (Prezident taqdimnomasiga binoan)', '5 yil'],
          ['Rais o‘rinbosari', 'Komissiya majlisi', '—'],
          ['Kotib', 'Komissiya majlisi', '—'],
        ],
      },
    ],
    lawyerCommentary:
      'Markaziy saylov komissiyasining doimiy asosda ishlashi saylov jarayonining uzluksizligini ta’minlaydi. Raisning ikki muddatdan ortiq saylanmasligi — hokimiyatning jamlanishiga qarshi kafolatdir.',
    lawyerCommentaryRu:
      'Работа ЦИК на постоянной основе обеспечивает непрерывность избирательного процесса, а ограничение пребывания на посту Председателя двумя сроками подряд служит гарантией против концентрации власти.',
    lawyerCommentaryEn:
      'Permanent status ensures institutional continuity between electoral cycles, while the two-term limit for the Chairperson prevents concentration of authority.',
    quickFacts: [
      { label: 'A’zolar soni', value: '9 nafar (doimiy)' },
      { label: 'Rais muddati', value: '5 yil (maks. 2 muddat)' },
      { label: 'Qoraqalpog‘iston', value: '1 nafar vakil majburiy' },
    ],
  },
  {
    id: 'modda-13',
    numberLabel: '13-modda',
    articleNumber: 13,
    divisionId: 'bolim-5',
    divisionTitle: 'V BO‘LIM. SAYLOV KOMISSIYALARI',
    pillarId: 'komissiyalar',
    title: 'Markaziy saylov komissiyasiga a’zolik',
    titleRu: 'Членство в Центральной избирательной комиссии',
    titleEn: 'Membership of the Central Election Commission',
    leadSummary: 'A’zolikka qo‘yiladigan talablar, cheklovlar, vakolatlarni tugatish asoslari va daxlsizlik kafolatlari.',
    leadSummaryRu: 'Требования к членам ЦИК, ограничения, основания прекращения полномочий и неприкосновенность.',
    leadSummaryEn: 'Eligibility criteria, incompatibility rules, grounds for termination, and parliamentary-grade immunity.',
    blocks: [
      { type: 'subheading', text: 'A’zolikka talablar' },
      {
        type: 'paragraph',
        runs: [{ text: 'Markaziy saylov komissiyasining a’zosi bo‘lishi mumkin bo‘lgan fuqaro:' }],
      },
      {
        type: 'list',
        items: [
          [{ text: 'Yigirma besh yoshga to‘lgan;', bold: true }],
          [{ text: 'Qoida tariqasida, ' }, { text: 'oliy ma’lumotga', bold: true }, { text: ' ega;' }],
          [{ text: 'Saylovlarni tashkil etish va o‘tkazish borasida ' }, { text: 'ish tajribasiga', bold: true }, { text: ' ega;' }],
          [{ text: 'Jamoatchilik o‘rtasida ' }, { text: 'obro‘-e’tibor', bold: true }, { text: ' qozongan;' }],
          [{ text: 'Kamida oxirgi ' }, { text: 'besh yil O‘zbekiston Respublikasi hududida doimiy yashab turgan.', bold: true }],
        ],
      },
      { type: 'subheading', text: 'A’zo bo‘lishi mumkin bo‘lmagan shaxslar' },
      {
        type: 'list',
        items: [
          [{ text: 'Og‘ir yoki o‘ta og‘ir jinoyatlar sodir etganligi uchun ' }, { text: 'sudlanganlik holati tugallanmagan', bold: true }, { text: ' yoxud sudlanganligi olib tashlanmagan fuqarolar;' }],
          [{ text: 'O‘zbekiston Respublikasi ' }, { text: 'Qurolli Kuchlarining harbiy xizmatchilari;', bold: true }],
          [{ text: 'O‘zbekiston Respublikasi ' }, { text: 'Davlat xavfsizlik xizmatining', bold: true }, { text: ', boshqa harbiylashtirilgan bo‘linmalarning xodimlari;' }],
          [{ text: 'Diniy tashkilotlar va birlashmalarning professional xizmatchilari.', bold: true }],
        ],
      },
      { type: 'subheading', text: 'Qo‘shimcha cheklovlar' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Markaziy saylov komissiyasining a’zosi ' },
          { text: 'boshqa saylov komissiyasining yoki siyosiy partiyaning a’zosi', bold: true },
          { text: ' bo‘lishi mumkin emas.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Markaziy saylov komissiyasining O‘zbekiston Respublikasi Prezidentligiga nomzod etib, Qonunchilik palatasi va mahalliy Kengash deputatligiga nomzod etib, Senat a’zoligiga nomzod etib, ishonchli vakil etib ro‘yxatga olingan a’zosi ' },
          { text: 'komissiya tarkibidan chiqib ketgan deb hisoblanadi.', bold: true },
        ],
      },
      { type: 'subheading', text: 'Vakolatlarni tugatish holatlari' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Markaziy saylov komissiyasi a’zosining vakolatlari Oliy Majlis palatalari tomonidan bevosita yoki uni a’zolikka tavsiya etgan organning taqdimnomasiga binoan quyidagi hollarda tugatilishi mumkin:' },
        ],
      },
      {
        type: 'list',
        ordered: true,
        items: [
          [{ text: 'U o‘z vakolatlarini zimmasidan soqit qilish to‘g‘risida ' }, { text: 'yozma ariza berganda;', bold: true }],
          [{ text: 'U sud tomonidan ' }, { text: 'muomalaga layoqatsiz', bold: true }, { text: ' deb topilganda;' }],
          [{ text: 'Unga nisbatan sudning ' }, { text: 'ayblov hukmi', bold: true }, { text: ' qonuniy kuchga kirganda;' }],
          [{ text: 'U o‘z vazifalarini ' }, { text: 'muntazam ravishda bajarmay kelganda;', bold: true }],
          [{ text: 'Qonunga ko‘ra u Markaziy saylov komissiyasi a’zosining vakolatlarini amalga oshirish bilan bir vaqtda shug‘ullanib bo‘lmaydigan ' }, { text: 'lavozimga saylanganda yoki tayinlanganda;', bold: true }],
          [{ text: 'U sudning qonuniy kuchga kirgan qarori asosida ' }, { text: 'bedarak yo‘qolgan deb topilganda yoki vafot etgan deb e’lon qilinganda;', bold: true }],
          [{ text: 'U O‘zbekiston Respublikasi ' }, { text: 'fuqaroligini yo‘qotganda yoki fuqaroligidan chiqqanda;', bold: true }],
          [{ text: 'U ' }, { text: 'vafot etganda.', bold: true }],
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Markaziy saylov komissiyasining yangi a’zosi ushbu Kodeksda belgilangan tartibda saylanadi.' },
        ],
      },
      { type: 'subheading', text: 'Faoliyat cheklovlari va daxlsizlik' },
      {
        type: 'paragraph',
        runs: [
          { text: 'Markaziy saylov komissiyasining a’zolari ' },
          { text: 'ilmiy, ijodiy va pedagogik faoliyatdan tashqari', bold: true },
          { text: ' haq to‘lanadigan boshqa turdagi faoliyat bilan shug‘ullanishi mumkin emas.' },
        ],
      },
      {
        type: 'paragraph',
        runs: [
          { text: 'Markaziy saylov komissiyasi a’zolariga Qonunchilik palatasi deputatlariga, Senat a’zolariga nisbatan qo‘llaniladigan ' },
          { text: 'daxlsizlik to‘g‘risidagi qoidalar', bold: true },
          { text: ' tatbiq etiladi.' },
        ],
      },
      {
        type: 'table',
        caption: 'A’zolikka talablar — qisqa jadval:',
        headers: ['Talab', 'Qiymat'],
        rows: [
          ['Yosh', '25 yosh'],
          ['Ma’lumot', 'Oliy (qoida tariqasida)'],
          ['Tajriba', 'Saylovlarni tashkil etishda'],
          ['Yashash', 'Kamida 5 yil O‘zbekistonda'],
          ['Obro‘', 'Jamoatchilikda e’tibor'],
        ],
      },
    ],
    lawyerCommentary:
      'Markaziy saylov komissiyasi a’zoligiga qo‘yiladigan talablar va cheklovlar uning mustaqilligi va professional darajasini ta’minlashga qaratilgan. Daxlsizlik — a’zolarning o‘z vazifalarini erkin va qo‘rquvsiz bajarishining kafolatidir.',
    lawyerCommentaryRu:
      'Требования и ограничения к членам ЦИК направлены на обеспечение независимости и профессионализма, а неприкосновенность гарантирует свободное исполнение ими своих обязанностей.',
    lawyerCommentaryEn:
      'Eligibility standards and party incompatibility preserve impartiality, while immunity protects members from undue pressure in carrying out their duties.',
    quickFacts: [
      { label: 'Minimal yosh', value: '25 yosh' },
      { label: 'Yashash talabi', value: 'Kamida 5 yil' },
      { label: 'Ruxsat etilgan ish', value: 'Ilmiy, ijodiy, pedagogik' },
    ],
  },
  {
    id: 'modda-14',
    numberLabel: '14-modda',
    articleNumber: 14,
    divisionId: 'bolim-5',
    divisionTitle: 'V BO‘LIM. SAYLOV KOMISSIYALARI',
    pillarId: 'komissiyalar',
    title: 'Markaziy saylov komissiyasining vakolatlari',
    titleRu: 'Полномочия Центральной избирательной комиссии',
    titleEn: 'Powers of the Central Election Commission',
    leadSummary: 'Saylov kampaniyasini e’lon qilishdan tortib okruglar tuzish, moliyalashtirish, nazorat va nomzodlarni ro‘yxatga olishgacha bo‘lgan vakolatlar.',
    leadSummaryRu: 'Полный перечень полномочий ЦИК: от объявления кампании до регистрации кандидатов и финансового контроля.',
    leadSummaryEn: 'Comprehensive powers of the CEC across organization, oversight, financing, training, and candidate registration.',
    blocks: [
      {
        type: 'paragraph',
        runs: [{ text: 'Markaziy saylov komissiyasi quyidagi vakolatlarga ega:' }],
      },
      { type: 'subheading', text: 'Saylovlarni tashkil etish va boshqarish' },
      {
        type: 'list',
        items: [
          [{ text: 'O‘zbekiston Respublikasi Prezidenti, Oliy Majlis, mahalliy Kengashlar deputatlari saylovlariga ' }, { text: 'tayyorgarlik ko‘rish va ularni o‘tkazishni tashkil etadi;', bold: true }],
          [{ text: 'Saylov komissiyalari tizimiga ' }, { text: 'boshchilik qiladi', bold: true }, { text: ', O‘zbekiston Respublikasining butun hududida ushbu Kodeksning ijrosi ustidan ' }, { text: 'nazoratni amalga oshiradi, uning bir xil tarzda qo‘llanilishini ta’minlaydi;', bold: true }],
          [{ text: 'O‘zbekiston Respublikasi Prezidenti saylovi, Qonunchilik palatasi, mahalliy Kengashlar deputatlari saylovi yuzasidan ' }, { text: 'saylov kampaniyasi boshlanganligini e’lon qiladi.', bold: true }],
        ],
      },
      { type: 'subheading', text: 'Uslubiy va axborot ta’minoti' },
      {
        type: 'list',
        items: [
          [{ text: 'Saylov komissiyalari faoliyatini ' }, { text: 'uslubiy jihatdan ta’minlashni', bold: true }, { text: ' amalga oshiradi;' }],
          [{ text: 'Saylovni tashkil etish masalalari yuzasidan o‘z vakolatlari doirasida ' }, { text: 'qarorlar qabul qiladi', bold: true }, { text: ', yo‘riqnomalar hamda nizomlarni tasdiqlaydi, tushuntirishlar beradi;' }],
          [{ text: 'Saylov jarayonini boshqarishning ' }, { text: 'axborot tizimini joriy etish', bold: true }, { text: ' hamda O‘zbekiston Respublikasi saylovchilarining ' }, { text: 'yagona elektron ro‘yxatidan', bold: true }, { text: ' foydalanish faoliyati bo‘yicha umumiy rahbarlikni va muvofiqlashtirishni amalga oshiradi.' }],
        ],
      },
      { type: 'subheading', text: 'Okruglar va komissiyalarni tuzish' },
      {
        type: 'list',
        items: [
          [{ text: 'Qonunchilik palatasi deputatlari saylovini o‘tkazish uchun ' }, { text: 'saylov okruglarini tuzadi;', bold: true }],
          [{ text: 'O‘zbekiston Respublikasining chet davlatlardagi diplomatik va boshqa vakolatxonalari huzurida tuzilgan ' }, { text: 'saylov uchastkalarini tegishli hududga biriktirish', bold: true }, { text: ' to‘g‘risidagi masalalarni hal etadi;' }],
          [{ text: 'Hududiy saylov komissiyalarini tuzadi', bold: true }, { text: ', ularga tegishli hududni (okrugni) biriktiradi hamda hududiy saylov komissiyalarining tarkibi va joylashgan manzili to‘g‘risidagi ma’lumotlarni ' }, { text: 'e’lon qiladi;', bold: true }],
          [{ text: 'Yangi tashkil etilgan ma’muriy-hududiy birliklarda mahalliy Kengashlar deputatlari saylovini ' }, { text: 'e’lon qiladi;', bold: true }],
          [{ text: 'Yangi tashkil etilgan viloyatning xalq deputatlari viloyat Kengashiga saylov o‘tkazish bo‘yicha ' }, { text: 'saylov okruglarini tuzadi.', bold: true }],
        ],
      },
      { type: 'subheading', text: 'Ta’lim va vakolatlarni tugatish' },
      {
        type: 'list',
        items: [
          [{ text: 'Saylov komissiyalarining a’zolari va saylov jarayonining boshqa ishtirokchilari uchun ' }, { text: 'o‘qishlarni tashkil etadi;', bold: true }],
          [{ text: 'Qonunchilikda belgilangan asoslarga ko‘ra Qonunchilik palatasi deputatining hamda Senat a’zosining ' }, { text: 'vakolatlarini muddatidan ilgari tugatish', bold: true }, { text: ' to‘g‘risida qaror qabul qiladi.' }],
        ],
      },
      { type: 'subheading', text: 'Tarkib va qarorlar ustidan nazorat' },
      {
        type: 'list',
        items: [
          [{ text: 'Saylov komissiyalari tarkibiga ' }, { text: 'o‘zgartirishlar kiritish tartibini', bold: true }, { text: ' belgilaydi;' }],
          [{ text: 'Agar saylov komissiyalarining qarorlari ushbu Kodeksga zid bo‘lsa, ushbu qarorlarni ' }, { text: 'mustaqil ravishda yoki O‘zbekiston Respublikasi Bosh prokurorining taqdimnomasiga binoan bekor qiladi.', bold: true }],
        ],
      },
      { type: 'subheading', text: 'Kuzatuvchilar va moliyalashtirish' },
      {
        type: 'list',
        items: [
          [{ text: 'Chet davlatlarning, xalqaro tashkilotlarning saylovdagi kuzatuvchilariga ' }, { text: 'mandatlar beradi;', bold: true }],
          [{ text: 'Saylovga tayyorgarlik ko‘rish hamda uni o‘tkazishga doir ' }, { text: 'xarajatlar smetasini ishlab chiqadi va tasdiqlaydi', bold: true }, { text: ', pul mablag‘larini saylov komissiyalariga taqsimlaydi, shu jumladan ' }, { text: 'siyosiy partiyalarning saylovda ishtirok etishini moliyalashtirish', bold: true }, { text: ' uchun taqsimlaydi;' }],
          [{ text: 'Saylov komissiyalarining binolar, transport va aloqa vositalari bilan ta’minlanishini ' }, { text: 'nazorat qiladi', bold: true }, { text: ', saylovni moddiy-texnik jihatdan ta’minlashga doir boshqa masalalarni ko‘rib chiqadi;' }],
          [{ text: 'Siyosiy partiyalarning, fuqarolar o‘zini o‘zi boshqarish organlarining kuzatuvchilari, ommaviy axborot vositalarining vakillari, boshqa davlatlarning, xalqaro tashkilotlarning kuzatuvchilari uchun ' }, { text: 'mandat namunasini belgilaydi.', bold: true }],
        ],
      },
      { type: 'subheading', text: 'Nomzodlar va partiyalar bilan ishlash' },
      {
        type: 'list',
        items: [
          [{ text: 'Taqdim etilgan hujjatlar asosida ' }, { text: 'siyosiy partiyalarning saylovda ishtirok etishiga ijozat berish', bold: true }, { text: ' to‘g‘risida qaror qabul qiladi;' }],
          [{ text: 'O‘zbekiston Respublikasi Prezidentligiga nomzodlar va Qonunchilik palatasi deputatligiga nomzodlar ko‘rsatgan siyosiy partiyalardan ' }, { text: 'tegishli hujjatlarni qabul qilib oladi;', bold: true }],
          [{ text: 'O‘zbekiston Respublikasi Prezidentligiga va Qonunchilik palatasi deputatligiga ko‘rsatilgan ' }, { text: 'nomzodlarni, shuningdek partiya ro‘yxatini belgilangan tartibda ro‘yxatga oladi', bold: true }, { text: ' va ular haqidagi ma’lumotlar matbuotda e’lon qilinishini tashkil etadi;' }],
          [{ text: 'Ro‘yxatga olingan nomzodlarga, shu jumladan partiya ro‘yxati asosida nomzodlarga ' }, { text: 'guvohnomalar beradi;', bold: true }],
          [{ text: 'O‘zbekiston Respublikasi Prezidentligiga nomzodlarning ' }, { text: 'ishonchli vakillarini ro‘yxatga oladi', bold: true }, { text: ' hamda ularga guvohnomalar beradi.' }],
        ],
      },
      {
        type: 'table',
        caption: 'Markaziy saylov komissiyasi vakolatlari — guruhlar bo‘yicha:',
        headers: ['Vakolat guruhi', 'Asosiy vazifalar'],
        rows: [
          ['Tashkil etish', 'Saylovlarni tashkil etish, kampaniya boshlash'],
          ['Boshqarish', 'Komissiyalar tizimiga boshchilik, nazorat'],
          ['Uslubiy', 'Qarorlar, yo‘riqnomalar, tushuntirishlar'],
          ['Axborot', 'Elektron ro‘yxat, axborot tizimi'],
          ['Hududiy', 'Okruglar, uchastkalar, komissiyalar tuzish'],
          ['Ta’lim', 'O‘qishlar tashkil etish'],
          ['Nazorat', 'Qarorlarni bekor qilish'],
          ['Xalqaro', 'Kuzatuvchilarga mandat berish'],
          ['Moliyaviy', 'Smeta, mablag‘ taqsimlash'],
          ['Nomzodlar', 'Ro‘yxatga olish, guvohnomalar berish'],
        ],
      },
    ],
    lawyerCommentary:
      '14-modda Markaziy saylov komissiyasining vakolatlarini to‘liq qamrab oladi. Bu vakolatlar saylov jarayonining barcha bosqichlarini — tayyorgarlikdan natijalarni e’lon qilishgacha — qamrab oladi. Komissiyaning mustaqil qarorlar qabul qilish va ularni bekor qilish huquqi uning saylov jarayonidagi markaziy o‘rnini ko‘rsatadi.',
    lawyerCommentaryRu:
      'Статья 14 охватывает весь спектр полномочий ЦИК — от подготовки до объявления результатов. Право принимать самостоятельные решения и отменять незаконные решения других комиссий подчёркивает центральную роль ЦИК.',
    lawyerCommentaryEn:
      'Article 14 details the full mandate of the CEC from pre-election preparation to result certification. Its power to annul unlawful subordinate commission decisions underscores its central authority.',
    quickFacts: [
      { label: 'Vakolat guruhlari', value: '10 ta yo‘nalish' },
      { label: 'Axborot tizimi', value: 'Yagona elektron ro‘yxat' },
      { label: 'Nazorat huquqi', value: 'Zid qarorlarni bekor qilish' },
    ],
    figure: {
      src: '/assets/aistudio/qasamyod_35220883.jpg',
      figureNo: 'FIG. 04',
      alt: 'Saylov uchastkasi ochilishida komissiya a’zolari va kuzatuvchilar',
      caption: 'Saylov komissiyalari faoliyatining tashkiliy madaniyati — saylov uchastkasi ochilishida komissiya a’zolari va kuzatuvchilar.',
    },
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    number: 1,
    question: 'Saylash huquqiga kim ega?',
    questionRu: 'Кто обладает правом избирать?',
    questionEn: 'Who holds the right to vote?',
    answer: 'Saylov kuniga qadar yoki saylov kuni 18 yoshga to‘lgan O‘zbekiston Respublikasi fuqarolari.',
    answerRu: 'Граждане Республики Узбекистан, достигшие 18 лет ко дню выборов или в день выборов.',
    answerEn: 'Citizens of the Republic of Uzbekistan who have reached the age of 18 prior to or on election day.',
    relatedArticleId: 'modda-4',
    relatedArticleLabel: '4-modda',
  },
  {
    id: 'faq-2',
    number: 2,
    question: 'Saylov huquqidan kim mahrum etilishi mumkin?',
    questionRu: 'Кто может быть лишён избирательного права?',
    questionEn: 'Who may be deprived of the right to vote?',
    answer: 'Sud tomonidan muomalaga layoqatsiz deb topilgan fuqarolar va og‘ir yoki o‘ta og‘ir jinoyatlar uchun sud hukmiga ko‘ra ozodlikdan mahrum etish joylarida saqlanayotgan shaxslar — faqat qonunga muvofiq va sud qarori asosida.',
    answerRu: 'Граждане, признанные судом недееспособными, а также лица, содержащиеся в местах лишения свободы по приговору суда за тяжкие и особо тяжкие преступления — только по закону и решению суда.',
    answerEn: 'Citizens declared legally incapacitated by a court and persons serving prison sentences for grave or especially grave crimes — solely by law and court ruling.',
    relatedArticleId: 'modda-5',
    relatedArticleLabel: '5-modda',
  },
  {
    id: 'faq-3',
    number: 3,
    question: 'Qonunchilik palatasi deputatlari saylovi uchun nechta okrug tuziladi?',
    questionRu: 'Сколько округов образуется для выборов депутатов Законодательной палаты?',
    questionEn: 'How many districts are formed for Legislative Chamber elections?',
    answer: '75 ta hududiy bir mandatli saylov okrugi.',
    answerRu: '75 территориальных одномандатных избирательных округов.',
    answerEn: '75 territorial single-mandate electoral districts (plus 1 unified nationwide district for party lists).',
    relatedArticleId: 'modda-9',
    relatedArticleLabel: '9-modda',
  },
  {
    id: 'faq-4',
    number: 4,
    question: 'Saylov uchastkalari qachon tuziladi?',
    questionRu: 'Когда образуются избирательные участки?',
    questionEn: 'When are polling stations established?',
    answer: 'Saylovga kamida 60 kun qolganida, ayrim hollarda 7 kun qolganida.',
    answerRu: 'Не позднее чем за 60 дней до выборов, а в исключительных случаях — не позднее чем за 7 дней.',
    answerEn: 'At least 60 days prior to election day, or at least 7 days prior in exceptional cases (such as military units or overseas missions).',
    relatedArticleId: 'modda-10',
    relatedArticleLabel: '10-modda',
  },
  {
    id: 'faq-5',
    number: 5,
    question: 'Saylov uchastkasida nechta saylovchi bo‘lishi mumkin?',
    questionRu: 'Сколько избирателей может быть на одном избирательном участке?',
    questionEn: 'How many voters may be assigned to one polling station?',
    answer: 'Kamida 20 nafardan, ko‘pi bilan 3 000 nafardan oshmagan holda.',
    answerRu: 'Как правило, от 20 до 3 000 избирателей.',
    answerEn: 'As a rule, a minimum of 20 and a maximum of 3,000 voters.',
    relatedArticleId: 'modda-10',
    relatedArticleLabel: '10-modda',
  },
  {
    id: 'faq-6',
    number: 6,
    question: 'Okruglar ro‘yxati qachon e’lon qilinadi?',
    questionRu: 'Когда публикуется список избирательных округов?',
    questionEn: 'When is the list of electoral districts published?',
    answer: 'Saylovdan kamida 70 kun oldin.',
    answerRu: 'Не менее чем за 70 дней до выборов.',
    answerEn: 'At least 70 days prior to election day.',
    relatedArticleId: 'modda-9',
    relatedArticleLabel: '9-modda',
  },
  {
    id: 'faq-7',
    number: 7,
    question: 'Markaziy saylov komissiyasi necha a’zodan iborat?',
    questionRu: 'Из скольких членов состоит Центральная избирательная комиссия?',
    questionEn: 'How many members compose the Central Election Commission?',
    answer: '9 nafar a’zodan, doimiy asosda faoliyat yuritadi.',
    answerRu: 'Из 9 членов, работающих на постоянной основе.',
    answerEn: '9 members operating on a permanent basis.',
    relatedArticleId: 'modda-12',
    relatedArticleLabel: '12-modda',
  },
  {
    id: 'faq-8',
    number: 8,
    question: 'Markaziy saylov komissiyasi Raisi necha muddatga saylanadi?',
    questionRu: 'На какой срок избирается Председатель ЦИК?',
    questionEn: 'For what term is the CEC Chairperson elected?',
    answer: '5 yillik muddatga, surunkasiga ikki muddatdan ortiq emas.',
    answerRu: 'На 5-летний срок, не более двух сроков подряд.',
    answerEn: 'For a 5-year term, and no more than two consecutive terms.',
    relatedArticleId: 'modda-12',
    relatedArticleLabel: '12-modda',
  },
  {
    id: 'faq-9',
    number: 9,
    question: 'Favqulodda holat davomida saylov o‘tkaziladimi?',
    questionRu: 'Проводятся ли выборы во время чрезвычайного положения?',
    questionEn: 'Can elections be held during a state of emergency?',
    answer: 'Yo‘q. Favqulodda holat amal qilishining butun muddati davomida saylovlar o‘tkazilmaydi.',
    answerRu: 'Нет. В течение всего срока действия чрезвычайного положения выборы не проводятся.',
    answerEn: 'No. Elections are not held for the entire duration of a state of emergency.',
    relatedArticleId: 'modda-81',
    relatedArticleLabel: '81-modda',
  },
  {
    id: 'faq-10',
    number: 10,
    question: 'Saylov okruglaridagi saylovchilar soni qancha farq qilishi mumkin?',
    questionRu: 'Какое отклонение числа избирателей допустимо в округах?',
    questionEn: 'What voter population variance is permitted across districts?',
    answer: 'Yo‘l qo‘yiladigan eng ko‘p chetga chiqish, qoida tariqasida, 10 foizdan oshmasligi kerak.',
    answerRu: 'Допустимое максимальное отклонение, как правило, не должно превышать 10 процентов.',
    answerEn: 'The maximum permissible deviation, as a rule, must not exceed 10 percent.',
    relatedArticleId: 'modda-9',
    relatedArticleLabel: '9-modda',
  },
];

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    id: 'term-okrug',
    term: 'Saylov okrugi',
    termRu: 'Избирательный округ',
    termEn: 'Electoral District',
    definition: 'Saylov o‘tkaziladigan hududiy birlik',
    definitionRu: 'Территориальная единица, в пределах которой проводятся выборы',
    definitionEn: 'Territorial unit within which elections are conducted',
    relatedArticleId: 'modda-9',
  },
  {
    id: 'term-uchastka',
    term: 'Saylov uchastkasi',
    termRu: 'Избирательный участок',
    termEn: 'Polling Station',
    definition: 'Ovoz berish bevosita tashkil etiladigan joy',
    definitionRu: 'Место непосредственной организации и проведения голосования',
    definitionEn: 'Location where voting is directly organized and conducted',
    relatedArticleId: 'modda-10',
  },
  {
    id: 'term-msk',
    term: 'Markaziy saylov komissiyasi',
    termRu: 'Центральная избирательная комиссия',
    termEn: 'Central Election Commission',
    definition: 'Saylovlarni tashkil etuvchi doimiy organ (9 a’zo)',
    definitionRu: 'Постоянный орган, организующий выборы (9 членов)',
    definitionEn: 'Permanent national body organizing elections (9 members)',
    relatedArticleId: 'modda-12',
  },
  {
    id: 'term-hududiy',
    term: 'Hududiy saylov komissiyasi',
    termRu: 'Территориальная избирательная комиссия',
    termEn: 'Territorial Election Commission',
    definition: 'Viloyat/Toshkent shahar darajasidagi komissiya',
    definitionRu: 'Комиссия уровня области или города Ташкента',
    definitionEn: 'Commission operating at the regional or Tashkent city level',
    relatedArticleId: 'modda-11',
  },
  {
    id: 'term-okrug-kom',
    term: 'Okrug saylov komissiyasi',
    termRu: 'Окружная избирательная комиссия',
    termEn: 'District Election Commission',
    definition: 'Viloyat/Toshkent shahar Kengashlari saylovi uchun',
    definitionRu: 'Комиссия для проведения выборов в областные и Ташкентский городской Кенгаши',
    definitionEn: 'Commission formed for regional and Tashkent city Council elections',
    relatedArticleId: 'modda-11',
  },
  {
    id: 'term-uchastka-kom',
    term: 'Uchastka saylov komissiyasi',
    termRu: 'Участковая избирательная комиссия',
    termEn: 'Precinct Election Commission',
    definition: 'Eng quyi bo‘g‘in komissiyasi',
    definitionRu: 'Комиссия низового уровня на избирательном участке',
    definitionEn: 'Grassroots-level commission operating at each polling station',
    relatedArticleId: 'modda-11',
  },
  {
    id: 'term-kuzatuvchi',
    term: 'Kuzatuvchi',
    termRu: 'Наблюдатель',
    termEn: 'Observer',
    definition: 'Saylov jarayonini kuzatish huquqiga ega shaxs',
    definitionRu: 'Лицо, уполномоченное осуществлять наблюдение за избирательным процессом',
    definitionEn: 'Authorized person entitled to monitor all stages of the electoral process',
    relatedArticleId: 'modda-8',
  },
  {
    id: 'term-favqulodda',
    term: 'Favqulodda holat',
    termRu: 'Чрезвычайное положение',
    termEn: 'State of Emergency',
    definition: 'Saylov o‘tkazilishini cheklovchi alohida huquqiy rejim',
    definitionRu: 'Особый правовой режим, в период которого выборы не проводятся',
    definitionEn: 'Special legal regime during which elections are suspended',
    relatedArticleId: 'modda-81',
  },
  {
    id: 'term-partiya-royxati',
    term: 'Partiya ro‘yxati',
    termRu: 'Партийный список',
    termEn: 'Party List',
    definition: 'Siyosiy partiya tomonidan ko‘rsatilgan nomzodlar ro‘yxati',
    definitionRu: 'Список кандидатов, выдвинутых политической партией',
    definitionEn: 'List of candidates nominated by a registered political party',
    relatedArticleId: 'modda-9',
  },
  {
    id: 'term-bir-mandatli',
    term: 'Bir mandatli okrug',
    termRu: 'Одномандатный округ',
    termEn: 'Single-Mandate District',
    definition: 'Bitta deputat saylanadigan saylov okrugi',
    definitionRu: 'Избирательный округ, от которого избирается один депутат',
    definitionEn: 'Electoral district from which a single deputy is elected',
    relatedArticleId: 'modda-9',
  },
  {
    id: 'term-yagona-okrug',
    term: 'Yagona saylov okrugi',
    termRu: 'Единый избирательный округ',
    termEn: 'Unified Electoral District',
    definition: 'Butun mamlakat hududini qamrab oluvchi okrug',
    definitionRu: 'Округ, охватывающий всю территорию страны',
    definitionEn: 'Nationwide electoral district encompassing the entire territory of the country',
    relatedArticleId: 'modda-9',
  },
];

export const CODE_CONCLUSION = {
  title: 'Xulosa',
  titleRu: 'Заключение',
  titleEn: 'Conclusion',
  paragraphs: [
    'O‘zbekiston Respublikasi Saylov Kodeksi — fuqarolarning saylov huquqlarini kafolatlovchi, saylov jarayonining demokratik prinsiplarini mustahkamlovchi va xalqaro standartlarga mos keluvchi huquqiy hujjatdir.',
    'Kodeksning asosiy prinsiplari — umumiylik, tenglik, to‘g‘ridan-to‘g‘rilik, yashirin ovoz berish, ochiqlik va oshkoralik — erkin va adolatli saylovlarni ta’minlashning muhim kafolatidir.',
    'Saylov jarayoni ishtirokchilari — saylovchilar, nomzodlar, siyosiy partiyalar, kuzatuvchilar va saylov komissiyalari — o‘z faoliyatida ushbu Kodeks talablariga qat’iy rioya qilishlari lozim.',
  ],
  paragraphsRu: [
    'Избирательный кодекс Республики Узбекистан гарантирует избирательные права граждан, укрепляет демократические принципы выборов и соответствует международным стандартам.',
    'Основные принципы Кодекса — всеобщность, равенство, прямое волеизъявление, тайное голосование, открытость и гласность — обеспечивают свободные и справедливые выборы.',
    'Все участники избирательного процесса обязаны строго соблюдать требования настоящего Кодекса.',
  ],
  paragraphsEn: [
    'The Election Code of the Republic of Uzbekistan guarantees citizens’ electoral rights, reinforces democratic election principles, and aligns with international standards.',
    'Its core principles — universality, equality, directness, secret ballot, openness, and transparency — safeguard free and fair elections.',
    'All electoral participants — voters, candidates, political parties, observers, and election commissions — must strictly uphold the provisions of this Code.',
  ],
};
