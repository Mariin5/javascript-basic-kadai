//とりあえず1~100でランダムに設定
let num = Math.floor(Math.random() * 100)+1;

console.log(num);

//3と5の最小公倍数は15なので15で設定
if(num % 15 === 0){
    console.log('3と5の倍数です')
}

else if (num % 3 === 0){
    console.log('3の倍数です');
}

else if (num % 5 === 0){
    console.log('5の倍数です');
}




else{
    console.log(num);
}