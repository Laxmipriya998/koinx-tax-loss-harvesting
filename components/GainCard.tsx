import { formatCurrency } from "../utils/formatCurrency"

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
  realised,
}: Props) {

  const after = title === "After"

  return (
    <div
      className={`border border-slate-700 shadow-2xl p-8 ${
        after
          ? "bg-gradient-to-br from-blue-600 to-blue-500"
          : "bg-slate-900"
      }`}
    >
      <h2 className="text-4xl font-bold text-white mb-8">
        {title} Harvesting
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between text-gray-300 text-lg">
          <span>Profits</span>
          <span className="font-semibold text-white">
            {formatCurrency(profits)}
          </span>
        </div>

        <div className="flex justify-between text-gray-300 text-lg">
          <span>Losses</span>
          <span className="font-semibold text-white">
            {formatCurrency(losses)}
          </span>
        </div>

        <hr className="border-slate-700" />

        <div className="flex justify-between text-xl font-semibold text-white">
          <span>Net Capital Gain</span>
          <span>{formatCurrency(net)}</span>
        </div>

        <div className="flex justify-between text-xl font-bold text-white">
          <span>Realised Gain</span>
          <span>{formatCurrency(realised)}</span>
        </div>

      </div>
    </div>
  )
}