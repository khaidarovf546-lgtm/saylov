export type Language = 'uz' | 'ru' | 'en';

export type PillarId = 'kodeks' | 'huquq' | 'komissiyalar' | 'izohlar';

export type AppView =
  | { type: 'home' }
  | { type: 'section'; pillarId: PillarId }
  | { type: 'article'; articleId: string }
  | { type: 'commentary' }
  | { type: 'faq' }
  | { type: 'glossary' }
  | { type: 'quiz' };

export interface TextRun {
  text: string;
  bold?: boolean;
}

export type ArticleBlock =
  | { type: 'subheading'; text: string }
  | { type: 'paragraph'; runs: TextRun[] }
  | { type: 'list'; ordered?: boolean; items: TextRun[][] }
  | { type: 'rule'; label: string; runs: TextRun[] }
  | { type: 'schema'; label: string; steps: string[] }
  | {
      type: 'table';
      caption: string;
      headers: string[];
      rows: string[][];
    };

export interface QuickFact {
  label: string;
  value: string;
}

export interface ElectionArticle {
  id: string;
  numberLabel: string;
  articleNumber: number;
  divisionId: string;
  divisionTitle: string;
  pillarId: PillarId;
  title: string;
  titleRu: string;
  titleEn: string;
  leadSummary: string;
  leadSummaryRu: string;
  leadSummaryEn: string;
  blocks: ArticleBlock[];
  lawyerCommentary: string;
  lawyerCommentaryRu: string;
  lawyerCommentaryEn: string;
  quickFacts: QuickFact[];
  figure?: {
    src: string;
    caption: string;
    figureNo: string;
    alt: string;
  };
}

export interface FaqItem {
  id: string;
  number: number;
  question: string;
  questionRu: string;
  questionEn: string;
  answer: string;
  answerRu: string;
  answerEn: string;
  relatedArticleId: string;
  relatedArticleLabel: string;
}

export interface GlossaryItem {
  id: string;
  term: string;
  termRu: string;
  termEn: string;
  definition: string;
  definitionRu: string;
  definitionEn: string;
  relatedArticleId?: string;
}

export interface QuizQuestion {
  id: string;
  number: number;
  articleRef: string;
  articleId: string;
  question: string;
  questionRu: string;
  questionEn: string;
  options: string[];
  optionsRu: string[];
  optionsEn: string[];
  correctIndex: number;
  explanation: string;
  explanationRu: string;
  explanationEn: string;
}
