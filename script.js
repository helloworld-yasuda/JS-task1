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
const addResult = add(3,5)
console.log(addResult);

const aplle = (text1,text2)=>{
    return text1 + text2;
}
const addText = aplle("赤い","リンゴ")
console.log(addText);

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
    const newDiv = document.createElement("div");
    newDiv.textContent = "子要素が追加されました";
    container.appendChild(newDiv);
})