const fs = require('fs');
const path = './package.json';

// Чтение package.json
const packageJson = JSON.parse(fs.readFileSync(path, 'utf8'));

// Функция для изменения homepage
function updateHomepage(value) {
  packageJson.homepage = value;
  fs.writeFileSync(path, JSON.stringify(packageJson, null, 2));
}

// Функция для удаления homepage
function resetHomepage() {
  delete packageJson.homepage;
  fs.writeFileSync(path, JSON.stringify(packageJson, null, 2));
}

// Обработка аргументов командной строки
if (process.argv[2] === 'prebuild') {
  updateHomepage('/wp-content/themes/indeling-react-theme/templates');
} else if (process.argv[2] === 'postbuild') {
  resetHomepage();
}
