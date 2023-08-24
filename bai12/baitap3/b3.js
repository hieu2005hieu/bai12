let number = 1;
        let count = 0;
        let total = 0;
        let soNguyenTo = "nhom so nguyen to: "
        let soHoanHao = "nhom so hoan hao: "
        let soChan = "nhom so chan: "
        let soLe = "nhom so le: "
        while (number > 0) {
            let number = +prompt("moi nhap tiep")
            if (number < 0) {
                console.log(soNguyenTo);
                console.log(soHoanHao);
                console.log(soChan);
                console.log(soLe);
                break;
            }

            
            for (let i = 2; i <= number; i++) {
                if (number % i == 0) {
                    count++;
                }
            } 
            if (count == 1) {
                
                soNguyenTo = soNguyenTo + number + " "
            }
            count = 0
            
           
            for (let k = 1; k < number; k++) {
                if (number % k == 0) {
                    total = total + k;
                }
            }
            if (total == number) {
                
                soHoanHao = soHoanHao + number + " "
            }
            total = 0


            if (number % 2 == 0) {
               
                soChan = soChan + number + " "
            } else {
                
                soLe = soLe + number + " "
            }
        }
