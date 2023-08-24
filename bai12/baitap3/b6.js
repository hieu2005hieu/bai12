let a = +prompt("moi nhap chieu dai")
let b = +prompt("moi nhap chieu rong")
for(let i=1;i<=b;i++){
    if(i==1 || i==b){
        for(let j=1;j<=a;j++){
            document.write("*")
            document.write("&nbsp")
        }
    }else{
        for(let j=1;j<=a;j++){
            if(j==1 || j==a){
                document.write("*")
                document.write("&nbsp")
            }else{
                document.write("")
                document.write("&nbsp&nbsp&nbsp")
            }
        }
    }
    document.write("<br>")
}