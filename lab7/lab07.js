const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
function display(number) {
    var this_Genre = document.createElement("div");//最大的框
    this_Genre.className="item";
    var Tips = document.createElement("p");
    Tips.innerText = "Genre:" + works[number].tips;
    Tips.style.padding = "0 0 10px 0";//调整与下面板块的间距
    this_Genre.appendChild(Tips);



    var inner_box1 = document.createElement("div");//框内的第一个框
    inner_box1.className = "inner-box";
    var Author = document.createElement("h3");
    Author.innerText = works[number].author;
    Author.style.display = "inline";        //调整两个内容位于一行
    Author.style.padding = "0 15px 0 0";     //调整两个内容的间距
    inner_box1.appendChild(Author);
    var Lifetime = document.createElement("h4");
    Lifetime.innerText = "lifetime:" + works[number].lifetime;
    Lifetime.style.display = "inline";      //调整两个内容位于一行
    inner_box1.appendChild(Lifetime);

    var inner_box2 = document.createElement("div");//框内的第二个框
    inner_box2.className = "inner-box";

    var PopularPhotos = document.createElement("h3"); //第二个框中的文字内容
    PopularPhotos.innerText="Popular Photos";
    inner_box2.appendChild(PopularPhotos);                         //加进第二个框

    for(j = 0;j < works[number].photos.length;j++){
        var img = document.createElement("img");        //图片内容
        img.src = works[number].photos[j];
        img.className = "photo";
        inner_box2.appendChild(img);                              //加进第二个框
    }

    var visit = document.createElement("button");//按钮
    visit.textContent = "visit";                            //按钮内容


    this_Genre.appendChild(inner_box1);
    this_Genre.appendChild(inner_box2);
    this_Genre.appendChild(visit);

    document.body.appendChild(this_Genre);
}
for(i in works) {
    display(i);
}