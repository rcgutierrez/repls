
/*********_filterArr()*********/

let weather = [{
    level: 2,
    rain: null,
    snow: null,
    degrees: 41
  },
{
  level: 2,
  rain: null,
  snow: null,
  degrees: 37
},
{
  level: 1,
  rain: null,
  snow: null,
  degrees: 32
},
{
  level: 2,
  rain: null,
  snow: null,
  degrees: 36
},
{
  level: 2,
  rain: null,
  snow: null,
  degrees: 43
}
  ];

function _filterArr(arr){
  for(let i=1; i<arr.length;i++){
    let first = arr[i-1];
    let second = arr[i];

    const inTempRange = (first.level===second.level ||
                          ((first.degrees/(first.degrees+second.degrees))<=.53 &&
                          (first.degrees/(first.degrees+second.degrees))>=.47));
    const samePrecipitationCondition = ((first.rain===null && second.rain===null || first.rain!==null && second.rain!==null) &&
                                        (first.snow===null && second.snow===null || first.snow!==null && second.snow!==null))

    if(inTempRange && samePrecipitationCondition){
          arr.splice(i,1);
          i--;
    }
  }
  return arr
}

let result = _filterArr(weather);
console.log(result);



/*********generateRoomCode()*********/

function generateRoomCode(){
  return Math.random().toString(36).slice(2,7);
}
generateRoomCode();


/*********starMap()*********/

function starMap(n){
  for(let i=0; i<n; i++){
    let stars = "*";
    for(let p=0; p<i; p++){
      stars+="*";
    }
    console.log(stars);
  }
}

starMap(4);


/*********fizzBuzzTo()*********/


function fizzBuzzTo(n){
  for(var i=1; i<=n; i++){
    if(i%3 == 0 && i%5 == 0){
      console.log("fizzbuzz");
    }else if(i%3 == 0){
      console.log("fizz");
    }else if(i%5 == 0){
      console.log("buzz");
    }else{
    console.log(i);
    }
  }
}

fizzBuzzTo(100);


/*********duplicate()*********/


function duplicate(array){
  let arrLength = array.length
  for(var i=0;i<arrLength;i++){
   array.push(array[i]);
  }
  return array;
}

var arr = [1,2,3,4,5];
duplicate(arr);

/*********reverse()*********/


function reverse(array){
  var newArr = [];
  for(var i=array.length-1;i>-1;i--){
   newArr.push(array[i]);
  }
  return newArr;
}
var arr = [1,2,3,4,5];
reverse(arr);


/*********Fibonaccis*********/


function fibonacciZero(len) {
  fibArr = [0, 1];
  for (var i = 1; i < len; i++) {
    var next = fibArr[i] + fibArr[i - 1];
    fibArr.push(next);
  }
  console.log(fibArr);
  return fibArr[fibArr.length - 1];
}

function fibonacciOne(len) {
  fibArr = [1, 1];
  for (var i = 1; i < len; i++) {
    var next = fibArr[i] + fibArr[i - 1];
    fibArr.push(next);
  }
  console.log(fibArr);
  return fibArr[fibArr.length - 1];
}
