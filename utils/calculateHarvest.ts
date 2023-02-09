export function calculateHarvest(
base:any,
selected:any[]
){

const updated=
JSON.parse(
JSON.stringify(base)
)

selected.forEach((item)=>{

if(
item.shortTermGain>0
){

updated.stcg.profits+=
item.shortTermGain

}

if(
item.shortTermGain<0
){

updated.stcg.losses+=
Math.abs(
item.shortTermGain
)

}

if(
item.longTermGain>0
){

updated.ltcg.profits+=
item.longTermGain

}

if(
item.longTermGain<0
){

updated.ltcg.losses+=
Math.abs(
item.longTermGain
)

}

})

return updated

}

