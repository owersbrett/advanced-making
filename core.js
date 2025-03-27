const cheatsheetDir = 'cheatsheets';
const listEl = document.getElementById('cheatsheet-list');
const searchEl = document.getElementById('search');

const cheatsheets = [
  "App-Store-Connect",
  "App-Store-Provisioning",
  "CI/CD",
  "Fastlane",
  "GitHub-Actions",
  "GitHub-Workflows",
  //NEW-CHEATSHEET
];

function renderList(filter = "") {
  const filtered = cheatsheets
    .filter(item => item.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => a.localeCompare(b));

  listEl.innerHTML = filtered
    .map(name => {
      const href = `${cheatsheetDir}/${name}.html`;
      return `<li><a class="text-blue-600 hover:underline" href="${href}">${name}</a></li>`;
    })
    .join("");
}

searchEl.addEventListener("input", (e) => {
  renderList(e.target.value);
});

renderList();
