import { PrevCloseCard } from "../partials/cards/PrevCloseCard"

type DataProps = {
    data : any[],
}

export const GenerateResults = ({data} : DataProps) => {
    return (
        <div>
            {data.length === 0 ? null
                :
            <div className="md:grid grid-cols-2 gap-4">
                {data.map((ele, index : number) => {
                    return (
                        <div key={index}>
                            <PrevCloseCard results={ele} />
                        </div>
                    )
                })
                }
            </div>
            }
        </div>
    )
}
