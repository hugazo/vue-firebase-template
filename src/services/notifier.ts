import { Notify } from 'quasar';

/**
 * Notifier Service
 *
 * TODO: Solve the icons issue.
 * Hint: Replace the icons predefined by quasar or convert the svg to string
 * https://quasar.dev/vue-components/icon#import-guide
 */

Notify.setDefaults({
  position: 'top',
  timeout: 2500,
});

const error = (message?: string) => (Notify.create({
  color: 'negative',
  message,
}));

const success = (message?: string) => (Notify.create({
  color: 'positive',
  message,
}));

const alert = (message?: string) => (Notify.create({
  color: 'warning',
  message,
}));

const info = (message?: string) => (Notify.create({
  color: 'info',
  message,
}));

const notifier = {
  error,
  success,
  alert,
  info,
};

export default notifier;

export {
  error,
  success,
  alert,
  info,
};
