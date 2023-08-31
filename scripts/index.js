import Label from './Label.js';

function renderLabels(data) {
  data.forEach(({ coords, color, title }) => {
    const label = new Label(coords, color, title);
    labels.push(label);
    page.append(label.generateLabel());
  });
}

function handleClick(evt) {
  const labelElement = evt.target.closest('.label');

  if (labelElement) {
    const labelText = labelElement.querySelector('.label__text');

    labelElement.style.width = !labelElement.classList.contains('label_extended')
    ? labelText.getBoundingClientRect().width + 40 + 15 + 'px'
    : '40px';

    labelElement.classList.toggle('label_extended');
    
  } else {
    labels.forEach((label) => label.minimizeLabel());
  }
}

const labels = [];
const page = document.querySelector('.page');

const labelsData = [
  {coords: [-272, -57], color: 'green', title: 'Стадион'},
  {coords: [188, -135], color: 'green', title: 'Фудкорт' },
  {coords: [147, 250], color: 'green', title: 'Большие ступеньки'},
  {coords: [346, 129], color: 'green', title: 'Западное крыло'},
  {coords: [-513, 174], color: 'blue', title: 'Вход на мост в Турцию'},
  {coords: [-379, -257], color: 'blue', title: 'Коробка'},
  {coords: [121, 89], color: 'blue', title: 'Аквариум'},
  {coords: [413, -314], color: 'blue', title: 'Хижина в лесу'},
  {coords: [454, -64], color: 'blue', title: 'Просто дом'},
  {coords: [633, 173], color: 'blue', title: 'Восточное крыло'},
];

renderLabels(labelsData);

page.addEventListener('click', handleClick);
