const fs = require('fs');
const axios = require('axios');
const process = require('process');

function readData(path){
    fs.readFile(path, "utf-8", (err,data)=>{
        if(err){
            console.log(`Error Reading ${path}`, err);
            process.kill(1);
        }
        handleOutput([data].toString().split('\n'))
    });
}

async function getData(url, out){
    try{
        let response = await axios.get(url);
        writeData(response.data, out)
    }
    catch(err){
        console.error(`Couldn't download ${url}: ${err}`);
        process.exit(1);
    }
}

let out;

function handleOutput(dataArr){
    dataArr.pop();
    for(let data of dataArr){
        if(data.includes('https')){
            out = data.split('/')[2]
             getData(data, out)
            
        }else{
            out = data.split('//')[1]
           getData(data, out)
           
        }
        }
    }
    
function writeData(data, out){
    
    fs.writeFile(out, data, 'utf-8', function(err){
            
        
        if(err){
            console.error(`Couldn't download ${data}: ${err}`);
            process.exit(1);
        }
        else{
            console.log(`Wrote to ${out}`)
        }
}) 
}


readData(process.argv[2])