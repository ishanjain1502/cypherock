let secretu = [80, 65, 78, 75, 65, 74, 11,  23 , 56 , 44, 88, 61, 26 , 54, 1 , 44, 92, 111, 46, 13, 19, 51, 42, 152, 162, 172, 55, 64 , 94, 100, 15, 200];

class secret{
    constructor(secret = []) {
        this.secret = secret;
        this.share1 = [];
        this.share2 = [];
        this.share3 = [];
        this.share4 = [];
    }

    initializer() {

        for(let i=0; i<32; i++){
    
            let m = Math.floor(Math.random() * (255 - 0)) + 0;
            let x, y =0;
            // console.log(m + '??????');
    
    
            x = Math.floor(Math.random() * (255 - 0)) + 0;
            y = m*x + this.secret[i];
            y = y;    
            this.share1.push([x,y]);
        
            x = Math.floor(Math.random() * (255 - 0)) + 0;
            y =  m*x + this.secret[i];
            y = y;
        
            this.share2.push([x,y]);
        
            x = Math.floor(Math.random() * (255 - 0)) + 0;
            y =  m*x + this.secret[i];;
            y = y;
        
            this.share3.push([x,y]);
        
            x = Math.floor(Math.random() * (255 - 0)) + 0;
            y =  m*x + this.secret[i];;
            y = y;
        
            this.share4.push([x,y]);
        
        }
    }

    reconstruct(arr1, arr2) {
    
        let temp = [];
        
        for(let i=0; i<32; i++){
            let num = (arr1[i][1] - arr2[i][1]);
            let den = (arr1[i][0] - arr2[i][0]);
            let m = num/den;
            // console.log(m + '-------');
    
            let res = arr2[i][1] - arr2[i][0]*m;
            // console.log(res + "+++++++++++++++");
    
            temp.push(res);
        }
    
        return temp;
    }


}

let obj = new secret(secretu);
obj.initializer();

let temp1 = obj.share1;
let temp2 = obj.share3;

let res = obj.reconstruct(temp1, temp2);
console.log(res);