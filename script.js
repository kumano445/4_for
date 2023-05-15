// 1
for (var i = 100; i <= 500; i++) {
  console.log(i + "回目");
};

// 2
var obj = {
  name: '太郎',
  age: 45,
  country: 'Japan'
}
for(index in obj){
  console.log(obj[index]);
}

// 3
var array = ['バナナ', 'リンゴ', 'メロン', 'ミカン'];
for(var item of array) {
  console.log( item ); 
}