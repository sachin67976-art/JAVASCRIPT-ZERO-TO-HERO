// // let marks =[20,30,40,50];
// // console.log(marks);
// // console.log(marks.length);
// let heroes=["ironman","spiderman","thor","hulk"];
// for(let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum+=marks[i];  
// }
// cons
let items=[250,645,300,900,50];
let idx=0;
for(let val of items){
    console.log(`value at index ${idx} is ${val}`);
    let offer =val/10;
    items[idx]=items[idx]-offer;
    console.log(`Offer for value =${items[idx]}`);
        idx++;                            
}