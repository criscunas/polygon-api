import Data from './data/sp500.json';
import { DataTable } from './partials/tables/DataTable';

function App() {
    return (
        <div>
            <DataTable dataSet={Data} />
        </div>
    );
}

export default App;
