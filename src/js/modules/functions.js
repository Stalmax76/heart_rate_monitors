

// перевірка підтримки webp, добавлення класу webp чи no-webp для html
export function isWebp(){
   // перевірка
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function (){
         callback(webP.height == 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      
   }
   //добавляєм  класу webp чи no-webp для html
   testWebP(function(support){
      let className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
   })
}

// function testWebP(callback) {

//    var webP = new Image();
//    webP.onload = webP.onerror = function () {
//    callback(webP.height == 2);
//    };
//    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
//    }
   
//    testWebP(function (support) {
   
//    if (support == true) {
//    document.querySelector('body').classList.add('webp');
//    }else{
//    document.querySelector('body').classList.add('no-webp');
//    }
//    });