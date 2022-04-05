let liuyifei = {
    name: "刘亦菲",
    age: 18,
    sex: "女"
}

var zhoujielun = {
    name: "周杰伦",
    age: "20",
    sex: "男"
}

var stars = [
    liuyifei,
    zhoujielun,
    {
        "name": "刘德华",
        "age": "30",
        sex: "男",
        test: function(){

        }
    }
]

function aaaa(){

}

console.log(stars)

console.log(JSON.stringify(liuyifei));
