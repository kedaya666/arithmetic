let docs = [
    {id:1,words:['hello','world']},
    {id:2,words:['hello','kids']},
    {id:3,words:['zzzz','hello']},
    {id:4,words:['world','kids']}
];
let key=['hello','world'];
function findDocList(docs,key){
    for(let i=0;i<docs.length;i++){
        if(key.length<2){
            let listArr=docs[i].words;
            for(let j=0;j<listArr.length;j++){
                if(listArr[j]==key[0])
                //return "文档"+docs[i].id
                console.log("文档"+docs[i].id)
            }
        }else{
            let docsStr = docs[i].words.toString();
            let keyStr = key.toString();
            if(keyStr == docsStr)
            //return "文档"+docs[i].id
                console.log("文档"+docs[i].id)
        }
    }
}
findDocList(docs,key);