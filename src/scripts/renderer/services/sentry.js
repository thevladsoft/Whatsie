import Raven from 'raven-js';

export default function getClient() {
  Raven.config(global.manifest.sentry.dsn, {
    release: global.manifest.version,
    name: global.manifest.productName,
    collectWindowErrors: false,
    allowSecretKey: true
  }).install();
  return Raven;
}
