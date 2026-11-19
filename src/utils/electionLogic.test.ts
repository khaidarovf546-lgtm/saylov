import test from 'node:test';
import assert from 'node:assert/strict';
import { ELECTION_ARTICLES } from '../data/electionCodeData';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { getAdjacentArticles, searchElectionContent } from './electionSearch';
import { evaluateQuizAnswers } from './quizLogic';
import { isBookmarked, toggleBookmarkId } from './bookmarks';

test('searchElectionContent returns empty array for empty or whitespace queries', () => {
  assert.deepEqual(searchElectionContent(''), []);
  assert.deepEqual(searchElectionContent('   '), []);
});

test('searchElectionContent finds 4-modda and FAQ when searching for 18 yosh', () => {
  const results = searchElectionContent('18 yosh', 'uz');
  assert.ok(results.length >= 2);
  const articleMatch = results.find(
    (r) => r.kind === 'article' && r.targetView.type === 'article' && r.targetView.articleId === 'modda-4',
  );
  const faqMatch = results.find((r) => r.kind === 'faq');
  assert.ok(articleMatch, 'Expected 4-modda to match "18 yosh"');
  assert.ok(faqMatch, 'Expected FAQ to match "18 yosh"');
});

test('searchElectionContent finds Markaziy saylov komissiyasi in glossary and articles', () => {
  const results = searchElectionContent('Markaziy saylov komissiyasi', 'uz');
  assert.ok(results.some((r) => r.kind === 'glossary'));
  assert.ok(results.some((r) => r.kind === 'article'));
});

test('getAdjacentArticles navigates sequentially including 8-modda -> 81-modda -> 9-modda', () => {
  const first = getAdjacentArticles('modda-1');
  assert.equal(first.prev, null);
  assert.equal(first.next?.id, 'modda-2');

  const eightyOne = getAdjacentArticles('modda-81');
  assert.equal(eightyOne.prev?.id, 'modda-8');
  assert.equal(eightyOne.next?.id, 'modda-9');

  const last = getAdjacentArticles(ELECTION_ARTICLES[ELECTION_ARTICLES.length - 1].id);
  assert.equal(last.next, null);
});

test('evaluateQuizAnswers computes correct counts and percentages', () => {
  const allCorrect: Record<string, number> = {};
  QUIZ_QUESTIONS.forEach((q) => {
    allCorrect[q.id] = q.correctIndex;
  });
  const fullScore = evaluateQuizAnswers(QUIZ_QUESTIONS, allCorrect);
  assert.equal(fullScore.total, 10);
  assert.equal(fullScore.answeredCount, 10);
  assert.equal(fullScore.correctCount, 10);
  assert.equal(fullScore.percentage, 100);

  const partial = evaluateQuizAnswers(QUIZ_QUESTIONS, {
    'q-1': QUIZ_QUESTIONS[0].correctIndex,
    'q-2': (QUIZ_QUESTIONS[1].correctIndex + 1) % 4,
  });
  assert.equal(partial.answeredCount, 2);
  assert.equal(partial.correctCount, 1);
  assert.equal(partial.percentage, 10);
});

test('toggleBookmarkId adds and removes article IDs cleanly', () => {
  const initial: string[] = [];
  const added = toggleBookmarkId(initial, 'modda-4');
  assert.equal(isBookmarked(added, 'modda-4'), true);
  assert.deepEqual(added, ['modda-4']);

  const addedSecond = toggleBookmarkId(added, 'modda-12');
  assert.deepEqual(addedSecond, ['modda-4', 'modda-12']);

  const removed = toggleBookmarkId(addedSecond, 'modda-4');
  assert.equal(isBookmarked(removed, 'modda-4'), false);
  assert.deepEqual(removed, ['modda-12']);
});
