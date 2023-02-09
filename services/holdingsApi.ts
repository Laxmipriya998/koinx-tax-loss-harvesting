import {
holdings
}
from "../data/holdings"

export async function getHoldings(){

return new Promise<any[]>((resolve)=>{

setTimeout(()=>{

resolve(holdings)

},1000)

})

}

