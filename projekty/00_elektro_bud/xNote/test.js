let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    let arr = [
        {id: 1, value: "1"},
        {id: 2, value: "2"},
        {id: 3, value: "3"},
    ];
    let findestIndex = -1;
    let targetID = 2;
    for(i = 0; i < arr.length; i++) {

        let Currelemnet = arr[i];
        // console.log(Currelemnet);
        // console.log("id" + targetID);
        // console.log(elemnet.id);
        if(Currelemnet.id === targetID) {
            findestIndex = i;
            arr.splice(findestIndex, 1);
            break;
        }
    }
    console.log(arr);
});

function returnIndex(){
    return 4;
}

let findestIndex = returnIndex();
console.log("From return func the finds index: " + findestIndex);

// delete:
// let findestIndex : number = 0;
//
// for(let i = 0; i < products.length; i++) {
//    const currProduct = products[i];
//    if(currProduct.id === id) {
//        findestIndex = i;
//        products.splice(findestIndex, 1);
//        renderTableProduct(products);
//        break;
//    }
// }

//edit:
// let findestIndex : number = 0;
//
// for(let i = 0; i < products.length; i++) {
//     const currProduct = products[i];
//     if(currProduct.id === id) {
//         findestIndex = i;
//         products.splice(findestIndex, 1);
//         renderTableProduct(products);
//         break;
//     }
// }


// const value: string = inputElement.value;
// const entRes = document.getElementById("products-body");
// entRes.textContent = value;
//    //[ [] ] => [] (p)