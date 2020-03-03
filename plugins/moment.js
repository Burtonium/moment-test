import moment from 'moment-timezone';

export default ({ app }, inject) => {
  inject('mtz', (date) => {
    const localMoment = moment(date);
    localMoment.locale(app.i18n.locale);
    return localMoment;
  });
};
