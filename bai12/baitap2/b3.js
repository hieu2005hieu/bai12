for(let i=1;i<=7;i++){
    if(i==1 || i==7){
       for(let j=1;j<=20;j++){
        document.write("*")
        document.write("&nbsp&nbsp")
       }
    }else {
        for(let j=1;j<=20;j++){
            if(j==1||j==20){
                document.write("*")
            }else{
                document.write("")
                document.write("&nbsp&nbsp&nbsp&nbsp")
            }
        }
    }document.write("<br>")
}
   