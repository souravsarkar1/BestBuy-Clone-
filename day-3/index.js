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
    document.querySelector(".itemsContainer").innerHTML=null;
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
    document.querySelector(".recentlView").innerHTML=null;
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
    document.querySelector(".ProductContainer").innerHTML=null;
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

let buyNowLsData = JSON.parse(localStorage.getItem("buyNow-LsData")) || [];
fetch("/day-5/Featuredproductsforyou.json").then((res) => {
    return res.json();
}).then((data) => {
    displayFeaturedproductsforyou(data);
}).catch((err) => {
    console.log(err);
})

function displayFeaturedproductsforyou(data) {
    document.querySelector(".Featuredproductsforyou").innerHTML=null;
    data.forEach(element => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", element.img);

        let title = document.createElement("h4");
        title.innerText = element.title;

        let des = document.createElement("p");
        des.innerText = element.des;

        let price = document.createElement("p");
        price.innerText = element.price;


        let BuyBtn = document.createElement("button");
        BuyBtn.innerText = "Buy Now";

        BuyBtn.addEventListener("click", (e) => {
            e.preventDefault();
            buyNowLsData.push(element);
            localStorage.setItem("buyNow-LsData", JSON.stringify(buyNowLsData));
            window.location.assign("/day-4/buyNow.html");
        });
        div.append(img, title, des, price, BuyBtn);
        document.querySelector(".Featuredproductsforyou").append(div);
    });
}
fetch("/day-5/fristFooterhelp.json").then((res) => {
    return res.json();
}).then((helpData) => {
    displayHelpData(helpData);
}).catch((err) => {
    console.log(err);
})

function displayHelpData(helpData) {
    document.querySelector(".footerHelp").innerHTML=null
    helpData.forEach(element => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", element.img);

        let title = document.createElement("h4");
        title.innerText = element.title;

        div.append(img, title);
        document.querySelector(".footerHelp").append(div)
    });
}
fetch("/day-5/footerContrac.json").then((res) => {
    return res.json();
}).then((contracData) => {
    displayContractData(contracData);
}).catch((err) => {
    console.log(err);
})

function displayContractData(contracData) {
    document.querySelector(".footerContractChild1").innerHTML=null;
    contracData.forEach(element => {
        let div = document.createElement("div");
        let title = document.createElement("h5");
        title.innerText = element.title;

        let title1 = document.createElement("p");
        title1.innerText = element.title1;

        let title2 = document.createElement("p");
        title2.innerText = element.title2;

        let title3 = document.createElement("p");
        title3.innerText = element.title3;

        let title4 = document.createElement("p");
        title4.innerText = element.title4;

        let title5 = document.createElement("p");
        title5.innerText = element.title5;

        let title6 = document.createElement("p");
        title6.innerText = element.title6;

        div.append(title, title1, title2, title3, title4, title5, title6);

        document.querySelector(".footerContractChild1").append(div);

    });
}
fetch("/day-5/footerContrac.json").then((res) => {
    return res.json();
}).then((contracData) => {
    displayContractData(contracData);
}).catch((err) => {
    console.log(err);
})

function displayContractData(contracData) {
    document.querySelector(".footerContractChild1").innerHTML=null;
    contracData.forEach(element => {
        let div = document.createElement("div");
        let title = document.createElement("h5");
        title.innerText = element.title;

        let title1 = document.createElement("p");
        title1.innerText = element.title1;

        let title2 = document.createElement("p");
        title2.innerText = element.title2;

        let title3 = document.createElement("p");
        title3.innerText = element.title3;

        let title4 = document.createElement("p");
        title4.innerText = element.title4;

        let title5 = document.createElement("p");
        title5.innerText = element.title5;

        let title6 = document.createElement("p");
        title6.innerText = element.title6;

        div.append(title, title1, title2, title3, title4, title5, title6);

        document.querySelector(".footerContractChild1").append(div);

    });
}