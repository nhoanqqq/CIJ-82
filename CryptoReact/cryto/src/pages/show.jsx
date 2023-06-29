import React from 'react'
import showStore from '../store/showStore'
import { useParams } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header from '../components/Header';
export default function Show() {
    const store = showStore()
    const params = useParams()
    React.useEffect(
        () => {
            store.fetchData(params.id)
        }, []);
    if (!store.coinData) return <></>
    return (
        <div>
            <Header back />
            <header className='show-header'>
                <img src={store.img} />
                <h2>
                    {store.coinData.name} ({store.coinData.symbol})
                    #{store.coinData.market_cap_rank}
                </h2>
            </header>
            <div className='width'>
                <div className='show-graph'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <LineChart
                            data={store.graphData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <XAxis dataKey="Date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid />
                            <Line type="monotone" dataKey="Price" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div>
                <h3>
                    {store.des}
                </h3>
            </div>
        </div>
    )
}
