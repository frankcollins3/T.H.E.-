// Key ratios: 
// Market Cap
// Shares outstanding
// P/E ratio
// P/S ratio
// P/B Ratio
// PEG Ratio
// Current Ratio
// Debt to Equity Ratio
// EPS 


export interface keyRatiosINTERFACE {
    id: number | null,
    MktCap: string | number | null
    Shares: string | number | null,
    PE: string | number | null,
    PS: string | number | null,
    PB: string | number | null,
    PEG: string | number | null,
    Current: string | number | null,
    DE: string | number | null,
    EPS: string | number,
}

export interface candlestickINTERFACE {
    id: number | null,
    date: string | null | any,
    open: number | null,
    high: number | null,
    low: number | null,
    close: number | null,
    volume: number | null
}

export type candlestickARRAYTYPE = candlestickINTERFACE[]

// in a fullly full stack app would possibly denormalize userid | username into these tables.
export interface tradeTickerINTERFACE {
    id: number,
    time: string, // or GraphQL Scalar type Date
    quantity: number,
    price: Number
}
// export interface analystINTERFACE { }

export interface APPLEcompanyINTERFACE {
    keyRatios: keyRatiosINTERFACE | null,
    candleStick: candlestickINTERFACE | null,
    tradeTicker: tradeTickerINTERFACE | null,
    // analysts: analystINTERFACE | null,
}

export interface dayMonthYearINTERFACE {
    day: string | number,
    month: string | number, 
    year: string | number
}

export interface relativityINTERFACE {
    current: number,
    variance: number | null
}

export interface estimateINTERFACE { 
    estimate: number,
    rationale: string,
    relativity:relativityINTERFACE|null     // -10:10%         77|77%
} 
