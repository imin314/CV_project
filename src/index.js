import './assets/favicons/favicons.js';

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./', true, /\.(styl)$/));
