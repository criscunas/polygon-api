type DataProps = {
  data : {
    Symbol : string,
    Name: string, 
    Sector: string, 
  }[];
}

export const DataTable = ({data} : DataProps) => {
  return (
    <table className="table-auto w-full">
      <thead className="text-sm uppercase text-slate-400 bg-slate-50 rounded-sm">
        <th className="border border-slate-300">Symbol</th>
        <th className="border border-slate-300">Name</th>
        <th className="border border-slate-300">Sector</th>
      </thead>

      <tbody className="bg-white text-sm divide-y divide-slate-200 border-b border-slate-200">
        {data.map((ele : {Symbol: string, Name: string, Sector:string}) => {
          return (
            <tr>
              <td className="px-2"> 
                <div> {ele.Symbol} </div>
              </td>
              <td className="px-2">
                <div> {ele.Name} </div>
              </td>
              <td className="px-2">
                <div> {ele.Sector} </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}