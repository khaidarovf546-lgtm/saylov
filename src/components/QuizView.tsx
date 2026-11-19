import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { UI_TRANSLATIONS } from '../data/translations';
import { AppView, Language } from '../types/editorial';
import { evaluateQuizAnswers } from '../utils/quizLogic';

interface QuizViewProps {
  language: Language;
  onNavigate: (view: AppView) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ language, onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showSummary, setShowSummary] = useState(false);

  const t = UI_TRANSLATIONS[language];
  const question = QUIZ_QUESTIONS[currentIndex];
  const chosenOption = answers[question.id];
  const isAnswered = typeof chosenOption === 'number';
  const evaluation = evaluateQuizAnswers(QUIZ_QUESTIONS, answers);

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered) return;
    setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }));
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentIndex(0);
    setShowSummary(false);
  };

  const handleNav = (view: AppView) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const qPrompt =
    language === 'ru'
      ? question.questionRu
      : language === 'en'
        ? question.questionEn
        : question.question;
  const qOptions =
    language === 'ru'
      ? question.optionsRu
      : language === 'en'
        ? question.optionsEn
        : question.options;
  const qExplanation =
    language === 'ru'
      ? question.explanationRu
      : language === 'en'
        ? question.explanationEn
        : question.explanation;

  const letters = ['A', 'B', 'C', 'D'];

  return (
    <main className="bg-white text-[#111111]">
      <div className="max-w-[820px] mx-auto px-6 md:px-12 py-14 md:py-24">
        <div className="mb-12 flex items-center justify-between">
          <button
            type="button"
            onClick={() => handleNav({ type: 'home' })}
            className="font-sans text-xs uppercase tracking-[0.16em] text-neutral-500 hover:text-[#111111] cursor-pointer"
          >
            ← {t.backHome}
          </button>

          {!showSummary && (
            <span className="font-sans text-xs tabular-nums tracking-[0.18em] text-neutral-500">
              {String(currentIndex + 1).padStart(2, '0')} /{' '}
              {String(QUIZ_QUESTIONS.length).padStart(2, '0')}
            </span>
          )}
        </div>

        {showSummary ? (
          <section className="py-8 border-t border-[#111111] space-y-10">
            <div className="space-y-4">
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                SAYLOV KODEKSI · {t.navLabels.quiz.toUpperCase()}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold">
                {t.quizResultTitle}
              </h1>
            </div>

            <div className="py-8 border-y border-neutral-200 flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.16em] text-neutral-500 mb-2">
                  {t.quizScoreLabel}
                </p>
                <p className="font-serif text-5xl md:text-6xl font-semibold tabular-nums">
                  {evaluation.correctCount} / {evaluation.total}
                </p>
              </div>
              <p className="font-serif text-3xl text-neutral-500 tabular-nums">
                {evaluation.percentage}%
              </p>
            </div>

            <div className="divide-y divide-neutral-200">
              {QUIZ_QUESTIONS.map((item) => {
                const userChoice = answers[item.id];
                const ok = userChoice === item.correctIndex;
                const promptText =
                  language === 'ru'
                    ? item.questionRu
                    : language === 'en'
                      ? item.questionEn
                      : item.question;
                return (
                  <div key={item.id} className="py-5 flex items-baseline justify-between gap-6">
                    <div className="space-y-1">
                      <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                        {item.articleRef} · {ok ? t.quizStatusCorrect : t.quizStatusWrong}
                      </span>
                      <p className="font-serif text-lg">{promptText}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleNav({ type: 'article', articleId: item.articleId })}
                      className="font-sans text-xs uppercase tracking-[0.14em] border-b border-[#111111] pb-0.5 shrink-0 cursor-pointer"
                    >
                      {item.articleRef} →
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleRestart}
                className="px-6 py-3.5 bg-[#111111] text-white font-sans text-xs uppercase tracking-[0.18em] hover:opacity-85 transition-opacity cursor-pointer"
              >
                {t.quizRestart}
              </button>
            </div>
          </section>
        ) : (
          <section className="border-t border-[#111111] pt-10">
            <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-neutral-500 mb-5">
              {t.quizQuestionPrefix} {question.number} · {question.articleRef}
            </p>

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.2] mb-10">
              {qPrompt}
            </h1>

            <div className="space-y-3">
              {qOptions.map((opt, idx) => {
                const isSelected = chosenOption === idx;
                const isCorrect = idx === question.correctIndex;

                let stateClasses =
                  'border-neutral-300 bg-white text-[#111111] hover:border-[#111111]';
                if (isAnswered) {
                  if (isCorrect) {
                    stateClasses = 'border-[#111111] bg-[#111111] text-white';
                  } else if (isSelected && !isCorrect) {
                    stateClasses = 'border-[#111111] bg-neutral-100 text-neutral-500 line-through';
                  } else {
                    stateClasses = 'border-neutral-200 bg-white text-neutral-400';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-5 border text-left flex items-baseline gap-5 transition-colors cursor-pointer disabled:cursor-default ${stateClasses}`}
                  >
                    <span className="font-sans text-xs uppercase tracking-[0.14em] tabular-nums shrink-0 opacity-70">
                      {letters[idx]}
                    </span>
                    <span className="font-serif text-lg leading-snug">{opt}</span>
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="mt-10 pt-8 border-t border-neutral-200 space-y-6">
                <div className="space-y-2">
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                    {chosenOption === question.correctIndex
                      ? `${t.quizCorrectLabel} · ${question.articleRef.toUpperCase()}`
                      : `${t.quizExplanationLabel} · ${question.articleRef.toUpperCase()}`}
                  </p>
                  <p className="font-serif text-lg leading-relaxed text-[#111111]">
                    {qExplanation}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => handleNav({ type: 'article', articleId: question.articleId })}
                    className="font-sans text-xs uppercase tracking-[0.16em] text-neutral-600 hover:text-[#111111] border-b border-neutral-400 pb-0.5 cursor-pointer"
                  >
                    {t.quizViewArticle}
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-3.5 bg-[#111111] text-white font-sans text-xs uppercase tracking-[0.18em] hover:opacity-85 transition-opacity cursor-pointer"
                  >
                    {currentIndex < QUIZ_QUESTIONS.length - 1 ? t.quizNext : t.quizFinish}
                  </button>
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
};
