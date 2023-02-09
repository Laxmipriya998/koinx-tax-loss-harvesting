"use client"

import { useEffect, useState } from "react"

import GainCard from "../components/GainCard"
import HoldingsTable from "../components/HoldingsTable"
import Loader from "../components/Loader"

import { getCapitalGains } from "../services/capitalApi"
import { getHoldings } from "../services/holdingsApi"

import { calculateHarvest } from "../utils/calculateHarvest"

export default function Home() {

  const [gains, setGains] = useState<any>()
  const [holdings, setHoldings] = useState<any[]>([])
  const [selected, setSelected] = useState<string[]>([])
  const [error, setError] = useState("")

  useEffect(() => {

    async function load() {

      try {

        const capital = await getCapitalGains()
        const assets = await getHoldings()

        setGains(capital)
        setHoldings(assets)

      } catch {

        setError("Unable to load data.")

      }

    }

    load()

  }, [])

  if (error) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-slate-900">

        <h2 className="text-red-400 text-2xl font-bold">

          {error}

        </h2>

      </div>

    )

  }

  if (!gains) {

    return <Loader />

  }

  const selectedRows = holdings.filter(item =>
    selected.includes(item.id)
  )

  const after = calculateHarvest(
    gains,
    selectedRows
  )

  const beforeNet =
    gains.stcg.profits -
    gains.stcg.losses +
    gains.ltcg.profits -
    gains.ltcg.losses

  const afterNet =
    after.stcg.profits -
    after.stcg.losses +
    after.ltcg.profits -
    after.ltcg.losses

  const savings =
    beforeNet > afterNet
      ? beforeNet - afterNet
      : 0

  function toggle(id: string) {

    setSelected(prev =>

      prev.includes(id)

        ? prev.filter(x => x !== id)

        : [...prev, id]

    )

  }

  function toggleAll() {

    if (selected.length === holdings.length) {

      setSelected([])

    } else {

      setSelected(

        holdings.map(h => h.id)

      )

    }

  }

  return (

    <div className="min-h-screen bg-slate-900">

      <div className="max-w-7xl mx-auto px-8 py-10">

        <h1 className="text-4xl font-bold text-white mb-10">

          Tax Loss Harvesting

        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>

        <GainCard
            title="Before"
            profits={gains.stcg.profits + gains.ltcg.profits}
            losses={gains.stcg.losses + gains.ltcg.losses}
            net={beforeNet}
            realised={beforeNet}
          />

          <GainCard
            title="After"
            profits={after.stcg.profits + after.ltcg.profits}
            losses={after.stcg.losses + after.ltcg.losses}
            net={afterNet}
            realised={afterNet}
          />

        </div>

        {savings > 0 && (

          <div className="mt-8 mb-8 border border-green-500 bg-green-900/20 text-green-300 p-5 rounded-lg">

            <span className="font-bold text-lg">

              🎉 You're going to save ₹{savings} in taxes

            </span>

          </div>

        )}

        <HoldingsTable
          holdings={holdings}
          selected={selected}
          toggle={toggle}
          toggleAll={toggleAll}
        />

      </div>

  

  )

}