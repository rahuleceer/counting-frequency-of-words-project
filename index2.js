const fs=require('fs')

fs.readFile(__dirname+'/myfile.txt',function(err,data){
    if(err) throw err

    let arr=(data.toString()).split("\n");  // .split(/\n/)  will also work here    error when apply this on buffer
    //console.log(arr)
    let string={};
    for(let i=0; i<arr.length; i++){
        string[arr[i]]=0;
    }
    for(let i=0; i<arr.length; i++){
        string[arr[i]]=string[arr[i]]+1;
    }
    //console.log(string)
    let keys=Object.keys(string);
    let val="";
    for(let i of keys){
        val+=i+":"+(string[i]);
        val+='\n'
    }
    //console.log(val)

    fs.writeFile(__dirname+'/myfile1.txt',val,function(err){
        if(err) throw err

        console.log("file is modified")
    })
})