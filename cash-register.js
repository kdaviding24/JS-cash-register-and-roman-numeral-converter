function checkCashRegister(price, cash, cid) {
    let totalChange = 0
    for(let i = 0; i < cid.length; i++){
      totalChange += cid[i][1];
    };
    totalChange = (Math.round((totalChange * 100)))/100;
    let changeNeeded = cash - price;
    if(changeNeeded > totalChange){
      return {status: "INSUFFICIENT_FUNDS", change:[]};
    }
    else if (changeNeeded === totalChange){
     let exactChange = [];
      for(let a = cid.length -1; a >= 0; a--){
        exactChange.push(cid[a]);
      }
      return {status: "CLOSED", change: [...cid]};
    }
    
  let currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.10,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100 };
    let changeToReturn = []
     for(let i = cid.length - 1; i >= 0; i--){
       let amountOfChange = 0
       if(changeNeeded >= currency[cid[i][0]] && cid[i][1]!== 0){ 
    do{ changeNeeded -= currency[cid[i][0]];
    changeNeeded = (Math.round(changeNeeded * 100)) / 100;
      cid[i][1] -= currency[cid[i][0]];
      amountOfChange ++;
       
      

      } while(changeNeeded >= currency[cid[i][0]] && cid[i][1] != 0)
      changeToReturn.push([cid[i][0], (currency[cid[i][0]] * amountOfChange)]);
      amountOfChange = 0;
       }
     } ;
    if(changeNeeded != 0){
      return {status: "INSUFFICIENT_FUNDS", change:[]};
    }
    return {status: "OPEN", change: [...changeToReturn]}
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

/*let totalcid = function(cid){
    let totalChange = 0
    for(let i = 0; i < cid.length; i++){
      totalChange += cid[i][1];
    }
    return totalChange
  };*/

  /*totalcid(cid)*/

  /*   for(let j = cid[i][1]; j >= 0; j -= changeNeeded){
         changeNeeded = j;
       }*/