const text = "hoge";

const number = 69;

const islogin = false;

let x;

const username = null;

const users = ["田中", "佐藤", "久保田", "鈴木", "河本"];

const user = {
    id: 1,
    name: "yourName",
    age: 20
};

console.log(text);

console.log(number);

console.log(islogin);

console.log(x);

console.log(username);

console.log(users);

function greed() {};

const hello = ()=>{};

const profile = (name) => {
    console.log(`私の名前は${name}です`);
};
profile("山田太郎");

const add = (a,b)=>{
    return a+b;
}
console.log(add(3,5));

const aplle = (text1,text2)=>{
    return text1 + text2;
}
console.log(aplle("赤い","リンゴ"));

const container = document.getElementById("container");

const btn = document.querySelector("#myButton");

const newPTag = document.createElement("p");

newPTag.textContent = "pタグを追加しました";

container.appendChild(newPTag);

btn.addEventListener("click",()=>{
    console.log("click");
});

document.addEventListener("scroll",()=>{
    console.log("scroll");
});

// スクロールを見やすくするために高さを指定しました
const height = document.getElementById("height");
height.style.height = "800px";

const addbtn = document.getElementById("addBtn");
addbtn.addEventListener("click",()=>{
    container.innerHTML = "<div>子要素が追加されました!</div>";
})