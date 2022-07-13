import React, {useState, useEffect} from 'react';
var _ = require('lodash')

type DataProps = {
    dataSet: {
        Symbol: string,
        Name: string,
        Sector: string,
    }[];
}

export const DataTable = ({ dataSet }: DataProps) => {

    const [search, setSearch] = useState<string>('')
    const [data, setData] = useState<any[]>([])

    const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setSearch(e.currentTarget.value)
    }

    useEffect(() => {

        if(!search) {
            setData(dataSet)
        }

        if(search) {
            setData(_.filter(dataSet , (item : any) => {
                return item.Name.toLowerCase().includes(search.toLowerCase().trim())
                || item.Symbol.toLowerCase().includes(search.toLowerCase().trim())
            }))
        }
    }, [search])

    return (
        <div className="max-w-xl m-auto">
            <div className="bg-white">
                <form className="py-2 ml-4">
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
                            <th className="border-b border-t py-1">Symbol</th>
                            <th className="border-b border-t py-1">Name</th>
                            <th className="border-b border-t py-1">Sector</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-sm divide-y divide-slate-200 border-b border-slate-200 max-h-20">
                        {data.map((ele: { Symbol: string, Name: string, Sector: string }, index: number) => {
                            return (
                                <tr key={index} className="cursor-pointer hover:bg-slate-300">
                                    <td className="pl-4">
                                        <div> {ele.Symbol} </div>
                                    </td>
                                    <td className="pl-4">
                                        <div> {ele.Name} </div>
                                    </td>
                                    <td className="p-2 ">
                                        <div> {ele.Sector} </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
