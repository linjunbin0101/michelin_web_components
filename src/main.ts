import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createHcComponent, createThemeConfig, createIconConfig } from "./vuetify";
import "./vuetify/styles/index.scss";
import "vuetify/styles";
// add i18n
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { createI18n, useI18n } from "vue-i18n";
import { en as vuetifyEn, zhHans as vuetifyZhHans } from "vuetify/locale";
import { mergeTranslations } from "./pages/locales/mergeTranslations";
import zhHansJson from "./pages/locales/zhHans.json";
import enJson from "./pages/locales/en.json";

const messages = {
  en: mergeTranslations(enJson, vuetifyEn),
  zhHans: mergeTranslations(zhHansJson, vuetifyZhHans),
};
const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  theme: createThemeConfig(),
  icons: createIconConfig({
    // size: 20
  }),
  // add defaults
  defaults: {
    HcAutocomplete: {
      menuIcon: "expand_more",
      clearIcon: "close",
    },
    VAutocomplete: {
      menuIcon: "expand_more",
      clearIcon: "close",
    },
    VChip: {
      closeIcon: "cancel",
    },
    VTextarea: {
      variant: "outlined",
      noResize: true,
    },
    VTextField: {
      variant: "outlined",
      density: "compact",
    },
  },
  // add language support
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
});
const hcComponent = createHcComponent();

app.use(i18n);
app.use(vuetify);
app.use(hcComponent);

app.mount("#app");
