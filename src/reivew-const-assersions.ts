export {}

// この状態だとnameは型推論でstring型になる
let name = 'Atsushi';

name = 'Ham';

/* 
  as constすると
  型推論で'Ham'になる
  文字列リテラル型
*/
let nickname = 'Ham' as const;


/* 
  オブジェクトの後ろにas const 
  で全てreadonlyになる便利な方法
*/
let profile = {
  name: 'Atsushi',
  height: 178
} as const;

//profile.name = 'Ham';
//profile.height = 180;