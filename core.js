const cheatsheetDir = 'cheatsheets';
const listEl = document.getElementById('cheatsheet-list');
const searchEl = document.getElementById('search');

const cheatsheets = [
  "App-Store-Connect",
  "App-Store-Provisioning",
  "CI-CD",
  "Fastlane",
  "GitHub-Actions",
  "GitHub-Workflows",
  "iOS-Deployment",
  "iOS-Development",
  "iOS-Frameworks",
  "iOS-Localization",
  "iOS-Testing",
  "iOS-UI-Testing",
  "iOS-UI-Testing-Frameworks",
  "iOS-UI-Testing-Tools",
  "iOS-UI-Testing-Frameworks",
  "Android-Development",
  "Android-Deployment",
  "Android-Testing",
  "Android-UI-Testing",
  "Android-UI-Testing-Frameworks",
  "Android-UI-Testing-Tools",
  "Android-UI-Testing-Frameworks",
  "Angular",
  "Angular-Testing",
  "Angular-UI-Testing",
  "Angular-UI-Testing-Frameworks",
  "Angular-UI-Testing-Tools",
  "Flutter",
  "Flutter-Flame",
  "Flutter-Testing",
  "Flutter-UI-Testing",
  "Flutter-UI-Testing-Frameworks",
  "Flutter-UI-Testing-Tools",
  "Python",
  "Scripting",
  "Algorithmic Trading",
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
