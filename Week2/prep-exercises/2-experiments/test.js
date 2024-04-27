let x = [];
for (i=0;i<20; i++){
    let y = Math.floor(Math.random()*6+1);
    x.push(y);
}
    console.log("🚀 ~ x:", x)


// const valueCounts = [0, 0, 0, 0, 0, 0];
//  const sampleSize = 100000;

//     for(let i = 0 ; i < sampleSize; i++){
//     const x =Math.floor(Math.random()*(6-1+1)+1); //x is the random number
//     valueCounts[x-1]++;
//   }
//   const results = [];
//   for(let i of valueCounts){
//     let percentage = ((i/sampleSize)*100).toFixed(2);
//     results.push(percentage);
//   }
//     console.log("🚀 ~ results:", results)
    
