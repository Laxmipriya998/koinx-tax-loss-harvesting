type Props = {
  holdings: any[]
  selected: string[]
  toggle: (id: string) => void
  toggleAll: () => void
}

export default function HoldingsTable({
  holdings,
  selected,
  toggle,
  toggleAll,
}: Props) {
  return (
    <div className="mt-10">

      <div className="overflow-x-auto border border-slate-700 shadow-2xl bg-slate-900">

        <table className="min-w-full text-white">

          <thead>

            <tr className="border-b border-slate-700 bg-slate-800">

              <th className="px-6 py-5">

                <input
                  type="checkbox"
                  checked={selected.length === holdings.length}
                  onChange={toggleAll}
                  className="h-5 w-5 accent-blue-600"
                />

              </th>

              <th className="px-6 py-5 text-left">ASSET</th>

              <th className="px-6 py-5 text-center">HOLDINGS</th>

              <th className="px-6 py-5 text-center">AVG BUY PRICE</th>

              <th className="px-6 py-5 text-center">CURRENT PRICE</th>

              <th className="px-6 py-5 text-center">SHORT-TERM GAIN</th>

              <th className="px-6 py-5 text-center">LONG-TERM GAIN</th>

              <th className="px-6 py-5 text-center">AMOUNT TO SELL</th>

            </tr>

          </thead>

          <tbody>

            {holdings.map((item) => (

              <tr
                key={item.id}
                className="border-b border-slate-700 hover:bg-slate-800 transition"
              >

                <td className="px-6 py-6">

                  <input
                    type="checkbox"
                    checked={selected.includes(item.id)}
                    onChange={() => toggle(item.id)}
                    className="h-5 w-5 accent-blue-600"
                  />

                </td>

                <td className="px-6 py-6">

  <div className="flex items-center gap-3">

    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-sm font-bold">

      {item.asset.charAt(0)}

    </div>

    <span className="font-semibold">

      {item.asset}

    </span>

  </div>

</td>


                <td className="px-6 py-6 text-center">

                  {item.holdings}

                </td>

                <td className="px-6 py-6 text-center">

                  ₹{item.avgBuyPrice}

                </td>

                <td className="px-6 py-6 text-center">

                  ₹{item.currentPrice}

                </td>

                <td
                  className={`px-6 py-6 text-center font-bold ${
                    item.shortTermGain >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {item.shortTermGain >= 0 ? "+" : ""}
                  ₹{item.shortTermGain}
                </td>

                <td
                  className={`px-6 py-6 text-center font-bold ${
                    item.longTermGain >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {item.longTermGain >= 0 ? "+" : ""}
                  ₹{item.longTermGain}
                </td>

                <td className="px-6 py-6 text-center">

                  {selected.includes(item.id)
                    ? item.holdings
                    : "-"}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="flex justify-center mt-8">

        <button
          className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 font-semibold transition">
          View All Holdings
        </button>

      </div>

    </div>
  )
}