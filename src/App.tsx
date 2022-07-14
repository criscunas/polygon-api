import Data from './data/sp500.json';
import { HeroSection } from './components/HeroSection';
import { DataTable } from './partials/tables/DataTable';
var _ = require('lodash')


function App() {

    return (
        <div>
            <HeroSection />
            <DataTable dataSet={Data} />
        </div>
    );
}

export default App;
