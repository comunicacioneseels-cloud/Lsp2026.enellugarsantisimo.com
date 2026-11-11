/**
 * Helper to programmatically toggle Google Translate between Spanish and English
 */

export function setGoogleLanguage(targetLang: 'es' | 'en') {
  try {
    const cookieValue = targetLang === 'en' ? '/es/en' : '/es/es';
    
    // Set cookie on current domain and path
    document.cookie = `googtrans=${cookieValue}; path=/;`;
    if (window.location.hostname) {
      document.cookie = `googtrans=${cookieValue}; domain=${window.location.hostname}; path=/;`;
    }

    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (select) {
      select.value = targetLang;
      select.dispatchEvent(new Event('change'));
    } else {
      // If element hasn't mounted yet, reload so Google Translate initializes with the cookie
      window.location.reload();
    }
  } catch (err) {
    console.error('Translation error:', err);
  }
}
