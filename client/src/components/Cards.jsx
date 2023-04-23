import { useState, useEffect } from 'react';
import { getP1Temp } from "../services/ubidots";

export default function HeaderCards() {
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     (async () => {
    //         const res = await getP1Temp()
    //         setData(res)
    //         setLoading(false)
    //         console.log(res)
    //     })()
    // }, [])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await getP1Temp();
            setData(res);
            setLoading(false);
            console.log(res);
        };

        const intervalId = setInterval(fetchData, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="text-black grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-9 p-8 " >

                <div className="bg-white rounded-lg  p-6 border min-w-[300px]" >
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-500">atmhumidity</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="text-xl font-bold">{loading ? `refetched ${data.length} entries` : "Stale"}</span>
                    </div>

                    <span className="text-xs text-muted">Since last last update</span>

                    <br />
                    <button className='bg-green-400 px-5 py-1s' onClick={() => {
                        setLoading(true)
                        console.log("refresh")
                    }}>Poll</button>
                </div>

            </div>
        </>
    );
}