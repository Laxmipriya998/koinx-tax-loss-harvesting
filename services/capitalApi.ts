import {
capitalGains
}
from "../data/capitalGains"

export async function getCapitalGains(){

return new Promise<any>((resolve)=>{

setTimeout(()=>{

resolve(capitalGains)

},1000)

})

}

