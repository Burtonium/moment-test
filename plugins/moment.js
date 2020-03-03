export default ({ app }, inject) => {
  const { $moment } = app;
  inject('moment', (...args) => {
    const localMoment = $moment(...args);
    localMoment.locale(app.i18n.locale);
    return localMoment;
  });
};
