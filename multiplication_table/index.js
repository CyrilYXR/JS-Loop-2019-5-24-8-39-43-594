function multTable(){
    for(let i=1; i<=9; i++){
        var str = "";
        for(let j=1; j<=i; j++){
            str += i + "*" + j + "=" + i*j + " ";
        }
        console.log(str);
    }
}
multTable();