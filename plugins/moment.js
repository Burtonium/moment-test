import moment from 'moment-timezone';

export default ({ app }, inject) => {
  inject('mtz', (...args) => {
    const localMoment = moment(...args);
    localMoment.locale(app.i18n.locale);
    return localMoment;
  });
};
