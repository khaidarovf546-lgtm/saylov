export function toggleBookmarkId(currentIds: string[], articleId: string): string[] {
  if (!articleId) {
    return currentIds;
  }
  if (currentIds.includes(articleId)) {
    return currentIds.filter((id) => id !== articleId);
  }
  return [...currentIds, articleId];
}

export function isBookmarked(currentIds: string[], articleId: string): boolean {
  return currentIds.includes(articleId);
}

const STORAGE_KEY = 'saylov_huquqi_bookmarks_v1';

export function loadBookmarksFromStorage(): string[] {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return [];
    }
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.filter((item): item is string => typeof item === 'string');
    }
    return [];
  } catch {
    return [];
  }
}

export function saveBookmarksToStorage(ids: string[]): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    }
  } catch {
    // Ignore storage quota or private-mode errors cleanly
  }
}
