import React from 'react';
import { Bookmark } from 'lucide-react';
import { ELECTION_ARTICLES } from '../data/electionCodeData';
import { UI_TRANSLATIONS } from '../data/translations';
import { AppView, ArticleBlock, Language, TextRun } from '../types/editorial';
import { getAdjacentArticles } from '../utils/electionSearch';

interface ArticleViewProps {
  articleId: string;
  language: Language;
  bookmarkedIds: string[];
  onToggleBookmark: (articleId: string) => void;
  onNavigate: (view: AppView) => void;
}

const renderRuns = (runs: TextRun[]) =>
  runs.map((run, idx) =>
    run.bold ? (
      <strong key={idx} className="font-semibold text-[#111111]">
        {run.text}
      </strong>
    ) : (
      <React.Fragment key={idx}>{run.text}</React.Fragment>
    ),
  );

export const ArticleView: React.FC<ArticleViewProps> = ({
  articleId,
  language,
  bookmarkedIds,
  onToggleBookmark,
  onNavigate,
}) => {
  const t = UI_TRANSLATIONS[language];
  const article =
    ELECTION_ARTICLES.find((a) => a.id === articleId) || ELECTION_ARTICLES[0];
  const { prev, next } = getAdjacentArticles(article.id);
  const saved = bookmarkedIds.includes(article.id);

  const handleNav = (view: AppView) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const displayTitle =
    language === 'ru'
      ? article.titleRu
      : language === 'en'
        ? article.titleEn
        : article.title;

  const displayCommentary =
    language === 'ru'
      ? article.lawyerCommentaryRu
      : language === 'en'
        ? article.lawyerCommentaryEn
        : article.lawyerCommentary;

  const renderBlock = (block: ArticleBlock, idx: number) => {
    switch (block.type) {
      case 'subheading':
        return (
          <h2
            key={idx}
            className="font-sans text-xs uppercase tracking-[0.18em] text-[#111111] font-semibold pt-8 pb-2"
          >
            {block.text}
          </h2>
        );

      case 'paragraph':
        return (
          <p
            key={idx}
            className="font-serif text-[1.125rem] md:text-[1.2rem] leading-[1.82] text-[#111111]/95 mb-5"
          >
            {renderRuns(block.runs)}
          </p>
        );

      case 'list':
        if (block.ordered) {
          return (
            <ol
              key={idx}
              className="list-decimal pl-6 space-y-3 my-5 font-serif text-[1.1rem] leading-[1.78] text-[#111111]/95"
            >
              {block.items.map((item, i) => (
                <li key={i} className="pl-2">
                  {renderRuns(item)}
                </li>
              ))}
            </ol>
          );
        }
        return (
          <ul
            key={idx}
            className="space-y-3 my-5 font-serif text-[1.1rem] leading-[1.78] text-[#111111]/95"
          >
            {block.items.map((item, i) => (
              <li key={i} className="flex items-baseline gap-3.5">
                <span className="text-neutral-400 text-xs select-none" aria-hidden="true">
                  —
                </span>
                <span>{renderRuns(item)}</span>
              </li>
            ))}
          </ul>
        );

      case 'rule':
        return (
          <div key={idx} className="my-8 py-6 border-y border-[#111111]">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
              {block.label}
            </p>
            <p className="font-serif text-lg md:text-xl leading-relaxed text-[#111111] font-medium">
              {renderRuns(block.runs)}
            </p>
          </div>
        );

      case 'schema':
        return (
          <div key={idx} className="my-8 py-6 border-y border-neutral-200">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-5">
              {block.label}
            </p>
            <ol className="space-y-3">
              {block.steps.map((step, sIdx) => (
                <li key={sIdx} className="flex items-baseline gap-4 font-sans text-sm">
                  <span className="tabular-nums text-xs text-neutral-400">
                    0{sIdx + 1}
                  </span>
                  <span className="text-[#111111] font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        );

      case 'table':
        return (
          <div key={idx} className="my-10">
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-neutral-500 mb-4">
              {block.caption}
            </p>
            <div className="overflow-x-auto border-t border-b border-[#111111]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-300">
                    {block.headers.map((header, hIdx) => (
                      <th
                        key={hIdx}
                        className="py-3.5 pr-6 font-sans text-[11px] uppercase tracking-[0.16em] text-neutral-500 font-medium"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {block.rows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`py-3.5 pr-6 text-sm leading-relaxed tabular-nums ${
                            cIdx === 0
                              ? 'font-medium text-[#111111]'
                              : 'text-neutral-700'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
    }
  };

  return (
    <main className="bg-white text-[#111111]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20">
        {/* Top Breadcrumb + Bookmark Action */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-neutral-200 mb-12 md:mb-16">
          <div className="flex items-center gap-3 font-sans text-xs uppercase tracking-[0.16em] text-neutral-500">
            <button
              type="button"
              onClick={() => handleNav({ type: 'home' })}
              className="hover:text-[#111111] cursor-pointer"
            >
              {t.backHome}
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-[#111111]">{article.numberLabel}</span>
          </div>

          <button
            type="button"
            onClick={() => onToggleBookmark(article.id)}
            aria-pressed={saved}
            className={`h-10 px-4 border text-xs uppercase tracking-[0.16em] inline-flex items-center gap-2 transition-colors cursor-pointer ${
              saved
                ? 'bg-[#111111] text-white border-[#111111]'
                : 'bg-white text-[#111111] border-neutral-300 hover:border-[#111111]'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 stroke-[1.6]" fill={saved ? 'currentColor' : 'none'} />
            <span>{saved ? t.bookmarkSaved : t.bookmarkAdd}</span>
          </button>
        </div>

        {/* Mobile Quick Article Switcher */}
        <div className="lg:hidden mb-8">
          <label htmlFor="mobile-article-select" className="block font-sans text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-2">
            {t.tableOfContents}
          </label>
          <select
            id="mobile-article-select"
            value={article.id}
            onChange={(e) => handleNav({ type: 'article', articleId: e.target.value })}
            className="w-full border border-neutral-300 bg-white px-3.5 py-2.5 text-sm font-serif text-[#111111] focus:border-[#111111] focus:outline-none"
          >
            {ELECTION_ARTICLES.map((item) => (
              <option key={item.id} value={item.id}>
                {item.numberLabel} —{' '}
                {language === 'ru'
                  ? item.titleRu
                  : language === 'en'
                    ? item.titleEn
                    : item.title}
              </option>
            ))}
          </select>
        </div>

        {/* 3-Column Editorial Reading Layout (Sticky Mundarija | Narrow Reading Column | Tez Ma'lumot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Sticky Mundarija */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 pr-4">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-5">
              {t.tableOfContents}
            </p>
            <nav aria-label={t.tableOfContents} className="space-y-1.5 border-t border-neutral-200 pt-4">
              {ELECTION_ARTICLES.map((item) => {
                const active = item.id === article.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNav({ type: 'article', articleId: item.id })}
                    className={`w-full text-left py-1.5 text-xs transition-colors flex items-baseline gap-2.5 cursor-pointer ${
                      active
                        ? 'text-[#111111] font-semibold'
                        : 'text-neutral-500 hover:text-[#111111]'
                    }`}
                  >
                    <span className="tabular-nums w-16 shrink-0">{item.numberLabel}</span>
                    <span className="truncate">
                      {language === 'ru'
                        ? item.titleRu
                        : language === 'en'
                          ? item.titleEn
                          : item.title}
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Center Narrow Reading Column */}
          <article className="lg:col-span-6 max-w-[660px] mx-auto w-full">
            <header className="pb-10 border-b border-[#111111] mb-10">
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500 mb-5">
                {article.numberLabel} · {article.divisionTitle}
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-[3.1rem] font-semibold leading-[1.12] tracking-[-0.015em] text-[#111111]">
                {displayTitle}
              </h1>
              {language !== 'uz' && (
                <p className="mt-5 font-sans text-xs text-neutral-500 italic">
                  {t.officialTextNotice}
                </p>
              )}
            </header>

            {article.figure && (
              <figure className="mb-10 pb-8 border-b border-neutral-200">
                <div className="w-full aspect-[16/10] bg-neutral-100 overflow-hidden border border-neutral-200">
                  <img
                    src={article.figure.src}
                    alt={article.figure.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline gap-3">
                  <span className="font-sans text-[11px] tracking-[0.18em] text-neutral-400">
                    {article.figure.figureNo}
                  </span>
                  <span className="font-serif text-xs italic text-neutral-600">
                    {article.figure.caption}
                  </span>
                </figcaption>
              </figure>
            )}

            {/* Statutory Body Blocks */}
            <div>{article.blocks.map((block, idx) => renderBlock(block, idx))}</div>

            {/* Minimal Quotation Block for Lawyer Commentary (No thick left accent bar; clean hairline top/bottom) */}
            <aside
              aria-label={t.lawyerNoteLabel}
              className="my-12 py-8 border-y border-[#111111]"
            >
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500 mb-4">
                {t.lawyerNoteLabel}
              </p>
              <blockquote className="font-serif italic text-xl md:text-[1.45rem] leading-[1.6] text-[#111111]">
                “{displayCommentary}”
              </blockquote>
            </aside>

            {/* Previous / Next Article Navigation */}
            <nav
              aria-label="Moddalararo navigatsiya"
              className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6"
            >
              {prev ? (
                <button
                  type="button"
                  onClick={() => handleNav({ type: 'article', articleId: prev.id })}
                  className="text-left group cursor-pointer max-w-xs"
                >
                  <span className="block font-sans text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-1">
                    {t.prevArticle}
                  </span>
                  <span className="font-serif text-base font-medium group-hover:underline underline-offset-4">
                    {prev.numberLabel}.{' '}
                    {language === 'ru'
                      ? prev.titleRu
                      : language === 'en'
                        ? prev.titleEn
                        : prev.title}
                  </span>
                </button>
              ) : (
                <span />
              )}

              {next ? (
                <button
                  type="button"
                  onClick={() => handleNav({ type: 'article', articleId: next.id })}
                  className="text-left sm:text-right group cursor-pointer max-w-xs sm:ml-auto"
                >
                  <span className="block font-sans text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-1">
                    {t.nextArticle}
                  </span>
                  <span className="font-serif text-base font-medium group-hover:underline underline-offset-4">
                    {next.numberLabel}.{' '}
                    {language === 'ru'
                      ? next.titleRu
                      : language === 'en'
                        ? next.titleEn
                        : next.title}
                  </span>
                </button>
              ) : (
                <span />
              )}
            </nav>
          </article>

          {/* Right Sticky Quick Facts Sidebar (Tez Ma'lumot) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-28 border-t lg:border-t-0 lg:border-l border-neutral-200 pt-8 lg:pt-0 lg:pl-8">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-5">
              {t.quickFactsTitle}
            </p>
            <dl className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
              {article.quickFacts.map((fact, idx) => (
                <div key={idx} className="py-4">
                  <dt className="font-sans text-[11px] uppercase tracking-[0.14em] text-neutral-500 mb-1">
                    {fact.label}
                  </dt>
                  <dd className="font-serif text-base font-medium text-[#111111] tabular-nums">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 space-y-3">
              <button
                type="button"
                onClick={() => handleNav({ type: 'quiz' })}
                className="w-full py-3 px-4 border border-[#111111] text-xs uppercase tracking-[0.16em] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors cursor-pointer"
              >
                {t.navLabels.quiz}
              </button>
              <button
                type="button"
                onClick={() => handleNav({ type: 'faq' })}
                className="w-full py-3 px-4 border border-neutral-300 text-xs uppercase tracking-[0.16em] text-neutral-700 hover:border-[#111111] hover:text-[#111111] transition-colors cursor-pointer"
              >
                {t.navLabels.faq}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};
