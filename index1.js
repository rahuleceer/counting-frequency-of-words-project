const fs=require('fs')

fs.writeFile(__dirname+'/myfile.txt',"cat\ndog\ncat\ndog\ncat\ndog",function(err){
    if(err)  throw err

    console.log("write the file")
})