(function () {
    let contentShield = document.querySelector('#content-shield');
    let textShield = document.querySelector('#text-shield');
    let buttonShield = document.querySelector('#btn-shield-shwText');
    let upDownShield = true;

    let contentCircle = document.querySelector('#content-circle');
    let textCircle = document.querySelector('#text-circle');
    let buttonCircle = document.querySelector('#btn-circle-shwText');
    let upDownCircle = true;

    let contentLeaf = document.querySelector('#content-leaf');
    let textLeaf = document.querySelector('#text-leaf');
    let buttonLeaf = document.querySelector('#btn-leaf-shwText');
    let upDownLeaf = true;

    let contentChkBx = document.querySelector('#content-checkbox');
    let textChkBx = document.querySelector('#text-checkbox');
    let buttonChkBx = document.querySelector('#btn-checkbox-shwText');
    let upDownChkBx = true;

    let contentHeart = document.querySelector('#content-heart');
    let textHeart = document.querySelector('#text-heart');
    let buttonHeart = document.querySelector('#btn-heart-shwText');
    let upDownHeart = true;

    buttonShield.addEventListener('click', () => {
        contentShield.classList.toggle('show-content-suggestions');
        textShield.classList.toggle('disapear-text');
        if (upDownShield == true) {
            buttonShield.innerHTML = "<div class='icon-aligment'><ion-icon name='caret-up'></ion-icon></div>";
            upDownShield = false;
        } else {
            buttonShield.innerHTML = "<div class='icon-aligment'><ion-icon name='caret-down'></ion-icon></div>";
            upDownShield = true;
        }
    });

    buttonCircle.addEventListener('click', () => {
        contentCircle.classList.toggle('show-content-suggestions');
        textCircle.classList.toggle('disapear-text');
        if (upDownCircle == true) {
            buttonCircle.innerHTML = "<div class='icon-aligment'><ion-icon name='caret-up'></ion-icon></div>";
            upDownCircle = false;
        } else {
            buttonCircle.innerHTML = "<div class='icon-aligment'><ion-icon name='caret-down'></ion-icon></div>";
            upDownCircle = true;
        }
    });

    buttonLeaf.addEventListener('click', () => {
        contentLeaf.classList.toggle('show-content-suggestions');
        textLeaf.classList.toggle('disapear-text');
        if (upDownLeaf == true) {
            buttonLeaf.innerHTML = "<div class='icon-aligment'><ion-icon name='caret-up'></ion-icon></div>";
            upDownLeaf = false;
        } else {
            buttonLeaf.innerHTML = "<div class='icon-aligment'><ion-icon name='caret-down'></ion-icon></div>";
            upDownLeaf = true;
        }
    });

    buttonChkBx.addEventListener('click', () => {
        contentChkBx.classList.toggle('show-content-suggestions');
        textChkBx.classList.toggle('disapear-text');
        if (upDownChkBx == true) {
            buttonChkBx.innerHTML = "<div class='icon-aligment'><ion-icon name='caret-up'></ion-icon></div>";
            upDownChkBx = false;
        } else {
            buttonChkBx.innerHTML = "<div class='icon-aligment'><ion-icon name='caret-down'></ion-icon></div>";
            upDownChkBx = true;
        }
    });

    buttonHeart.addEventListener('click', () => {
        contentHeart.classList.toggle('show-content-suggestions');
        textHeart.classList.toggle('disapear-text');
        if (upDownHeart == true) {
            buttonHeart.innerHTML = "<div class='icon-aligment'><ion-icon name='caret-up'></ion-icon></div>";
            upDownHeart = false;
        } else {
            buttonHeart.innerHTML = "<div class='icon-aligment'><ion-icon name='caret-down'></ion-icon></div>";
            upDownHeart = true;
        }
    });


})();