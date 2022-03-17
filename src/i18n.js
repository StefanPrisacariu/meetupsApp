import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ro: {
    translation: {
      "header-title": "Blog Personal",

      "nav-brand": "BP",
      "nav-home": "Acasă",
      "nav-page-1": "Pagina 1",
      "nav-page-2": "Pagina 2",
      "nav-page-3": "Pagina 3",
      "nav-page-4": "Pagina 4",

      "form-title": "Adaugă o nouă postare",
      "form-field-title": "Titlu",
      "form-field-location": "Selectează Locația",
      "form-field-location-carousel": "Carusel",
      "form-field-location-main": "Principal",
      "form-field-image": "URL Imagine",
      "form-field-text": "Text",
      "form-button": "Confirmă",

      "form-error-title": "Titlul este obligatoriu",
      "form-error-location": "Selectează o locație",
      "form-error-image": "URL-ul către imagine este obligatoriu",
      "form-error-text": "Textul este obligatoriu",
      "form-alert-error": "Toate câmpurile sunt obligatorii",

      "alert-create": "Postare Creată",
      "alert-delete": "Postare Ștearsă",
      "alert-edit": "Postare Modificată",

      "overlay-delete-title": "Ești sigur că vrei să ștergi această postare?",
      "overlay-delete-yes": "Șterge",
      "overlay-delete-no": "Anulare",

      "overlay-edit": "Modificare Postare",
      "overlay-edit-save": "Salvează Morificările",
      "overlay-edit-cancel": "Anulare",
    },
  },
  en: {
    translation: {
      "header-title": "Personal Blog",

      "nav-brand": "PB",
      "nav-home": "Home",
      "nav-page-1": "Page 1",
      "nav-page-2": "Page 2",
      "nav-page-3": "Page 3",
      "nav-page-4": "Page 4",

      "form-title": "Add a new post",
      "form-field-title": "Title",
      "form-field-location": "Select the Location",
      "form-field-location-carousel": "Carousel",
      "form-field-location-main": "Main",
      "form-field-image": "Image URL",
      "form-field-text": "Text",
      "form-button": "Submit",

      "form-error-title": "Title is required",
      "form-error-location": "Select a location",
      "form-error-image": "Image URL is required",
      "form-error-text": "Text is required",
      "form-alert-error": "All fields are required",

      "alert-create": "Post Created",
      "alert-delete": "Post Deleted",
      "alert-edit": "Post Edited",

      "overlay-delete-title": "Are you sure you want to delete this post?",
      "overlay-delete-yes": "Delete",
      "overlay-delete-no": "Cancel",

      "overlay-edit": "Edit Post",
      "overlay-edit-save": "Save Changes",
      "overlay-edit-cancel": "Cancel",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ro",
  intterpolation: {
    escapeValue: false,
  },
});

export default i18n;
