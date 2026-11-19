import { Language } from '../types/editorial';

export interface UiDictionary {
  brand: string;
  heroKicker: string;
  heroHeadline: string;
  heroSubnote: string;
  verticalEdgeText: string;
  readMoreLink: string;
  editorialGridLabel: string;
  principlesLabel: string;
  principlesHeading: string;
  archiveLabel: string;
  archiveHeading: string;
  toolsLabel: string;
  toolsHeading: string;
  faqCardTitle: string;
  faqCardDesc: string;
  glossaryCardTitle: string;
  glossaryCardDesc: string;
  quizCardTitle: string;
  quizCardDesc: string;
  openAction: string;
  menuTitle: string;
  closeLabel: string;
  searchLabel: string;
  searchPlaceholder: string;
  searchEmptyPrompt: string;
  searchNoResults: string;
  bookmarksTitle: string;
  bookmarksEmpty: string;
  bookmarkAdd: string;
  bookmarkSaved: string;
  tableOfContents: string;
  quickFactsTitle: string;
  lawyerNoteLabel: string;
  prevArticle: string;
  nextArticle: string;
  backHome: string;
  allCommentariesTitle: string;
  allCommentariesDesc: string;
  readFullArticle: string;
  officialTextNotice: string;
  quizQuestionPrefix: string;
  quizNext: string;
  quizFinish: string;
  quizRestart: string;
  quizResultTitle: string;
  quizScoreLabel: string;
  quizViewArticle: string;
  quizCorrectLabel: string;
  quizExplanationLabel: string;
  quizStatusCorrect: string;
  quizStatusWrong: string;
  glossaryFilterPlaceholder: string;
  faqTitle: string;
  glossaryTitle: string;
  footerTagline: string;
  footerNavHeading: string;
  footerResourcesHeading: string;
  footerCopyright: string;
  navLabels: {
    home: string;
    kodeks: string;
    huquq: string;
    komissiyalar: string;
    izohlar: string;
    faq: string;
    glossary: string;
    quiz: string;
  };
}

export const UI_TRANSLATIONS: Record<Language, UiDictionary> = {
  uz: {
    brand: 'SAYLOV HUQUQI',
    heroKicker: "HUQUQIY TA'LIM PLATFORMASI",
    heroHeadline: 'Saylov huquqini anglash — demokratik jamiyatni anglashdir.',
    heroSubnote:
      'O‘zbekiston Respublikasi Saylov kodeksi normalari, beshta demokratik prinsip hamda yurist sharhlari asosida yaratilgan zamonaviy huquqiy nashr.',
    verticalEdgeText: 'O‘ZBEKISTON SAYLOV KODEKSI · 2026',
    readMoreLink: 'Batafsil →',
    editorialGridLabel: 'ASOSIY BO‘LIMLAR',
    principlesLabel: '3-MODDA · ASOSIY PRINSIPLAR TIZIMI',
    principlesHeading: 'Demokratik saylovning besh tayanch ustuni',
    archiveLabel: 'HUJJATLI ARXIV',
    archiveHeading: 'Saylov amaliyoti fotolavhalarda',
    toolsLabel: 'AMALIY BO‘LIMLAR',
    toolsHeading: 'Bilimni mustahkamlash va ma’lumotnoma',
    faqCardTitle: 'Tez-tez so‘raladigan savollar',
    faqCardDesc: 'Saylov yoshi, okruglar soni, komissiyalar tarkibi va muddatlarga oid 10 ta asosiy savol-javob.',
    glossaryCardTitle: 'Qisqacha lug‘at',
    glossaryCardDesc: 'Saylov okrugi, uchastkasi, mandat va huquqiy rejimlar bo‘yicha 11 ta asosiy atama izohi.',
    quizCardTitle: 'Huquqiy test (Bilimni sinash)',
    quizCardDesc: 'Saylov kodeksi moddalari asosida tuzilgan interaktiv huquqiy viktorina va tahliliy javoblar.',
    openAction: 'Ochish →',
    menuTitle: 'Mundarija va bo‘limlar',
    closeLabel: 'Yopish',
    searchLabel: 'Qidiruv',
    searchPlaceholder: 'Modda raqami, atama yoki savolni kiriting (masalan: 18 yosh, 75 okrug)...',
    searchEmptyPrompt: 'Kodeks moddalari, yurist izohlari, savol-javoblar va lug‘at bo‘yicha tezkor qidiruv.',
    searchNoResults: 'So‘rovingiz bo‘yicha natija topilmadi.',
    bookmarksTitle: 'Saqlangan moddalar',
    bookmarksEmpty: 'Hozircha saqlangan moddalar yo‘q. Istalgan modda sahifasida «Saqlash» tugmasini bosing.',
    bookmarkAdd: 'Saqlash',
    bookmarkSaved: 'Saqlangan',
    tableOfContents: 'Mundarija',
    quickFactsTitle: 'Tez ma’lumot',
    lawyerNoteLabel: 'Yurist izohi',
    prevArticle: '← Oldingi modda',
    nextArticle: 'Keyingi modda →',
    backHome: 'Bosh sahifa',
    allCommentariesTitle: 'Yurist izohlari',
    allCommentariesDesc:
      'O‘zbekiston Respublikasi Saylov kodeksining har bir moddasi yuzasidan murakkab huquqiy normalarning sodda va tushunarli doktrinal sharhlari.',
    readFullArticle: 'Moddani to‘liq o‘qish →',
    officialTextNotice: 'Kodeksning rasmiy o‘zbekcha (lotin) matni asl holatda keltirilgan.',
    quizQuestionPrefix: 'Savol',
    quizNext: 'Keyingi savol →',
    quizFinish: 'Natijani ko‘rish',
    quizRestart: 'Testni qayta boshlash',
    quizResultTitle: 'Huquqiy test natijasi',
    quizScoreLabel: 'To‘g‘ri javoblar:',
    quizViewArticle: 'Manba moddani ko‘rish →',
    quizCorrectLabel: 'TO‘G‘RI JAVOB',
    quizExplanationLabel: 'HUQUQIY TUSHUNTIRISH',
    quizStatusCorrect: 'To‘g‘ri',
    quizStatusWrong: 'Noto‘g‘ri',
    glossaryFilterPlaceholder: 'Atama bo‘yicha saralash...',
    faqTitle: 'Tez-tez so‘raladigan savollar (FAQ)',
    glossaryTitle: 'Qisqacha huquqiy lug‘at',
    footerTagline: 'O‘zbekiston Respublikasi Saylov kodeksi asosidagi mustaqil huquqiy ta’lim nashri.',
    footerNavHeading: 'Bo‘limlar',
    footerResourcesHeading: 'Amaliy manbalar',
    footerCopyright: '© 2026 SAYLOV HUQUQI. Barcha huquqlar himoyalangan.',
    navLabels: {
      home: 'Bosh sahifa',
      kodeks: 'Saylov kodeksi',
      huquq: 'Saylov huquqi',
      komissiyalar: 'Saylov komissiyalari',
      izohlar: 'Yurist izohlari',
      faq: 'Savol-javoblar (FAQ)',
      glossary: 'Qisqacha lug‘at',
      quiz: 'Huquqiy test',
    },
  },
  ru: {
    brand: 'SAYLOV HUQUQI',
    heroKicker: 'ПРАВОВАЯ ОБРАЗОВАТЕЛЬНАЯ ПЛАТФОРМА',
    heroHeadline: 'Понимание избирательного права — понимание демократического общества.',
    heroSubnote:
      'Минималистичное редакционное издание на основе Избирательного кодекса Республики Узбекистан, пяти принципов и комментариев юриста.',
    verticalEdgeText: 'ИЗБИРАТЕЛЬНЫЙ КОДЕКС · 2026',
    readMoreLink: 'Подробнее →',
    editorialGridLabel: 'ОСНОВНЫЕ РАЗДЕЛЫ',
    principlesLabel: 'СТАТЬЯ 3 · СИСТЕМА ПРИНЦИПОВ',
    principlesHeading: 'Пять опор демократических выборов',
    archiveLabel: 'ДОКУМЕНТАЛЬНЫЙ АРХИВ',
    archiveHeading: 'Избирательная практика в фотографиях',
    toolsLabel: 'ПРАКТИЧЕСКИЕ МАТЕРИАЛЫ',
    toolsHeading: 'Закрепление знаний и справочник',
    faqCardTitle: 'Часто задаваемые вопросы',
    faqCardDesc: '10 ключевых вопросов и ответов о возрасте избирателя, числе округов, комиссиях и сроках.',
    glossaryCardTitle: 'Краткий словарь',
    glossaryCardDesc: 'Пояснения к 11 основным правовым терминам избирательного процесса.',
    quizCardTitle: 'Правовой тест',
    quizCardDesc: 'Интерактивная проверка знаний по статьям Избирательного кодекса с разбором.',
    openAction: 'Открыть →',
    menuTitle: 'Содержание и разделы',
    closeLabel: 'Закрыть',
    searchLabel: 'Поиск',
    searchPlaceholder: 'Введите номер статьи, термин или вопрос (напр.: 18 yosh, 75)...',
    searchEmptyPrompt: 'Мгновенный поиск по статьям Кодекса, комментариям юриста, FAQ и словарю.',
    searchNoResults: 'По вашему запросу ничего не найдено.',
    bookmarksTitle: 'Сохранённые статьи',
    bookmarksEmpty: 'Нет сохранённых статей. Нажмите «Сохранить» при чтении любой статьи.',
    bookmarkAdd: 'Сохранить',
    bookmarkSaved: 'Сохранено',
    tableOfContents: 'Содержание',
    quickFactsTitle: 'Краткая справка',
    lawyerNoteLabel: 'Комментарий юриста',
    prevArticle: '← Предыдущая статья',
    nextArticle: 'Следующая статья →',
    backHome: 'Главная',
    allCommentariesTitle: 'Комментарии юриста',
    allCommentariesDesc: 'Доступные правовые разъяснения сложных норм каждой статьи Избирательного кодекса.',
    readFullArticle: 'Читать статью полностью →',
    officialTextNotice: 'Ниже приведён аутентичный официальный текст Кодекса на узбекском языке (латиница) с комментарием.',
    quizQuestionPrefix: 'Вопрос',
    quizNext: 'Следующий вопрос →',
    quizFinish: 'Показать результат',
    quizRestart: 'Пройти тест заново',
    quizResultTitle: 'Результат правового теста',
    quizScoreLabel: 'Правильных ответов:',
    quizViewArticle: 'Открыть статью →',
    quizCorrectLabel: 'ВЕРНЫЙ ОТВЕТ',
    quizExplanationLabel: 'ПРАВОВОЕ ПОЯСНЕНИЕ',
    quizStatusCorrect: 'Верно',
    quizStatusWrong: 'Неверно',
    glossaryFilterPlaceholder: 'Фильтр по термину...',
    faqTitle: 'Часто задаваемые вопросы (FAQ)',
    glossaryTitle: 'Краткий правовой словарь',
    footerTagline: 'Независимое правовое образовательное издание на основе Избирательного кодекса Республики Узбекистан.',
    footerNavHeading: 'Разделы',
    footerResourcesHeading: 'Ресурсы',
    footerCopyright: '© 2026 SAYLOV HUQUQI. Все права защищены.',
    navLabels: {
      home: 'Главная',
      kodeks: 'Избирательный кодекс',
      huquq: 'Избирательное право',
      komissiyalar: 'Избирательные комиссии',
      izohlar: 'Комментарии юриста',
      faq: 'Вопросы и ответы',
      glossary: 'Словарь',
      quiz: 'Правовой тест',
    },
  },
  en: {
    brand: 'SAYLOV HUQUQI',
    heroKicker: 'LEGAL EDUCATION PLATFORM',
    heroHeadline: 'Understanding electoral law is understanding a democratic society.',
    heroSubnote:
      'An independent editorial publication built on the Election Code of the Republic of Uzbekistan, democratic principles, and legal commentary.',
    verticalEdgeText: 'UZBEKISTAN ELECTION CODE · 2026',
    readMoreLink: 'Read more →',
    editorialGridLabel: 'CORE SECTIONS',
    principlesLabel: 'ARTICLE 3 · CORE PRINCIPLES',
    principlesHeading: 'Five Pillars of Democratic Elections',
    archiveLabel: 'DOCUMENTARY ARCHIVE',
    archiveHeading: 'Electoral Practice in Photographs',
    toolsLabel: 'PRACTICAL RESOURCES',
    toolsHeading: 'Knowledge Check & Reference',
    faqCardTitle: 'Frequently Asked Questions',
    faqCardDesc: '10 essential Q&As on voting age, electoral districts, commissions, and statutory deadlines.',
    glossaryCardTitle: 'Legal Glossary',
    glossaryCardDesc: 'Concise definitions of 11 core electoral terms from the Code.',
    quizCardTitle: 'Interactive Legal Quiz',
    quizCardDesc: 'Test your grasp of the Election Code with immediate article-cited explanations.',
    openAction: 'Open →',
    menuTitle: 'Index & Sections',
    closeLabel: 'Close',
    searchLabel: 'Search',
    searchPlaceholder: 'Search article numbers, terms, or questions (e.g. 18 yosh, 75)...',
    searchEmptyPrompt: 'Instant search across all articles, lawyer commentaries, FAQ, and glossary.',
    searchNoResults: 'No matching entries found for your query.',
    bookmarksTitle: 'Saved Articles',
    bookmarksEmpty: 'No saved articles yet. Click "Save" on any article page to bookmark it.',
    bookmarkAdd: 'Save',
    bookmarkSaved: 'Saved',
    tableOfContents: 'Contents',
    quickFactsTitle: 'Quick Facts',
    lawyerNoteLabel: 'Legal Commentary',
    prevArticle: '← Previous article',
    nextArticle: 'Next article →',
    backHome: 'Home',
    allCommentariesTitle: 'Legal Commentaries',
    allCommentariesDesc: 'Clear, accessible doctrinal explanations accompanying every article of the Election Code.',
    readFullArticle: 'Read full article →',
    officialTextNotice: 'The official Uzbek Latin statutory text of the Election Code is preserved verbatim below.',
    quizQuestionPrefix: 'Question',
    quizNext: 'Next question →',
    quizFinish: 'View results',
    quizRestart: 'Retake quiz',
    quizResultTitle: 'Legal Quiz Result',
    quizScoreLabel: 'Correct answers:',
    quizViewArticle: 'Inspect source article →',
    quizCorrectLabel: 'CORRECT ANSWER',
    quizExplanationLabel: 'LEGAL EXPLANATION',
    quizStatusCorrect: 'Correct',
    quizStatusWrong: 'Incorrect',
    glossaryFilterPlaceholder: 'Filter terms...',
    faqTitle: 'Frequently Asked Questions (FAQ)',
    glossaryTitle: 'Concise Legal Glossary',
    footerTagline: 'An editorial legal education platform grounded in the Election Code of the Republic of Uzbekistan.',
    footerNavHeading: 'Sections',
    footerResourcesHeading: 'Resources',
    footerCopyright: '© 2026 SAYLOV HUQUQI. All rights reserved.',
    navLabels: {
      home: 'Home',
      kodeks: 'Election Code',
      huquq: 'Electoral Rights',
      komissiyalar: 'Commissions',
      izohlar: 'Legal Commentary',
      faq: 'FAQ',
      glossary: 'Glossary',
      quiz: 'Legal Quiz',
    },
  },
};
