import configs from '../src/service/configs';
import stocks from './data/sp500.json';
import crypto from './data/crypto.json';
import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { DataTable } from './partials/tables/DataTable';
import { GenerateResults } from './components/GenerateResults';

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
                <p className='cursor-pointer hover:border-b-4 border-blue-400'
                    onClick={() => setType('stocks')}
                >
                    Stocks
                </p>
                <p className='cursor-pointer hover:border-b-4 border-blue-400'
                    onClick={() => setType('crypto')}
                >
                    Crypto
                </p>
            </div>
            <HeroSection />
            <DataTable
                type={type}
                cryptoData={crypto}
                stockData={stocks}
                handler={generateResults}
            />
            <GenerateResults data = {searchResults} />
        </div>
    );
}

export default App;
