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


