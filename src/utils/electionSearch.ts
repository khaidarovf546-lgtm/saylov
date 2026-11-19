import { ELECTION_ARTICLES, FAQ_ITEMS, GLOSSARY_ITEMS } from '../data/electionCodeData';
import { ArticleBlock, ElectionArticle, Language } from '../types/editorial';

export interface SearchResult {
  id: string;
  kind: 'article' | 'faq' | 'glossary';
  kicker: string;
  title: string;
  excerpt: string;
  targetView: { type: 'article'; articleId: string } | { type: 'faq' } | { type: 'glossary' };
}

export function extractArticlePlainText(article: ElectionArticle): string {
  const parts: string[] = [
    article.numberLabel,
    article.title,
    article.titleRu,
    article.titleEn,
    article.divisionTitle,
    article.leadSummary,
    article.lawyerCommentary,
    article.lawyerCommentaryRu,
    article.lawyerCommentaryEn,
  ];

  const extractBlock = (block: ArticleBlock): void => {
    switch (block.type) {
      case 'subheading':
        parts.push(block.text);
        break;
      case 'paragraph':
        parts.push(block.runs.map((r) => r.text).join(''));
        break;
      case 'rule':
        parts.push(block.label, block.runs.map((r) => r.text).join(''));
        break;
      case 'list':
        block.items.forEach((item) => parts.push(item.map((r) => r.text).join('')));
        break;
      case 'schema':
        parts.push(block.label, ...block.steps);
        break;
      case 'table':
        parts.push(block.caption, ...block.headers);
        block.rows.forEach((row) => parts.push(...row));
        break;
    }
  };

  article.blocks.forEach(extractBlock);
  return parts.join(' ').toLowerCase();
}

export function searchElectionContent(rawQuery: string, lang: Language = 'uz'): SearchResult[] {
  const query = rawQuery.trim().toLowerCase();
  if (!query) {
    return [];
  }

  const results: SearchResult[] = [];

  for (const article of ELECTION_ARTICLES) {
    const haystack = extractArticlePlainText(article);
    if (haystack.includes(query)) {
      const title =
        lang === 'ru' ? article.titleRu : lang === 'en' ? article.titleEn : article.title;
      const excerpt =
        lang === 'ru'
          ? article.leadSummaryRu
          : lang === 'en'
            ? article.leadSummaryEn
            : article.leadSummary;
      results.push({
        id: `search-${article.id}`,
        kind: 'article',
        kicker: `${article.numberLabel.toUpperCase()} · ${article.divisionTitle}`,
        title,
        excerpt,
        targetView: { type: 'article', articleId: article.id },
      });
    }
  }

  for (const faq of FAQ_ITEMS) {
    const haystack = `${faq.question} ${faq.questionRu} ${faq.questionEn} ${faq.answer} ${faq.answerRu} ${faq.answerEn} ${faq.relatedArticleLabel}`.toLowerCase();
    if (haystack.includes(query)) {
      results.push({
        id: `search-${faq.id}`,
        kind: 'faq',
        kicker: `FAQ #${faq.number} · ${faq.relatedArticleLabel.toUpperCase()}`,
        title: lang === 'ru' ? faq.questionRu : lang === 'en' ? faq.questionEn : faq.question,
        excerpt: lang === 'ru' ? faq.answerRu : lang === 'en' ? faq.answerEn : faq.answer,
        targetView: { type: 'faq' },
      });
    }
  }

  for (const item of GLOSSARY_ITEMS) {
    const haystack = `${item.term} ${item.termRu} ${item.termEn} ${item.definition} ${item.definitionRu} ${item.definitionEn}`.toLowerCase();
    if (haystack.includes(query)) {
      results.push({
        id: `search-${item.id}`,
        kind: 'glossary',
        kicker: lang === 'ru' ? 'СЛОВАРЬ' : lang === 'en' ? 'GLOSSARY' : 'LUG‘AT',
        title: lang === 'ru' ? item.termRu : lang === 'en' ? item.termEn : item.term,
        excerpt:
          lang === 'ru' ? item.definitionRu : lang === 'en' ? item.definitionEn : item.definition,
        targetView: { type: 'glossary' },
      });
    }
  }

  return results;
}

export function getAdjacentArticles(articleId: string): {
  prev: ElectionArticle | null;
  next: ElectionArticle | null;
} {
  const index = ELECTION_ARTICLES.findIndex((a) => a.id === articleId);
  if (index === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: index > 0 ? ELECTION_ARTICLES[index - 1] : null,
    next: index < ELECTION_ARTICLES.length - 1 ? ELECTION_ARTICLES[index + 1] : null,
  };
}
