import moment from 'moment-timezone';

export default ({ app }, inject) => {
  const localMoment = moment();
  localMoment.locale(app.i18n.locale);

  app.i18n.onLanguageSwitched = (_oldLocale, newLocale) => {
    localMoment.locale(newLocale);
  };

  inject('$moment', localMoment);
};
