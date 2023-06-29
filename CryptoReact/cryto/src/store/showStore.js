import axios from 'axios'
import { create } from 'zustand'


const showStore = create((set) => ({
    graphData: [],
    coinData: [],
    img:'',
    des: '',

    fetchData: async (id) => {
        const [graphRes, dataRes] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=180&interval=daily`),

            axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`),
        ]);
        const coinData = dataRes.data
        const img = coinData.image.large
        const des = coinData.description.en
        const graphData = graphRes.data.prices.map(price => {
            const [time, p] = price
            const date = new Date(time).toLocaleDateString("en-us")
            return {
                Date: date,
                Price: p,
            }
        })
        // console.log(dataRes.data.description.en)
        console.log(coinData.image.large)
        set({coinData})
        set({graphData})
        set({img})
        set({des})
    },
}))
export default showStore;