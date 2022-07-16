
type DataProps = {
    results: {
        T: string,
        c: number,
        h: number,
        l: number,
        o: number,
        v: number,
        vw: number,
    }[];

}


export const PrevCloseCard = ({ results }: DataProps) => {
    return (
        <div className="mt-4">
            {results.map((ele, index : number) => {
                return (
                    <div key={index} className="card w-80 bg-base-100 shadow-xl">
                        <div className='card-body'>
                            <h1 className="text-xl font-semibold text-center"> {ele.T} </h1>
                            <div className="mt-2 flex justify-between">
                                <div className="flex flex-col">
                                    <p className="font-semibold">Close</p>
                                    <p> {ele.c} </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-semibold">High</p>
                                    <p> {ele.h} </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-semibold">Low</p>
                                    <p> {ele.l} </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-semibold">Open</p>
                                    <p> {ele.o} </p>
                                </div>
                            </div>
                            <div className="mt-3.5 flex justify-evenly">
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Volume </p>
                                    <p> {ele.v} </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Volume Weight</p>
                                    <p className="text-center"> {ele.vw} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
