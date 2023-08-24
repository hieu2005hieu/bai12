        let a=+prompt("nhap");
        let c=0
        for(let k=0;k<=a;k++){
            for(i=2;i<=k;i++){
            if(k%i==0){
                c++;
            }   
            }
            if(c==1){
                console.log(`${k} la so nguyen to`);
            }
            c=0;
        }
