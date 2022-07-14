import Data from './data/sp500.json';
import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { DataTable } from './partials/tables/DataTable';
var _ = require('lodash')


function App() {

    const [results, setResults] = useState<any>([])

    const generateResults = async (selected: object):Promise<any> => {
        console.log(selected)

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
