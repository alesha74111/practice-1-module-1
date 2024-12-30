document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('checkbox');
  const monthly = document.getElementById('monthly');
  const yearly = document.getElementById('yearly');
  // const basic = document.getElementById('basic');
  // const premium = document.getElementById('premium');
  // const tariffA = document.getElementById('tariffA');
  // const tariffB = document.getElementById('tariffB');
  // const tariffC = document.getElementById('tariffC');
  // const tariffD = document.getElementById('tariffD');

  // Функция для обновления стилей при клике на чекбокс
    checkbox.addEventListener('click', function () {
      checkbox.classList.toggle('selected');
    if (checkbox.checked) {
      monthly.classList.add('selected');
      yearly.classList.remove('selected');
    } else {
      monthly.classList.remove('selected');
      yearly.classList.add('selected');
      
    }
    updateTextVisibility()
  });
  yearly.addEventListener('click', function () {
    yearly.classList.add('selected');
    monthly.classList.remove('selected');
    checkbox.classList.remove('selected');
    checkbox.checked = false;
    updateTextVisibility()
  });
  // Функция для обновления стилей при клике на кнопку A
  monthly.addEventListener('click', function () {
    monthly.classList.add('selected');
    yearly.classList.remove('selected');
    checkbox.classList.add('selected');
    checkbox.checked = true;
    updateTextVisibility()
  });
});
const basic = document.getElementById('basic');
  const premium = document.getElementById('premium');
  const tariffA = document.getElementById('tariffA');
  const tariffB = document.getElementById('tariffB');
  const tariffC = document.getElementById('tariffC');
  const tariffD = document.getElementById('tariffD');
  basic.addEventListener('click', function () {
    basic.classList.add('selected');
    premium.classList.remove('selected');
    updateTextVisibility()
  });
  
  premium.addEventListener('click', function () {
    premium.classList.add('selected');
    basic.classList.remove('selected');
    updateTextVisibility()
  });
function updateTextVisibility() {
  if (monthly.classList.contains('selected') && basic.classList.contains('selected')) {
    tariffA.classList.remove('hidden');
    tariffB.classList.add('hidden');
    tariffC.classList.add('hidden');
    tariffD.classList.add('hidden');
  }
  else if (yearly.classList.contains('selected') && basic.classList.contains('selected')) {
    tariffB.classList.remove('hidden');
    tariffA.classList.add('hidden');
    tariffC.classList.add('hidden');
    tariffD.classList.add('hidden');
  }
  else if (monthly.classList.contains('selected') && premium.classList.contains('selected')) {
    tariffC.classList.remove('hidden');
    tariffA.classList.add('hidden');
    tariffB.classList.add('hidden');
    tariffD.classList.add('hidden');
  }
  else if (yearly.classList.contains('selected') && premium.classList.contains('selected')) {
    tariffD.classList.remove('hidden');
    tariffA.classList.add('hidden');
    tariffB.classList.add('hidden');
    tariffC.classList.add('hidden');
  }
}