function myEach(collection, alert) {
    
if(Array.isArray(collection)){
    for (let i = 0; i < collection.length; i++) {
    alert(collection[i]);
    }
}else{
    const objectV = Object.values(collection);
    
    objectV.forEach(element => { alert(element)    });
    
    }
return collection;

};



function myMap(collection, callback){
    //console.log(callback);
    if(Array.isArray(collection)){
   const newcollection = collection.map(item=> item*3)
   //console.log(newcollection);
   return newcollection;
    }else{
       // let newobj=[];
        const objectM = Object.values(collection);
        const callback= objectM.map(item => item*3);
       
        return callback;
   }
};

function myReduce(collection, callback, acc){
   //console.log(collection,callback,acc); 
   //console.log(Array.isArray(collection))
   
       
            if (Array.isArray(collection)) {
                let total;
                if (acc === undefined) {
                    total = collection[0];
                    for (let i = 1; i < collection.length; i++) {
                        total = callback(total, collection[i]);
                       // console.log(total);
                    }
                } else {
                    total = acc;
                    for (let i = 0; i < collection.length; i++) {
                        total = callback(total, collection[i]);
                    }
                }
                return total;
            
        }; 
        if(typeof collection === 'object'){
            const objectM = Object.values(collection);
           
            let total; //console.log(acc);
            if (acc === undefined) {
            total= objectM[0];
           // console.log(objectM);
             for (let i = 1; i < objectM.length; i++) {
                total = callback(total, objectM[i]);
               // console.log(total);
              }
              return total;
            } else {
                total = acc;
                for (let i = 0; i < objectM.length; i++) {
                    total = callback(total, objectValues[i]);
                }
                return total; 
        }
    };

};


function myFind(collection,predicate){
   // console.log(collection,predicate);
    
   for(let i=0; i<collection.length; i++){

    let resultN = collection.find((element)=>element == collection[i]);
    if(predicate(resultN)){
        return resultN;  
    }
};  

};


function myFilter(collection,predicate){
//console.log(collection);
//let resultN= [];
if (Array.isArray(collection)){
for(let i=0; i<collection.length; i++){
   
        let resultN = collection.filter((element)=>predicate(element));
        //console.log(resultN);
        

            return resultN;  
   // }
}; 
}else{
    const objectM = Object.values(collection);
    for(let i=0; i<objectM.length; i++){
   
        let resultN = objectM.filter((element)=>predicate(element));
        //console.log(resultN);
        

            return resultN;
    };

}; 

};

function mySize(collection){
    //console.log(collection);
    if(Array.isArray(collection)){
    return collection.length;
    }else{
        const objectM = Object.values(collection);
        return objectM.length;

    }

};

function myFirst(collection,n){
   // console.log(collection,n);

    if(n===undefined){
       n=0;
       return collection[n];  
    }
    else
    {  
        let narray = collection.slice(0,n);
        return narray;
        };
    
};

function myLast(collection,n){
//console.log(collection);
    if(n===undefined){

        n=(collection.length)-1;
        return collection[n];  
     }
     else
     {  n=1;
         let narray = collection.slice(n);
       //  console.log(narray);
        return narray;
         };

};
function myKeys(objcollection){
   // console.log(objcollection);
    let objkeys = Object.keys(objcollection);
    return objkeys;
    



};

function myValues(objcollection){
    let objvalue = Object.values(objcollection);
    return objvalue;
}



