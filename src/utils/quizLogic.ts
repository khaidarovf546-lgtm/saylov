import { QuizQuestion } from '../types/editorial';

export interface QuizEvaluation {
  total: number;
  answeredCount: number;
  correctCount: number;
  percentage: number;
}

export function evaluateQuizAnswers(
  questions: QuizQuestion[],
  answers: Record<string, number>,
): QuizEvaluation {
  const total = questions.length;
  let answeredCount = 0;
  let correctCount = 0;

  for (const question of questions) {
    const chosen = answers[question.id];
    if (typeof chosen === 'number') {
      answeredCount += 1;
      if (chosen === question.correctIndex) {
        correctCount += 1;
      }
    }
  }

  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  return {
    total,
    answeredCount,
    correctCount,
    percentage,
  };
}
