import configs from '../src/service/configs';
import Data from './data/sp500.json';
import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { DataTable } from './partials/tables/DataTable';
import { GenerateResults } from './components/GenerateResults';
var _ = require('lodash')


function App() {

    const [searchResults, setSearchResults] = useState<any>([])

    const generateResults = async (selected: {name: string, id: number}[]):Promise<void> => {

        const response = await Promise.all(
            selected.map(async ques => {
                const resp = await configs.get(`aggs/ticker/${ques.name}/prev?adjusted=true`)
                return resp.data.results
            })
        )

        setSearchResults(response)
    }

    return (
        <div>
            <HeroSection />
            <DataTable
                dataSet={Data}
                handler={generateResults}
            />
            <GenerateResults data = {searchResults} />
        </div>
    );
}

export default App;
