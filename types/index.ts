export interface Holding {
  id:string

  asset:string

  holdings:number

  avgBuyPrice:number

  currentPrice:number

  shortTermGain:number

  longTermGain:number

  amountToSell:number
}

export interface CapitalGain {
  stcg:{
    profits:number
    losses:number
  }

  ltcg:{
    profits:number
    losses:number
  }
}

