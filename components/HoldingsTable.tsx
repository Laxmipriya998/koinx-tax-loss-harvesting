type Props = {
holdings:any[]

selected:string[]

toggle:(id:string)=>void

toggleAll:()=>void
}

export default function HoldingsTable({

holdings,

selected,

toggle,

toggleAll

}:Props){

return(

<div className="mt-10">

<div
className="overflow-x-auto rounded-xl bg-white"
>

<table
className="w-full text-black"
>

<thead>

<tr
className="bg-gray-100"
>

<th className="p-4">

<input

type="checkbox"

checked={
selected.length===
holdings.length
}

onChange={
toggleAll
}

/>

</th>

<th className="p-4">
Asset
</th>

<th className="p-4">
Holdings
</th>

<th className="p-4">
Avg Buy
</th>

<th className="p-4">
Current
</th>

<th className="p-4">
ST Gain
</th>

<th className="p-4">
LT Gain
</th>

<th className="p-4">
Sell
</th>

</tr>

</thead>

<tbody>

{

holdings.map((item)=>(

<tr
key={item.id}
className="border-t"
>

<td className="p-4">

<input

type="checkbox"

checked={
selected.includes(
item.id
)
}

onChange={()=>

toggle(
item.id
)

}

/>

</td>

<td className="p-4">
{item.asset}
</td>

<td className="p-4">
{item.holdings}
</td>

<td className="p-4">
₹{item.avgBuyPrice}
</td>

<td className="p-4">
₹{item.currentPrice}
</td>

<td className="p-4">
₹{item.shortTermGain}
</td>

<td className="p-4">
₹{item.longTermGain}
</td>

<td className="p-4">

{

selected.includes(
item.id
)

?

item.holdings

:

0

}

</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>

)

}

