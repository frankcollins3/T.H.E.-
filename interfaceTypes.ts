export interface keyRatiosINTERFACE {
    id: number,
    marketCap: number,
    sharesOutstanding: number,
    peRatio: number,
    psRatio: number,
    pbRatio: number,
    pegRatio: number,
    currentRatio: number,
    debtToEquityRatio: number,
    EPS: number,
}

export interface candlestickINTERFACE {
    id: number,
    open: number,
    low: number,
    high: number,
    close: number,
    volume: number | null
}

// in a fullly full stack app would possibly denormalize userid | username into these tables.
export interface tradeTickerINTERFACE {
    time: string, // or GraphQL Scalar type Date
    quantity: number,
    price: Number
}
