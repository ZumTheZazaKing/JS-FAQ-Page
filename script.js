document.addEventListener('DOMContentLoaded', () => {


    const moreButtons = document.querySelectorAll('.more');

    const answers = document.querySelectorAll('.answer');

    moreButtons.forEach(moreButton => moreButton.addEventListener('click', () => {

        answers[moreButton.getAttribute('id')].classList.toggle('hide');

        if(moreButton.innerHTML == '+'){

            moreButton.innerHTML = '-';

        } else {

            moreButton.innerHTML = '+';

        }

    }));


})