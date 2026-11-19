/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { ArticleView } from './components/ArticleView';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { CommentaryView } from './components/CommentaryView';
import { FaqView, GlossaryView } from './components/FaqGlossaryViews';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { MenuDrawer } from './components/MenuDrawer';
import { QuizView } from './components/QuizView';
import { SearchOverlay } from './components/SearchOverlay';
import { SectionView } from './components/SectionView';
import { AppView, Language } from './types/editorial';
import {
  loadBookmarksFromStorage,
  saveBookmarksToStorage,
  toggleBookmarkId,
} from './utils/bookmarks';

export default function App() {
  const [language, setLanguage] = useState<Language>('uz');
  const [view, setView] = useState<AppView>({ type: 'home' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() =>
    loadBookmarksFromStorage(),
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    saveBookmarksToStorage(bookmarkedIds);
  }, [bookmarkedIds]);

  const handleToggleBookmark = (articleId: string) => {
    setBookmarkedIds((prev) => toggleBookmarkId(prev, articleId));
  };

  const renderMainView = () => {
    switch (view.type) {
      case 'home':
        return <HomeView language={language} onNavigate={setView} />;
      case 'section':
        return (
          <SectionView
            pillarId={view.pillarId}
            language={language}
            onNavigate={setView}
          />
        );
      case 'article':
        return (
          <ArticleView
            articleId={view.articleId}
            language={language}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            onNavigate={setView}
          />
        );
      case 'commentary':
        return <CommentaryView language={language} onNavigate={setView} />;
      case 'faq':
        return <FaqView language={language} onNavigate={setView} />;
      case 'glossary':
        return <GlossaryView language={language} onNavigate={setView} />;
      case 'quiz':
        return <QuizView language={language} onNavigate={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col">
      <Header
        language={language}
        onChangeLanguage={setLanguage}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onNavigateHome={() => {
          setView({ type: 'home' });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        bookmarkCount={bookmarkedIds.length}
      />

      <div className="flex-1">{renderMainView()}</div>

      <Footer language={language} onNavigate={setView} />

      <MenuDrawer
        isOpen={isMenuOpen}
        language={language}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={setView}
      />

      <SearchOverlay
        isOpen={isSearchOpen}
        language={language}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={setView}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        language={language}
        bookmarkedIds={bookmarkedIds}
        onClose={() => setIsBookmarksOpen(false)}
        onRemoveBookmark={handleToggleBookmark}
        onNavigate={setView}
      />
    </div>
  );
}
