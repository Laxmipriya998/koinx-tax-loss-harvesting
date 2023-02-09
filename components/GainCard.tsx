type Props = {
  title: string
  profits: number
  losses: number
  net: number
  realised: number
}

export default function GainCard({
  title,
  profits,
  losses,
  net,
  realised
}: Props) {

const after =
title === "After"

return (

<div
className={`
rounded-2xl
p-8
text-white
${after ? "bg-blue-500" : "bg-black"}
`}
>

<h2 className="text-3xl font-bold mb-6">

{title}

</h2>

<div className="space-y-4">

<div>
Profit: ₹{profits}
</div>

<div>
Loss: ₹{losses}
</div>

<div>
Net Capital Gain: ₹{net}
</div>

<div>
Realised Gain: ₹{realised}
</div>

</div>

</div>

)

}

