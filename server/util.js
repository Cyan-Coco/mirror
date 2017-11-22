let fs = require('fs');
let path='./mock/profile/a.json';
function readFile() {
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf8',function (err,data) {
            if(err)return reject(err);
            resolve(data);
        });
    });
}

readFile().then((data)=>{
    data=JSON.parse(data);
    data.map((item,index)=>item.userName+'1');
    return data;
}).then((data)=>{
    console.log(data.slice(0, 5));
})

