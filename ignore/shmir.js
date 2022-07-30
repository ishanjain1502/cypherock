let secret = [80, 65, 78, 75, 65, 74, 80, 65, 78, 75, 65, 74, 80, 65, 78, 75, 65, 74, 80, 65, 78, 75, 65, 74, 80, 65, 78, 75, 65, 74 , 15, 200];
// let k = 2;

let share1 = [];
let share2 = [];
let share3 = [];
let share4 = [];

for(let i=0; i<32; i++){

    let m = Math.floor(Math.random() * (255 - 0)) + 0;

    let x = Math.floor(Math.random() * (255 - 0)) + 0;
    let y = m*x + secret[i];
    y = y%256;    
    share1.push([x,y]);

    x = Math.floor(Math.random() * (255 - 0)) + 0;
    y =  m*x + secret[i];
    y = y%256;

    share2.push([x,y]);

    x = Math.floor(Math.random() * (255 - 0)) + 0;
    y =  m*x + secret[i];;
    y = y%256;

    share3.push([x,y]);

    x = Math.floor(Math.random() * (255 - 0)) + 0;
    y =  m*x + secret[i];;
    y = y%256;

    share4.push([x,y]);

}

function reconstruct(arr1, arr2) {
    
    let temp = [];
    
    for(let i=0; i<32; i++){
        let m = (arr1[i][1] - arr2[i][1])/(arr1[i][0] - arr2[i][0]);

        let res = arr2[i][1] - arr2[i][0]*m;
        temp.push(res);
    }

    return temp;
}

