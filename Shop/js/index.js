document.addEventListener('DOMContentLoaded',function(){var goodCard=document.querySelector('.goods-cards');var applyModal=$.modal({title:'Успешно',closable:!0,content:"<p class=\"modal-text\">\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F. \u041C\u044B \u0441\u043A\u043E\u0440\u043E \u0441 \u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0438\u043C\u0441\u044F</p>",footerButtons:[{text:'OK',type:'dark',handler:function handler(){applyModal.close()}}]});var formModal=$.modal({title:'Обратный звонок',closable:!0,content:"<form action=\"\"><input type=\"email\" name=\"phone\" class=\"modal-input\" placeholder=\"\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D...\"></form>",footerButtons:[{text:'OK',type:'dark',handler:function handler(){formModal.close();setTimeout(function(){applyModal.open()},1600)}}]});var getBookModal=$.modal({title:'Оформление заказа',closable:!0,content:"    \n        <form>\n            <input type=\"text\" class=\"modal-input\" placeholder=\"\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\">\n            <input type=\"text\" class=\"modal-input\" placeholder=\"\u0412\u0430\u0448 \u0430\u0434\u0440\u0435\u0441\">\n            <div>\n                <div class=\"modal-select\"><input type=\"checkbox\" value=\"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C\" class=\"modal-select__input\"><span class=\"modal-select__text\">\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C</span></div>\n                <div class=\"modal-select\"><input type=\"checkbox\" value=\"\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437\" class=\"modal-select__input\"><span class=\"modal-select__text\">\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437</span></div>\n            </div>\n        </form>",footerButtons:[{text:'OK',type:'dark',handler:function handler(){getBookModal.close();setTimeout(function(){applyModal.open()},1600)}}]});document.addEventListener('click',function(){var btnType=event.target.dataset.btn;if(btnType==='form'){formModal.open()}
if(btnType==='card'){getBookModal.open()}});var createCardGoods=function createCardGoods(title,img){var card=document.createElement('div');card.className='good-card';card.innerHTML="<img src=\"img/books/".concat(img,"\" alt=\"").concat(title,"\" class=\"good-card__img\">\n        <span class=\"good-card__title\">\u201C").concat(title,"\u201D</span>\n        <div class=\"good-card__footer\">\n            <span class=\"good-card-price\">1 500 \u0440.</span>\n            <button class=\"good-card__btn\" data-btn=\"card\">\u041A\u0443\u043F\u0438\u0442\u044C</button>\n        </div>");return card};goodCard.appendChild(createCardGoods('Мизери','1.png'));goodCard.appendChild(createCardGoods('Кэрри','2.jpeg'));goodCard.appendChild(createCardGoods('Сияние','3.jpg'));goodCard.appendChild(createCardGoods('Мёртвая зона','4.jpg'));goodCard.appendChild(createCardGoods('Противостояние','5.jpeg'));goodCard.appendChild(createCardGoods('Зелёная миля','6.jpeg'));goodCard.appendChild(createCardGoods('Мобильник','7.jpeg'));goodCard.appendChild(createCardGoods('Под куполом','8.jpeg'));goodCard.appendChild(createCardGoods('11/22/63','9.jpeg'))})