document.addEventListener('DOMContentLoaded', () => {
    const productWrapper = document.querySelector('.product-wrapper');
    const popularGoods = document.querySelector('.popular-goods');
    // const headBtn = document.getElementById('headerBtn');
    // const modal = document.querySelector('.modal');
    const createCardProd = (img, title, text) => {
        const card = document.createElement('div');
        card.className = 'card-wrapper';
        card.innerHTML =`
        <div class="card">
            <div class="card-img-wrapper"><img src="${img}" alt="${title}" class="card-img"></div>
            <h3 class="card-title">${title}</h3>
            <p class="card-text">${text}</p>
            <span class="card-price">от 330 р./т</span>
            <button class="btn card-btn">Подробнее</button>
        </div>`;
        return card;
    };
    const renderGoods = (img, title, price) => {
        const card = document.createElement('div');
        card.className = 'goods-card-wrapper';
        card.innerHTML = `
            <div class="good-card">
                <div class="good-card-img">
                    <img src="${img}" alt="${title}">
                </div>
                <span class="good-card-title">${title}</span>
                <span class="good-card-price">${price}</span>
                <button class="btn good-card-btn">Купить</button>
            </div>`;
    return card;
    };
    // const openModal = () => {
    //     modal.style.display = '0'
    // };

    productWrapper.appendChild(createCardProd('img/products/1.png', 'Песок речной', 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит.'));
    productWrapper.appendChild(createCardProd('img/products/2.png', 'Щебень', 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит. '));
    productWrapper.appendChild(createCardProd('img/products/3.png','Грунт', 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит. '));
    popularGoods.appendChild(renderGoods('img/goods/1.png', 'Гранитный щебень 5-20 мм', '1 350 р./т'));
    popularGoods.appendChild(renderGoods('img/goods/2.png', 'Гранитный щебень 5-20 мм', '1 350 р./т'));
    popularGoods.appendChild(renderGoods('img/goods/3.png', 'Гранитный щебень 0-5 мм (отсев)', '1 350 р./т'));
    popularGoods.appendChild(renderGoods('img/goods/4.png', 'Гранитный щебень 5-20 мм', '1 350 р./т'));
    // headBtn.addEventListener('click', openModal);
})