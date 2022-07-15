import configs from '../src/service/configs';
import Data from './data/sp500.json';
import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { DataTable } from './partials/tables/DataTable';
var _ = require('lodash')


function App() {

    const [searchResults, setSearchResults] = useState<any>([])

    const generateResults = async (selected: {name: string, id: number}[]):Promise<void> => {
        let symbol = selected[0].name

        configs.get(`aggs/ticker/${symbol}/prev?adjusted=true`).then(({data})=> {
            console.log(data.results)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <HeroSection />
            <DataTable
                dataSet={Data}
                handler={generateResults}
            />
        </div>
    );
}

export default App;
