module.exports = function reverse (n) {
  let answer="";
  let digArray=((n>0?n:-n)+"").split("");
  for (let i=0; i<digArray.length; i++ )
  {
      answer=digArray[i]+answer;
  }
  return +answer;
}
