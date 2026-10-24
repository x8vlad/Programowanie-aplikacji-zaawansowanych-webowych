/*
Elektro-Bud punkt 2: Produkty):
    - wyświetlanie listy produktów,
    - dodawanie produktu,
    - edycja produktu,
    - usuwanie produktu,
    - wyszukiwanie produktu po EAN albo nazwie,
    - przechowywanie danych w localStorage.
 */

interface Product {
    id: number;
    ean: string;
    nameProduct: string;
    category: string;
    count: number;
    sector: string;
    rack: number;
    level: number;
}

const inputEAN = document.getElementById("ean") as HTMLInputElement;
const inputNameProduct = document.getElementById("nameProduct") as HTMLInputElement;
const inputCategory = document.getElementById("category") as HTMLInputElement;
const inputCount = document.getElementById("count") as HTMLInputElement;
const inputSector = document.getElementById("sector") as HTMLInputElement;
const inputRack = document.getElementById("rack") as HTMLInputElement;
const inputLevel = document.getElementById("level") as HTMLInputElement;

//array to store productsL
const products: Product[] = [];

//id to incremtn after clicking the btn
let idIncrement : number = 1;

//id product for edit and button to chnhe textContent
let editingID : number | null = null;
let buttonAdd = document.getElementById("addProduct") as HTMLButtonElement;
let blockInfo = document.getElementById("addiotonalText") as HTMLInputElement;

const formAddingProduct = document.getElementById("product-form") as HTMLFormElement;

formAddingProduct.addEventListener("submit", event => {
    event.preventDefault();

    const product: Product = {
        id: idIncrement,
        ean: inputEAN.value,
        nameProduct: inputNameProduct.value,
        category: inputCategory.value,
        count: Number(inputCount.value),
        sector: inputSector.value,
        rack: Number(inputRack.value),
        level: Number(inputLevel.value),
    };

    if(editingID === null) {
        idIncrement++;
        products.push(product);
        console.log(products);
    } else{
        product.id = editingID;
        let indexProduct = findIndex(editingID);
        if(indexProduct > -1) {
            products[indexProduct] = product;
        }
    }
    resetForm();
    renderTableProduct(products);
})

const tableBodyProduct = document.getElementById("products-body") as HTMLTableSectionElement;

    function renderTableProduct(array : Product[]) : void {
    // console.log(2);
    tableBodyProduct.innerHTML = "";
        for(const product of array) {
            // console.log(product);
            tableBodyProduct.innerHTML +=
                `<tr>
                    <td> ${product.id} </td>
                    <td> ${product.ean} </td>
                    <td> ${product.nameProduct} </td>
                    <td> ${product.category} </td>
                    <td> ${product.count} </td>
                    <td> ${product.sector} </td>
                    <td> ${product.rack} </td>
                    <td> ${product.level} </td>
                    
                    <td> 
                        <button type="button" class="btn btn-dark" data-action="edit" data-id="${product.id}">Edytuj</button>
                        <button type="button" class="btn btn-danger" data-action="delete" data-id="${product.id}">Usun</button>                    
                    </td>
                </tr>`
        }
}

tableBodyProduct.addEventListener("click", event => {
    let target = event.target as HTMLElement;

    let targetId = target.dataset.id;
    let id = Number(targetId);

    let targetAction = target.dataset.action;

    if(targetAction === "delete") {
        const productIndex = findIndex(id)

        if(productIndex > -1) {
            products.splice(productIndex, 1);
            renderTableProduct(products);
        }

        if(editingID == id) {
            editingID = null;
            resetForm();
        }
    }

    if(targetAction === "edit"){
        const productIndex = findIndex(id)
        if(productIndex > -1) {
            let editingProduct = products[productIndex];
            editingID = editingProduct.id;

            inputEAN.value = editingProduct.ean;
            inputNameProduct.value= editingProduct.nameProduct;
            inputCategory.value = editingProduct.category;
            inputCount.value = String(editingProduct.count);
            inputSector.value = editingProduct.sector;
            inputRack.value = String(editingProduct.rack);
            inputLevel.value = String(editingProduct.level);

            blockInfo.textContent = `Edytujesz produkt pod numerem ${editingID}`;
            buttonAdd.textContent = "Zapisz"
            // console.log(editingProduct)
        }
    }
})

//fnction to find index of product:
function findIndex(id : number) : number {
    // let findestIndex : number = 0;
    for(let i = 0; i < products.length; i++) {
        const currProduct = products[i];
        if(currProduct.id === id) {
            return i;
        }
    }
    return -1;
}


let search = document.getElementById("search") as HTMLInputElement;
search.addEventListener("input", function(event) {
    // console.log(search.value);
    let searchProduct : string = search.value.toLocaleLowerCase();
    let foundProducts : Product[] = [];

    for(let j=0; j<products.length; j++) {
        const CurrentProduct = products[j];

        if(CurrentProduct.ean.toLocaleLowerCase().includes(searchProduct) || CurrentProduct.nameProduct.toLocaleLowerCase().includes(searchProduct)) {
            foundProducts.push(CurrentProduct);
        }
    }
    renderTableProduct(foundProducts)
});
// reset form
function resetForm(): void {
    editingID = null;
    blockInfo.textContent = "Dodaj produkt";
    buttonAdd.textContent = "Dodaj produkt";
    formAddingProduct.reset();
}