import './assets/favicons/favicons';

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./', true, /\.(styl)$/));
