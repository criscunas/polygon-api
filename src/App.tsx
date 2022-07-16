import configs from '../src/service/configs';
import Data from './data/sp500.json';
import Crypto from './data/crypto.json';
import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { DataTable } from './partials/tables/DataTable';
import { GenerateResults } from './components/GenerateResults';
var _ = require('lodash')


function App() {

    const [searchResults, setSearchResults] = useState<any>([])
    const [type, setType] = useState<string>('stocks')

    const generateResults = async (selected: {ticker: string, id: number}[]):Promise<void> => {

        const response = await Promise.all(
            selected.map(async ques => {
                const resp = await configs.get(`aggs/ticker/${ques.ticker}/prev?adjusted=true`)
                return resp.data.results
            })
        )

        setSearchResults(response)
    }

    return (
        <div>
            <div className='text-white flex gap-8 text-2xl'>
                <p className='cursor-pointer'
                    onClick={() => setType('stocks')}
                >
                    Stocks
                </p>
                <p className='cursor-pointer'
                    onClick={() => setType('crypto')}
                >
                    Crypto
                </p>
            </div>
            <HeroSection />
            <DataTable
                type={type}
                crypto={Crypto}
                dataSet={Data}
                handler={generateResults}
            />
            <GenerateResults data = {searchResults} />
        </div>
    );
}

export default App;
