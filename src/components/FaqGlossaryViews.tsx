import React, { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CODE_CONCLUSION, FAQ_ITEMS, GLOSSARY_ITEMS } from '../data/electionCodeData';
import { UI_TRANSLATIONS } from '../data/translations';
import { AppView, Language } from '../types/editorial';

interface FaqViewProps {
  language: Language;
  onNavigate: (view: AppView) => void;
}

export const FaqView: React.FC<FaqViewProps> = ({ language, onNavigate }) => {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);
  const t = UI_TRANSLATIONS[language];

  const handleNav = (view: AppView) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-white text-[#111111]">
      <div className="max-w-[1040px] mx-auto px-6 md:px-12 py-14 md:py-24">
        <div className="mb-12">
          <button
            type="button"
            onClick={() => handleNav({ type: 'home' })}
            className="font-sans text-xs uppercase tracking-[0.16em] text-neutral-500 hover:text-[#111111] cursor-pointer"
          >
            ← {t.backHome}
          </button>
        </div>

        <header className="pb-12 border-b border-[#111111]">
          <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500 mb-5">
            VI BO‘LIM · AMALIY MA’LUMOTLAR
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-[1.1]">
            {t.faqTitle}
          </h1>
        </header>

        <div className="divide-y divide-neutral-200 border-b border-neutral-200">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const qText =
              language === 'ru'
                ? item.questionRu
                : language === 'en'
                  ? item.questionEn
                  : item.question;
            const aText =
              language === 'ru' ? item.answerRu : language === 'en' ? item.answerEn : item.answer;

            return (
              <div key={item.id} className="py-6">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? '' : item.id)}
                  className="w-full flex items-baseline justify-between gap-6 text-left cursor-pointer group"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-sans text-xs tabular-nums text-neutral-400 shrink-0 w-6">
                      {String(item.number).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-xl md:text-2xl font-medium group-hover:underline underline-offset-4 decoration-1">
                      {qText}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-neutral-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#111111]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-4 pl-11 space-y-4 max-w-2xl">
                    <p className="font-serif text-lg leading-relaxed text-neutral-700">
                      {aText}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        handleNav({ type: 'article', articleId: item.relatedArticleId })
                      }
                      className="font-sans text-xs uppercase tracking-[0.16em] text-[#111111] border-b border-[#111111] pb-0.5 hover:opacity-60 cursor-pointer"
                    >
                      {item.relatedArticleLabel} →
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

interface GlossaryViewProps {
  language: Language;
  onNavigate: (view: AppView) => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ language, onNavigate }) => {
  const [filterText, setFilterText] = useState('');
  const t = UI_TRANSLATIONS[language];

  const handleNav = (view: AppView) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filtered = useMemo(() => {
    const q = filterText.trim().toLowerCase();
    if (!q) return GLOSSARY_ITEMS;
    return GLOSSARY_ITEMS.filter((item) =>
      `${item.term} ${item.termRu} ${item.termEn} ${item.definition} ${item.definitionRu} ${item.definitionEn}`
        .toLowerCase()
        .includes(q),
    );
  }, [filterText]);

  const conclusionParagraphs =
    language === 'ru'
      ? CODE_CONCLUSION.paragraphsRu
      : language === 'en'
        ? CODE_CONCLUSION.paragraphsEn
        : CODE_CONCLUSION.paragraphs;

  return (
    <main className="bg-white text-[#111111]">
      <div className="max-w-[1040px] mx-auto px-6 md:px-12 py-14 md:py-24">
        <div className="mb-12">
          <button
            type="button"
            onClick={() => handleNav({ type: 'home' })}
            className="font-sans text-xs uppercase tracking-[0.16em] text-neutral-500 hover:text-[#111111] cursor-pointer"
          >
            ← {t.backHome}
          </button>
        </div>

        <header className="pb-10 border-b border-[#111111] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500 mb-5">
              VI BO‘LIM · ATAMALAR IZOHI
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-[1.1]">
              {t.glossaryTitle}
            </h1>
          </div>

          <div className="w-full md:w-72 border-b border-neutral-300 focus-within:border-[#111111]">
            <label htmlFor="glossary-filter" className="sr-only">
              {t.glossaryFilterPlaceholder}
            </label>
            <input
              id="glossary-filter"
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder={t.glossaryFilterPlaceholder}
              className="w-full py-2 text-sm bg-transparent focus:outline-none placeholder:text-neutral-400"
            />
          </div>
        </header>

        <div className="divide-y divide-neutral-200 border-b border-neutral-200">
          {filtered.length === 0 ? (
            <p className="py-10 text-sm text-neutral-500">{t.searchNoResults}</p>
          ) : (
            filtered.map((item) => {
              const term =
                language === 'ru' ? item.termRu : language === 'en' ? item.termEn : item.term;
              const def =
                language === 'ru'
                  ? item.definitionRu
                  : language === 'en'
                    ? item.definitionEn
                    : item.definition;

              return (
                <div
                  key={item.id}
                  className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
                >
                  <h2 className="md:col-span-4 font-serif text-xl md:text-2xl font-medium">
                    {term}
                  </h2>
                  <p className="md:col-span-6 font-sans text-sm md:text-base text-neutral-600 leading-relaxed">
                    {def}
                  </p>
                  <div className="md:col-span-2 md:text-right">
                    {item.relatedArticleId && (
                      <button
                        type="button"
                        onClick={() =>
                          handleNav({
                            type: 'article',
                            articleId: item.relatedArticleId!,
                          })
                        }
                        className="font-sans text-xs uppercase tracking-[0.14em] text-neutral-500 hover:text-[#111111] cursor-pointer"
                      >
                        {item.relatedArticleId.replace('modda-', '')}-modda →
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <section className="mt-16 pt-12 border-t border-neutral-200 max-w-2xl space-y-4">
          <h2 className="font-serif text-2xl font-medium">
            {language === 'ru'
              ? CODE_CONCLUSION.titleRu
              : language === 'en'
                ? CODE_CONCLUSION.titleEn
                : CODE_CONCLUSION.title}
          </h2>
          {conclusionParagraphs.map((p, idx) => (
            <p key={idx} className="font-serif text-base leading-relaxed text-neutral-700">
              {p}
            </p>
          ))}
        </section>
      </div>
    </main>
  );
};
