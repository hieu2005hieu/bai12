let number=20
let a=0
let b=1
let textcon
for(let i=1;i<=number;i++){
    document.write(a)
    textcon=a+b
    a=b
    b=textcon
    document.write("<br>")
    if(a%5==0){
        document.write("so dau tien trong day f chia het cho 5 la ",a);
        break;
    }
    
}
