import React, { useState, useEffect } from 'react';
var _ = require('lodash')

type DataProps = {
    dataSet: {
        ticker: string,
        name: string,
        sector: string,
    }[],

    crypto: {
        ticker: string,
        name: string,
    }[],

    type: string,

    handler: Function,
}

export const DataTable = ({ dataSet, crypto, type, handler }: DataProps) => {

    const [search, setSearch] = useState<string>('')
    const [data, setData] = useState<any[]>([])
    const [cryptoData, setCryptoData] = useState<any[]>([])
    const [selected, setSelected] = useState<any>([])

    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setSearch(e.currentTarget.value)
    }

    const onSelectChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const id = e.target.value;
        const name = e.target.name

        let item = {
            id: id,
            ticker: name
        }

        let found = _.findKey(selected, { 'id': id })

        if (found) {
            let arr = _.cloneDeep(selected)
            setSelected(_.filter(arr, (item: any) => {
                return item.id !== id
            }))
        }
        else {
            setSelected([...selected, item])
        }
    }

    useEffect(() => {
        if (!search) {
            setData(dataSet)
            setCryptoData(crypto)
        }

        if (search && type === 'stocks') {
            setData(_.filter(dataSet, (item: any) => {
                return item.name.toLowerCase().includes(search.toLowerCase().trim())
                    || item.ticker.toLowerCase().includes(search.toLowerCase().trim())
                    || item.sector.toLowerCase().includes(search.toLowerCase().trim())
            }))
        }

        if (search && type === 'crypto') {
            setCryptoData(_.filter(crypto, (item: any) => {
                return item.name.toLowerCase().includes(search.toLowerCase().trim())
            }))
        }
    }, [search])

    return (
        <div>
            {type === 'stocks' ?
                <div>
                    {!data ?
                        <div className="text-center mt-24">
                            <progress className="bg-blue-400 progress w-56"></progress>
                        </div>
                        :
                        <div>
                            <div className="bg-white flex items-center justify-between py-2 px-4">
                                <div className='font-semibold'>S&P 500</div>
                                <form>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="border-2 border-slate-300 input-sm max-w-[15rem] rounded"
                                        onChange={onChange}
                                        value={search}
                                    />
                                </form>
                            </div>
                            <div className="overflow-x-auto max-h-80 rounded-b-sm">
                                <table className="table-auto w-full">
                                    <thead className="text-sm uppercase text-slate-600 bg-slate-50">
                                        <tr>
                                            <th className="pl-4 text-left border-b border-t py-1">Ticker</th>
                                            <th className="pl-4 text-left border-b border-t py-1">Name</th>
                                            <th className="pl-4 text-left border-b border-t py-1">Sector</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white text-sm divide-y divide-slate-200 border-b border-slate-200 max-h-20">
                                        {data.map((ele: { ticker: string, name: string, sector: string }, index: number) => {
                                            return (
                                                <tr key={index} className="cursor-pointer hover:bg-slate-300">
                                                    <td className="pl-4">
                                                        <div className='flex items-center gap-4'>
                                                            <input
                                                                type="checkbox"
                                                                onChange={onSelectChange}
                                                                value={index}
                                                                name={ele.ticker.toString()}
                                                            />
                                                            {ele.ticker}
                                                        </div>
                                                    </td>
                                                    <td className="pl-4">
                                                        <div> {ele.name} </div>
                                                    </td>
                                                    <td className="p-2 ">
                                                        <div> {ele.sector} </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                {data.length === 0 ?
                                    <div className='bg-white text-center py-4 text-lg font-semibold'>
                                        <p> No matches found for {search}</p>
                                    </div>
                                    : null}
                            </div>
                        </div>
                    }
                </div>
                :
                <div>
                    {!cryptoData ?
                        <div className="text-center mt-24">
                            <progress className="bg-blue-400 progress w-56"></progress>
                        </div>
                        :
                        <div>
                            <div className="bg-white flex items-center justify-between py-2 px-4">
                                <div className='font-semibold'>Crypto</div>
                                <form>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="border-2 border-slate-300 input-sm max-w-[15rem] rounded"
                                        onChange={onChange}
                                        value={search}
                                    />
                                </form>
                            </div>
                            <div className="overflow-x-auto max-h-80 rounded-b-sm">
                                <table className="table-fixed w-full">
                                    <thead className="text-sm uppercase text-slate-600 bg-slate-50">
                                        <tr>
                                            <th className="pl-4 text-left border-b border-t py-1">Symbol</th>
                                            <th className="pl-4 text-left border-b border-t py-1">Name</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white text-sm divide-y divide-slate-200 border-b border-slate-200 max-h-20">
                                        {cryptoData.map((ele: { ticker: string, name: string }, index: number) => {
                                            return (
                                                <tr key={index} className="cursor-pointer hover:bg-slate-300">
                                                    <td className="pl-4 py-2">
                                                        <div className='flex items-center gap-4'>
                                                            <input
                                                                type="checkbox"
                                                                onChange={onSelectChange}
                                                                value={index}
                                                                name={ele.ticker.toString()}
                                                            />
                                                            {ele.ticker}
                                                        </div>
                                                    </td>
                                                    <td className="pl-4">
                                                        <div> {ele.name} </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                {cryptoData.length === 0 ?
                                    <div className='bg-white text-center py-4 text-lg font-semibold'>
                                        <p> No matches found for {search} </p>
                                    </div>
                                    : null}
                            </div>
                        </div>
                    }
                </div>
            }

            <div className="text-white my-8">
                <div className='flex justify-between items-center'>
                    <h1 className="text-2xl"> Your tickers</h1>
                    <button
                        onClick={() => setSelected([])}
                        className='btn btn-sm'
                    >
                        Reset
                    </button>
                </div>
                {!selected.length ? null
                    :
                    <div>
                        <div className='mt-4 flex justify-center divide-x-2'>
                            {selected.map((ele: { ticker: string, id: number }) => {
                                return (
                                    <p key={ele.id} className='text-white px-2'>
                                        {ele.ticker}
                                    </p>
                                )
                            })}
                        </div>
                        {selected.length > 5 ?
                            <div className='text-center mt-6 text-red-500'>
                                <p className='text-2xl'>Limit of 5</p>
                            </div>
                            :
                            <div className='text-center mt-6'>
                                <button
                                    className='btn btn-sm bg-sky-500 hover:bg-sky-600'
                                    onClick={() => handler(selected).then(() => {
                                        setSelected([])
                                    })}
                                >
                                    Get Report
                                </button>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    )
}
