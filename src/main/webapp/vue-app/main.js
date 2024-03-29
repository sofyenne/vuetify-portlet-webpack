import app from './components/app.vue';

import '../css/main.less';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  dark: true,
  iconfont: '',
});
//testcode verified
// getting language of user
const lang = eXo && eXo.env && eXo.env.portal && eXo.env.portal.language || 'en';

const resourceBundleName = 'locale.addon.VuetifySample';
const url = `${eXo.env.portal.context}/${eXo.env.portal.rest}/i18n/bundle/${resourceBundleName}-${lang}.json`;

// getting locale ressources
exoi18n.loadLanguageAsync(lang, url)
  .then(i18n => {
    // init Vue app when locale ressources are ready
    new Vue({
      render: h => h(app),
      i18n,
      vuetify,
    }).$mount('#vuetify_webpack_sample');
  });
