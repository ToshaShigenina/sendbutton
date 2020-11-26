/*

При фокусировке в поле ввода палочка на кнопке превращается в стрелку.
При снятии фокуса, если в поле ввода нет текста,
и при клике на кнопку стрелка обратно становится палочкой.

Классы CSS для поля ввода никак не влияют на анимацию кнопки.

*/


let text = document.querySelector('.textarea'),
  btn = document.querySelector('.btn_send');

/*
Аргументы, которые передаются в функцию:
- textarea - поле ввода, DOM Element
- button - кнопка, DOM Element
- animationClass - класс анимации, String
*/

const animationBtnSend = (textarea, button, animationClass) => {
  /* Слушатель для поля ввода на событие фокус,
     добавляет класс анимации при фокусировке на поле ввода */
  textarea.addEventListener('focus', (event) => {
    button.classList.add(animationClass);
  });
  /* Слушатель для поля ввода на событие блюр,
     удаляет класс анимации при снятии фокуса с поля ввода,
     если поле ввода пустое */
  textarea.addEventListener('blur', (event) => {
    if (textarea.value.length === 0) button.classList.remove(animationClass);
  });
  /* Слушатель для кнопки на событие клик,
     удаляет класс анимации при клике на кнопку. */
  button.addEventListener('click', () => {
    button.classList.remove(animationClass);
    /* Очистка поля ввода используется для большей наглядности
       На анимацию никак не влияет, можно удалить */
    textarea.value = '';
  });
};

animationBtnSend(text, btn, 'btn_arrow');