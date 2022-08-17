import i18next from 'i18next';

const LANG_STORAGE = 'lang';

class LangServices {
  changeLanguage(lang) {
    localStorage.setItem(LANG_STORAGE, lang);
    i18next.changeLanguage(lang);
  }

  getLang() {
    return localStorage.getItem(LANG_STORAGE) || 'en';
  }
}

export default new LangServices();
