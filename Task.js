const data = [
    {
        name: "Tanaka",
        height: 195,
        weight: 56,
    },
    {
        name: "Satou",
        height: 170,
        weight: 60,
    },
    {
        name: "Itou",
        height: 110,
        weight: 45,
    },
    

]

narabe(data);

function narabe(data2){
    data2.sort(function(a,b){
        if(a.height > b.height){
            return -1;
        }else{
            return 1;
        }
    });
}

console.log(data);

