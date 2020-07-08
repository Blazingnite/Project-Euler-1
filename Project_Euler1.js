const mult = a =>{
  let acc = 0;
  let b = Math.round(1000/a);
  let holderArr= [];
  for(let i = 0; i < b; i++){
    holderArr.push(a*i);
  }
  for(let accI = 0; accI < holderArr.length; accI++){
    acc += holderArr[accI];
  }
  return acc;
};





console.log(mult(3));
