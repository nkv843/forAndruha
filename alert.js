'use strict'
function createPossibilityArr(numberOfElements){
  let arr=[];
  for (let i=0; i<numberOfElements; i++){
    arr[i] = Math.random()*10;
  }
  return arr;
}
function createZeroArr(numberOfElements){
  let arr=[];
  for (let i=0; i<numberOfElements; i++){
    arr[i] = 0;
  }
  return arr;
}
function createNamedArr(numberOfElements, nameOfElement){
  let arr=[];
  for (let i=0; i<numberOfElements; i++){
    arr[i] = `${nameOfElement} № ${i+1}`
  }
  return arr;
}
function isTrue (possibility){
//вероятность задается в %
    if (Math.random() <= possibility/100){
      return true;
    }
      return false;
}

let numberOfAdds = +prompt ('введите число вариантов рекламы','');
let addArr = createNamedArr (numberOfAdds, 'add');
let possibilityArr = createPossibilityArr (numberOfAdds);
let successArr = createZeroArr (numberOfAdds);
let topAdd = Math.ceil(addArr.length*0.03);
let topSuccessArr = createZeroArr (topAdd);
let topAddArr = [];
let topPossibilityArr = createZeroArr (topAdd);
let sumClick = 0;

for (let i = 0; i<numberOfAdds; i++){
  for (let k = 0; k<100; k++){
    successArr[i] += (+isTrue(possibilityArr[i]));
  }
}

for (let i = 0; i<topAdd; i++){
  topAddArr[i]= addArr[successArr.indexOf( Math.max.apply(null, successArr))];
  topPossibilityArr[i] = possibilityArr[successArr.indexOf( Math.max.apply(null, successArr))];
  successArr[successArr.indexOf( Math.max.apply(null, successArr))] = 0;
}

for (let i = 0; i<topAdd; i++){
  for (let k = 0; k<100000; k++){
    topSuccessArr[i] += (+isTrue(topPossibilityArr[i]));
  }
}

for (let i = 0; i<topAdd; i++){
  sumClick += topSuccessArr[i];
}

alert (sumClick);
alert (topSuccessArr);
