import React, { useState, useEffect } from 'react';
var _ = require('lodash')

type DataProps = {
    dataStocks: {
        ticker: string,
        name: string,
        sector: string,
    }[],

    dataCrypto: {
        ticker: string,
        name: string,
    }[],

    type: string,

    handler: Function,
}

export const DataTable = ({ dataStocks, dataCrypto, type, handler }: DataProps) => {

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
            setData(dataStocks)
            setCryptoData(dataCrypto)
        }

        if (search && type === 'stocks') {
            setData(_.filter(dataStocks, (item: any) => {
                return item.name.toLowerCase().includes(search.toLowerCase().trim())
                    || item.ticker.toLowerCase().includes(search.toLowerCase().trim())
                    || item.sector.toLowerCase().includes(search.toLowerCase().trim())
            }))
        }

        if (search && type === 'crypto') {
            setCryptoData(_.filter(dataCrypto, (item: any) => {
                return item.name.toLowerCase().includes(search.toLowerCase().trim())
            }))
        }
    }, [search])

    return (
        <div className='mt-4'>
            {type === 'stocks' ?
                <div className='w-96 m-auto'>
                    <div className='flex items-center'>
                        <input
                            type='text'
                            className='pl-2 rounded-sm h-8 w-full border-2 border-slate-300'
                            placeholder='Search stock ticker...'
                            onChange={onChange}
                            value={search}
                        />
                    </div>

                    <div className='mt-2.5 overflow-x-auto max-h-80 rounded'>
                        <table className="table-auto w-full">
                            <tbody className="bg-white text-sm divide-y divide-slate-200 border-b border-slate-200">
                                {data.map((ele: { ticker: string, name: string}, index: number) => {
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
                    </div>

                </div>
                :
                <div className='w-96 m-auto'>
                    <div className='flex items-center'>
                        <input
                            type='text'
                            className='pl-2 rounded-sm h-8 w-full border-2 border-slate-300'
                            placeholder='Search crypto ticker...'
                            onChange={onChange}
                            value={search}
                        />
                    </div>

                    <div className='mt-2.5 overflow-x-auto max-h-80 rounded'>
                        <table className="table-auto w-full">
                            <tbody className="bg-white text-sm divide-y divide-slate-200 border-b border-slate-200">
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
                    </div>
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
