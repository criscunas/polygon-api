import configs from '../src/service/configs'
import stocks from './data/sp500.json'
import crypto from './data/crypto.json'
import { useState } from 'react'
import { DataTable } from './partials/tables/DataTable'
import { GenerateResults } from './components/GenerateResults'
import { PageOptions } from './components/PageOptions'

function App() {

    const [searchResults, setSearchResults] = useState<any>([])
    const [options, setOptions] = useState<any>({name: 'stocks', type: 'PC' })

    const generateResults = async (selected: {ticker: string, id: number}[]):Promise<void> => {
        const response = await Promise.all(
            selected.map(async ques => {
                const resp = await configs.get(`aggs/ticker/${ques.ticker}/prev?adjusted=true`)
                return resp.data.results
            })
        )
        setSearchResults(response)
    }

    const displayOption = (option: string, type:string) => {
        if(type === 'name') {
            setOptions({...options, name: option })
        }

        if(type === 'option') {
            setOptions({...options, type: option })
        }
    }

    return (
        <div>
            <PageOptions
                handler={displayOption}
                options = {options}
            />
            <DataTable
                type={options.name}
                cryptoData={crypto}
                stockData={stocks}
                handler={generateResults}
            />
            <GenerateResults data = {searchResults} />
        </div>
    );
}

export default App;
