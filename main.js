const box = document.querySelector('.box');
const inputs = [
  document.querySelector('.input__box--top-left'),
  document.querySelector('.input__box--top-right'),
  document.querySelector('.input__box--bottom-left'),
  document.querySelector('.input__box--bottom-right')
];
const properties = [
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius'
];

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('change', (e) => {
    const rad = e.target.value > 0 ? e.target.value + 'px' : 0;
    box.style[properties[i]] = rad;
  });
}
