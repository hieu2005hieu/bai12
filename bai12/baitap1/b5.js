let number=20
let a=0
let b=1
let textcon
for(let i=1;i<=number;i++){
    textcon=a+b
    a=b
    b=textcon
    check = textcon+a
}
    document.write("ket qua cua 20 so f dau tien ",check)