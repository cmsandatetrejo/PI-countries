const {Country} = require('../db.js');
const axios=require('axios');
const URL="http://localhost:5000/countries";

const getAlltoBD=async(req,res)=>{
    const arrayCountries=[];

    try {
        const {data}= await axios(URL);
        if(!data){
            res.status(400).send("problemas con la api");
        }else {
            let contador=1; 
            for (let countryData of data) {
                const { name, flags,continents, capital, population, tld } = countryData;
                const id=generateRandomCode(); 
               console.log("name", name.common);
                console.log("flags",flags.png);
                console.log("continents",continents[0]);
                console.log("capital",capital&&capital.length>0 ? capital[0] : null);
                
                console.log(contador++);
               /* arrayCountries.push({
                   name: name.common,
                   image: flags.png,
                   continents: continents[0],
                   population: population&&population>0 ? population : null,     
                });*/
               // if(id===".fr") alert(name);
                console.log("id", id);
                await Country.create({
                   id, 
                   name: name.common,
                   image: flags.png,
                   continents: continents[0], 
                   //capital: capital&&capital.length>0 ? capital[0] : null,
                   population: population&&population>0 ? population : null,
                });
                
            }
            res.status(200).send("exitososos");
        } 
    }    
    catch (error) {
        
    }
}

const generateRandomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 3; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }

module.exports={
    getAlltoBD,
}