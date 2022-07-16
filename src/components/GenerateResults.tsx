import { PrevCloseCard } from "../partials/cards/PrevCloseCard"

type DataProps = {
    data : any[],
}

export const GenerateResults = ({data} : DataProps) => {
    return (
        <div>
            {data.length === 0 ? null
                :
            <div>
                {data.map((ele) => {
                    return (
                        <div>
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
