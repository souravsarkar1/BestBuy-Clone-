let url ="/day-2/fakeApi.json";
//    console.log(url);
//    console.log("ratna");
fetch(url).then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
    displayItem(data);
}).catch((err)=>{
    console.log(err);
})

function  displayItem(data) {
    data.forEach(element => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src",element.image);
       

        let title = document.createElement("h5");
        title.innerText=element.title;

        div.append(img,title);
        document.querySelector(".itemsContainer").append(div);
    });
    
}

let urlrecentlView = "/day-3/Newarrivals.json";
fetch(urlrecentlView).then((res) => {
    return res.json();
}).then((recentlyViewData) => {
    //console.log(recentlyViewData);
    displayRecentlyView(recentlyViewData);
}).catch((err) => {
    console.log(err);
})

function displayRecentlyView(recentlyViewData) {
    recentlyViewData.forEach(element => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", element.img);


        let title = document.createElement("h5");
        title.innerText = element.title;
        div.append(img, title);
        document.querySelector(".recentlView").append(div);
    });
}


let ProductContainerLSData = JSON.parse(localStorage.getItem("ProductContainer-LSData")) || [];
let urlProductContainer = "/day-3/prduct.json";
fetch(urlProductContainer).then((res) => {
    return res.json();
}).then((ProductContainerData) => {
    DisplayProduct(ProductContainerData);
}).catch((err) => {
    console.log(err)
})

function DisplayProduct(ProductContainerData) {
    ProductContainerData.forEach(element => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", element.img);


        let title = document.createElement("h4");
        title.innerText = element.title;


        let des = document.createElement("p");
        des.innerText = element.des;

        let price = document.createElement("p");
        price.innerText = element.price;

        let btn = document.createElement("button");
        btn.innerText = "Add to Cart"
        btn.addEventListener("click", () => {

            let flag = false;
            for (let i = 0; i < ProductContainerLSData.length; i++) {
                if (ProductContainerLSData[i].id === element.id) {
                    flag = true;
                    break;
                }
            }
            if (flag === true) {
                alert("PRODUCT IS ALREADY IN CART")
            }
            else {
                ProductContainerLSData.push(element);
                localStorage.setItem("ProductContainer-LSData", JSON.stringify(ProductContainerLSData));
                alert("PRODUCT IS ADDING TO CART")
            }



        })
        div.append(img, title, des, price, btn);

        document.querySelector(".ProductContainer").append(div);
    });
}