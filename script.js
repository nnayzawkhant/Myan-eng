let x= ['၀','၁','၂','၃','၄','၅','၆','၇','၈','၉'];


let price = document.getElementById("price");
let fee = document.getElementById("fee");

price.addEventListener( "keyup", (e)=> {
    let priceVal = e.target.value;

    //1111123232
    if (/[0-9]/.test(priceVal)) { //\d = [0-9]
        firstNum = priceVal
        console.log('eng')
    } else {
        firstNum = Num(priceVal)
    } 

    //console.log(parseFloat(firstNum))

    document.getElementById("result").innerHTML = firstNum;
})

fee.addEventListener("keyup", (e)=>{
    let priceVal = price.value
    let feeval = e.target.value;
    let secondNum

    if (/[0-9]/.test(feeval)) {
        secondNum = feeval
    } else {
        secondNum = Num(feeval)
    } 
    
    // fullNum.innerHTML = secondNum
   document.getElementById("result").innerHTML =parseFloat(firstNum ) + parseFloat(secondNum) ;

}); 



    function Num(inputNum) {
        if(inputNum === '') return

        let changeNum = '' 
        let str = '';

        for(let c = 0; c < inputNum.length; c++) {
            str += inputNum[c];
        }
        let mmNumb = str.split('')

        for (let i = 0; i < x.length; i++){
            for(let t = 0; t < x.length; t++){
                if (mmNumb[i] === x[t]){
                    changeNum += t
                }
            }
        }
        return changeNum
    }




      

        
        

