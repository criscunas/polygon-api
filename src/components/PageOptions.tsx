type propData = {
    options: {
        name: string,
        type: string,
    },
    handler: Function,
}

export const PageOptions = ({ handler, options }: propData) => {
    return (
        <div>
            <div className='text-white flex gap-8 text-2xl'>
                <p className='cursor-pointer hover:underline underline-offset-8 decoration-4 decoration-blue-400'
                    onClick={() => handler('stocks', 'name')}
                >
                    Stocks
                </p>
                <p className='cursor-pointer hover:underline underline-offset-8 decoration-4 decoration-blue-400'
                    onClick={() => handler('crypto', 'name')}
                >
                    Crypto
                </p>
            </div>

            <div className="pt-6 pb-4 md:pt-6">
                {options.name === 'stocks' ?
                        <p className="text-white"> Select up to 5 stock tickers </p>
                    :
                        <p className="text-white">Select up to 5 crypto tickers</p>
                }
                <div className="mt-4 text-white grid grid-cols-2 gap-y-2 sm:grid-cols-4 sm:divide-x-2 sm:mt-6">
                    <div className="sm:pr-3.5">
                        <p
                            onClick={() => handler('PC', 'option')}
                            className="cursor-pointer text-sm hover:underline underline-offset-8 decoration-2 decoration-blue-400"
                        >
                            Previous Close
                        </p>
                    </div>

                    <div className="sm:px-3.5">
                        <p
                            onClick={() => handler('DOC', 'option')}
                            className="cursor-pointer text-sm hover:underline underline-offset-8 decoration-2 decoration-blue-400"
                        >
                            Daily Open/Close
                        </p>
                    </div>

                    <div className="sm:px-3.5">
                        <p
                            onClick={() => handler('GD', 'option')}
                            className="cursor-pointer text-sm hover:underline underline-offset-8 decoration-2 decoration-blue-400"
                        >
                            Grouped Daily(Bars)
                        </p>
                    </div>

                    <div className="sm:px-3.5">
                        <p
                            onClick={() => handler('AG', 'option')}
                            className="cursor-pointer text-sm hover:underline underline-offset-8 decoration-2 decoration-blue-400"
                        >
                            Aggregates
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-white pb-4">
                {options.type === 'PC' ?
                    <p>Get the previous day's open, high, low, and close (OHLC) for the specified stock ticker.</p>
                    :
                    null
                }
                {options.type === 'DOC' ?
                    <p>Get the open, close and afterhours prices of a stock symbol on a certain date.</p>
                    :
                    null
                }
                {options.type === 'GD' ?
                    <p>Get the daily open, high, low, and close (OHLC) for the entire stocks/equities markets.</p>
                    :
                    null
                }
                {options.type === 'AG' ?
                    <p>Get aggregate bars for a stock over a given date range in custom time window sizes.</p>
                    :
                    null
                }
            </div>
        </div>
    )
}
