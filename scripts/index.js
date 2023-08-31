function createLabelElement(data) {
  const labelElement = labelTemplate.cloneNode(true);

  labelElement.classList.add(`label_color_${data.color}`);

  labelElement.style.left = `calc((100vw) / 2 + ${data.coords[0]}px)`;
  labelElement.style.top = `calc((100vh) / 2 + ${data.coords[1]}px)`;

  labelElement.querySelector('.label__text').textContent = data.title;

  return labelElement;
}

function renderLabels(data) {
  data.forEach(labelData => {
    const labelElement = createLabelElement(labelData);

    page.append(labelElement);
  });
}

const labelTemplate = document.querySelector('#label-template').content.querySelector('.label');
const page = document.querySelector('.page');

const labels = [
  {coords: [-272, -57], color: 'green', title: 'Стадион'},
  { coords: [188, -135], color: 'green', title: 'Фудкорт' },
  {coords: [147, 250], color: 'green', title: 'Большие ступеньки'},
  {coords: [346, 129], color: 'green', title: 'Западное крыло'},
  {coords: [-513, 174], color: 'blue', title: 'Вход на мост в Турцию'},
  {coords: [-379, -257], color: 'blue', title: 'Коробка'},
  {coords: [121, 89], color: 'blue', title: 'Аквариум'},
  {coords: [413, -314], color: 'blue', title: 'Хижина в лесу'},
  {coords: [454, -64], color: 'blue', title: 'Просто дом'},
  {coords: [633, 173], color: 'blue', title: 'Восточное крыло'},
];

renderLabels(labels);

page.addEventListener('click', (evt) => {
  const labelElement = evt.target.closest('.label');

  if (labelElement) {
    const labelText = labelElement.querySelector('.label__text');

    labelElement.style.width = !labelElement.classList.contains('label_extended')
    ? labelText.getBoundingClientRect().width + 40 + 15 + 'px'
    : '40px';


    labelElement.classList.toggle('label_extended');
  } else {
    const extendedLabels = document.querySelectorAll('.label_extended');

    extendedLabels.forEach((labelElement) => {
      labelElement.classList.remove('label_extended');
      labelElement.style.width = '40px';
    });
  }
});
