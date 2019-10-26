'use strict';

{
  const btn = document.getElementById('btn');
  if(btn){
    console.log('発見', btn);
  } else {
    console.log('見つからない');
  }

  btn.addEventListener('click', () => {
    // const n = Math.floor(Math.random() * 3);
    // btn.textContent = n;

    // switch (n) {
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '凶';
    //     break;
    // }


    const results = ['大吉', '中吉', '凶'];
    const rand = Math.floor(Math.random() * results.length);
    btn.textContent = results[rand];
  });
}