import React from 'react';
import { EDITORIAL_PILLARS, PHOTO_ARCHIVE } from '../data/electionCodeData';
import { UI_TRANSLATIONS } from '../data/translations';
import { AppView, Language } from '../types/editorial';

interface HomeViewProps {
  language: Language;
  onNavigate: (view: AppView) => void;
}

const PRINCIPLES_PREVIEW = [
  {
    no: '01',
    nameUz: 'Umumiylik',
    nameRu: 'Всеобщность',
    nameEn: 'Universality',
    descUz: 'Saylovlarda keng fuqarolar qatlami ishtirok etadi (18 yoshdan boshlab)',
    descRu: 'Участие широких слоёв граждан начиная с 18 лет без дискриминации',
    descEn: 'Broad citizen participation starting at age 18 without discrimination',
    ref: '4-modda',
    articleId: 'modda-4',
  },
  {
    no: '02',
    nameUz: 'Tenglik',
    nameRu: 'Равенство',
    nameEn: 'Equality',
    descUz: 'Har bir fuqaro bir ovozga ega va barcha ovozlar teng qiymatga ega',
    descRu: 'Каждый гражданин обладает одним голосом равной юридической силы',
    descEn: 'Every citizen holds one vote of equal weight',
    ref: '5-modda',
    articleId: 'modda-5',
  },
  {
    no: '03',
    nameUz: 'To‘g‘ridan-to‘g‘rilik',
    nameRu: 'Прямое право',
    nameEn: 'Directness',
    descUz: 'Deputatlar va Prezident fuqarolar tomonidan vositachilarsiz bevosita saylanadi',
    descRu: 'Президент и депутаты избираются гражданами непосредственно без посредников',
    descEn: 'The President and deputies are elected directly without intermediaries',
    ref: '6-modda',
    articleId: 'modda-6',
  },
  {
    no: '04',
    nameUz: 'Yashirin ovoz berish',
    nameRu: 'Тайное голосование',
    nameEn: 'Secret Ballot',
    descUz: 'Saylovchining xohish-irodasi ustidan har qanday nazorat taqiqlanadi',
    descRu: 'Исключается любой контроль над волеизъявлением избирателя',
    descEn: 'Any supervision or control over the voter’s choice is prohibited',
    ref: '7-modda',
    articleId: 'modda-7',
  },
  {
    no: '05',
    nameUz: 'Ochiqlik va oshkoralik',
    nameRu: 'Открытость и гласность',
    nameEn: 'Openness & Transparency',
    descUz: 'Saylov komissiyalari ochiq ishlaydi, OAV va kuzatuvchilar ishtiroki kafolatlanadi',
    descRu: 'Комиссии работают открыто с участием СМИ и наблюдателей',
    descEn: 'Commissions operate openly with media and observer participation',
    ref: '8-modda',
    articleId: 'modda-8',
  },
];

export const HomeView: React.FC<HomeViewProps> = ({ language, onNavigate }) => {
  const t = UI_TRANSLATIONS[language];

  const handleNav = (view: AppView) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPillarText = (pillar: (typeof EDITORIAL_PILLARS)[number]) => ({
    category:
      language === 'ru'
        ? pillar.categoryLabelRu
        : language === 'en'
          ? pillar.categoryLabelEn
          : pillar.categoryLabel,
    title: language === 'ru' ? pillar.titleRu : language === 'en' ? pillar.titleEn : pillar.title,
    desc:
      language === 'ru'
        ? pillar.descriptionRu
        : language === 'en'
          ? pillar.descriptionEn
          : pillar.description,
  });

  return (
    <main className="bg-white text-[#111111]">
      {/* HERO SECTION */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-20 md:pt-28 md:pb-32 relative">
        <div className="flex items-start justify-between gap-12">
          <div className="max-w-[750px]">
            <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.22em] text-neutral-500 mb-6 md:mb-8">
              {t.heroKicker}
            </p>
            <h1 className="font-serif text-[2.35rem] sm:text-[3.25rem] md:text-[4.1rem] lg:text-[4.5rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[#111111]">
              {t.heroHeadline}
            </h1>
            <p className="mt-8 md:mt-10 font-sans text-sm md:text-base text-neutral-600 leading-relaxed max-w-[540px]">
              {t.heroSubnote}
            </p>
          </div>

          {/* Vertical Date / Section Indicator on the right edge */}
          <div className="hidden md:flex flex-col items-center gap-4 pt-2 shrink-0 select-none">
            <span className="font-sans text-[11px] tabular-nums tracking-[0.2em] text-neutral-400">
              01
            </span>
            <span className="w-px h-16 bg-neutral-300" aria-hidden="true" />
            <span className="writing-vertical-rl font-sans text-[10px] uppercase tracking-[0.24em] text-neutral-500">
              I — VI BO‘LIMLAR · 2026
            </span>
          </div>
        </div>
      </section>

      {/* ASYMMETRIC EDITORIAL CONTENT GRID (4 CORE SECTIONS) */}
      <section
        aria-label={t.editorialGridLabel}
        className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16 border-t border-[#111111]"
      >
        <div className="pt-8 pb-10 flex items-center justify-between">
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500">
            {t.editorialGridLabel}
          </span>
          <span className="font-sans text-[11px] tabular-nums tracking-[0.16em] text-neutral-400">
            01 — 04
          </span>
        </div>

        {/* Row 1: Asymmetric 7 / 5 split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-14 md:gap-x-12 pb-16 md:pb-24 border-b border-neutral-200">
          {[EDITORIAL_PILLARS[0], EDITORIAL_PILLARS[1]].map((pillar, idx) => {
            const copy = getPillarText(pillar);
            const colClass = idx === 0 ? 'md:col-span-7 md:pr-12' : 'md:col-span-5 md:pt-14';
            return (
              <article key={pillar.id} className={colClass}>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-4">
                  {pillar.index} / {copy.category}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] text-[#111111] mb-4">
                  {copy.title}
                </h2>
                <p className="font-sans text-sm md:text-base text-neutral-600 leading-relaxed max-w-md mb-7">
                  {copy.desc}
                </p>
                <button
                  type="button"
                  onClick={() => handleNav({ type: 'section', pillarId: pillar.id })}
                  className="inline-flex items-center font-sans text-xs uppercase tracking-[0.16em] text-[#111111] border-b border-[#111111] pb-1 hover:opacity-55 transition-opacity cursor-pointer"
                >
                  {t.readMoreLink}
                </button>
              </article>
            );
          })}
        </div>

        {/* Row 2: Staggered Asymmetric 5 / 7 split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-14 md:gap-x-12 py-16 md:py-24 border-b border-neutral-200">
          {[EDITORIAL_PILLARS[2], EDITORIAL_PILLARS[3]].map((pillar, idx) => {
            const copy = getPillarText(pillar);
            const colClass = idx === 0 ? 'md:col-span-5' : 'md:col-span-7 md:pl-16 md:pt-12';
            const targetView: AppView =
              pillar.id === 'izohlar'
                ? { type: 'commentary' }
                : { type: 'section', pillarId: pillar.id };

            return (
              <article key={pillar.id} className={colClass}>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-4">
                  {pillar.index} / {copy.category}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] text-[#111111] mb-4">
                  {copy.title}
                </h2>
                <p className="font-sans text-sm md:text-base text-neutral-600 leading-relaxed max-w-md mb-7">
                  {copy.desc}
                </p>
                <button
                  type="button"
                  onClick={() => handleNav(targetView)}
                  className="inline-flex items-center font-sans text-xs uppercase tracking-[0.16em] text-[#111111] border-b border-[#111111] pb-1 hover:opacity-55 transition-opacity cursor-pointer"
                >
                  {t.readMoreLink}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* CORE PRINCIPLES INDEX (ARTICLE 3) */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28 border-b border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              {t.principlesLabel}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-[1.15]">
              {t.principlesHeading}
            </h2>
          </div>

          <div className="lg:col-span-8 divide-y divide-neutral-200 border-t border-neutral-200">
            {PRINCIPLES_PREVIEW.map((item) => {
              const title =
                language === 'ru' ? item.nameRu : language === 'en' ? item.nameEn : item.nameUz;
              const desc =
                language === 'ru' ? item.descRu : language === 'en' ? item.descEn : item.descUz;
              return (
                <button
                  key={item.no}
                  type="button"
                  onClick={() => handleNav({ type: 'article', articleId: item.articleId })}
                  className="w-full py-6 flex flex-col gap-2 sm:grid sm:grid-cols-12 sm:gap-4 sm:items-baseline text-left group cursor-pointer"
                >
                  <div className="flex items-baseline justify-between sm:contents">
                    <span className="sm:col-span-1 font-sans text-xs tabular-nums text-neutral-400">
                      {item.no}
                    </span>
                    <span className="sm:hidden font-sans text-xs uppercase tracking-[0.14em] text-neutral-500">
                      {item.ref} →
                    </span>
                  </div>
                  <span className="sm:col-span-4 font-serif text-xl font-medium group-hover:underline underline-offset-4 decoration-1">
                    {title}
                  </span>
                  <span className="sm:col-span-5 font-sans text-sm text-neutral-600 leading-relaxed">
                    {desc}
                  </span>
                  <span className="hidden sm:block sm:col-span-2 text-right font-sans text-xs uppercase tracking-[0.14em] text-neutral-500 group-hover:text-[#111111]">
                    {item.ref} →
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOCUMENTARY PHOTOGRAPHY ARCHIVE */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28 border-b border-neutral-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              {t.archiveLabel}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium">
              {t.archiveHeading}
            </h2>
          </div>
          <span className="font-sans text-xs tabular-nums tracking-[0.16em] text-neutral-400">
            FIG. 01 — FIG. 04
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {PHOTO_ARCHIVE.slice(0, 4).map((photo, index) => {
            const caption =
              language === 'ru'
                ? photo.captionRu
                : language === 'en'
                  ? photo.captionEn
                  : photo.caption;
            const colSpan =
              index === 0 || index === 3 ? 'md:col-span-7' : 'md:col-span-5';
            return (
              <figure key={photo.id} className={`${colSpan} group`}>
                <button
                  type="button"
                  onClick={() => handleNav({ type: 'article', articleId: photo.articleId })}
                  className="block w-full text-left cursor-pointer"
                >
                  <div className="w-full aspect-[16/10] bg-neutral-100 overflow-hidden border border-neutral-200">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-[35%] contrast-[1.03] group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <figcaption className="mt-4 flex items-baseline gap-4">
                    <span className="font-sans text-[11px] tabular-nums tracking-[0.18em] text-neutral-400 shrink-0">
                      {photo.figureNo}
                    </span>
                    <span className="font-serif text-sm italic text-neutral-600 leading-relaxed group-hover:text-[#111111]">
                      {caption}
                    </span>
                  </figcaption>
                </button>
              </figure>
            );
          })}
        </div>
      </section>

      {/* PRACTICAL RESOURCES & INTERACTIVE LEGAL QUIZ */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16 pt-20 md:pt-28">
        <div className="mb-12 space-y-3">
          <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500">
            {t.toolsLabel}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium">
            {t.toolsHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-neutral-200 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {[
            {
              index: 'VI.I',
              title: t.faqCardTitle,
              desc: t.faqCardDesc,
              view: { type: 'faq' } as AppView,
            },
            {
              index: 'VI.II',
              title: t.glossaryCardTitle,
              desc: t.glossaryCardDesc,
              view: { type: 'glossary' } as AppView,
            },
            {
              index: 'VI.III',
              title: t.quizCardTitle,
              desc: t.quizCardDesc,
              view: { type: 'quiz' } as AppView,
            },
          ].map((item, idx) => (
            <div
              key={item.index}
              className={`py-10 ${idx === 0 ? 'md:pr-10' : idx === 1 ? 'md:px-10' : 'md:pl-10'} flex flex-col justify-between gap-8`}
            >
              <div className="space-y-3">
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-neutral-400 tabular-nums">
                  {item.index}
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#111111]">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => handleNav(item.view)}
                  className="inline-flex items-center font-sans text-xs uppercase tracking-[0.16em] text-[#111111] border-b border-[#111111] pb-1 hover:opacity-55 transition-opacity cursor-pointer"
                >
                  {t.openAction}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
