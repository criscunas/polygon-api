
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
            {results.map((ele) => {
                return (
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className='card-body'>
                            <h1 className="text-xl font-semibold text-center"> {ele.T} </h1>
                            <div className="mt-2 flex justify-evenly">
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
                            <div className="mt-2 flex justify-evenly">
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Volume </p>
                                    <p> {ele.v} </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Volume Weight</p>
                                    <p> {ele.vw} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
