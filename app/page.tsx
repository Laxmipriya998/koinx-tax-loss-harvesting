"use client"

import { useEffect,useState } from "react"

import GainCard from "../components/GainCard"

import HoldingsTable from "../components/HoldingsTable"

import { getCapitalGains } from "../services/capitalApi"

import { getHoldings } from "../services/holdingsApi"

import { calculateHarvest } from "../utils/calculateHarvest"

export default function Home(){

const [gains,setGains]=
useState<any>()

const [holdings,setHoldings]=
useState<any[]>([])

const [selected,setSelected]=
useState<string[]>([])

useEffect(()=>{

async function load(){

const g=
await getCapitalGains()

const h=
await getHoldings()

setGains(g)

setHoldings(h)

}

load()

},[])

if(!gains){

return(
<div>
Loading...
</div>
)

}

const selectedRows=

holdings.filter(

(item)=>

selected.includes(
item.id
)

)

const after=

calculateHarvest(
gains,
selectedRows
)

const beforeNet=

gains.stcg.profits
-
gains.stcg.losses
+
gains.ltcg.profits
-
gains.ltcg.losses

const afterNet=

after.stcg.profits
-
after.stcg.losses
+
after.ltcg.profits
-
after.ltcg.losses

function toggle(
id:string
){

setSelected(

(prev)=>

prev.includes(id)

?

prev.filter(
(x)=>
x!==id
)

:

[
...prev,
id
]

)

}

function toggleAll(){

if(
selected.length===
holdings.length
){

setSelected([])

}

else{

setSelected(

holdings.map(
(h)=>
h.id
)

)

}

}

return(

<div className="max-w-6xl mx-auto p-10">

<h1
className="text-5xl font-bold mb-10 text-white"
>

Tax Loss Harvesting

</h1>

<div
className="grid grid-cols-1 md:grid-cols-2 gap-6"
>

<GainCard

title="Before"

profits={
gains.stcg.profits+
gains.ltcg.profits
}

losses={
gains.stcg.losses+
gains.ltcg.losses
}

net={
beforeNet
}

realised={
beforeNet
}

/>

<GainCard

title="After"

profits={
after.stcg.profits+
after.ltcg.profits
}

losses={
after.stcg.losses+
after.ltcg.losses
}

net={
afterNet
}

realised={
afterNet
}

/>

</div>

<HoldingsTable

holdings={
holdings
}

selected={
selected
}

toggle={
toggle
}

toggleAll={
toggleAll
}

/>

</div>

)

}

