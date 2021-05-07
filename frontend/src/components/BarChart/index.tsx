import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { round } from '../../utils/format'
import { api } from '../../utils/requests'
import { SaleSuccess } from '../../types/sale'

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    series: SeriesData[];
    labels: {
        categories: string[];
    };
}

export default function BarChart() {
    const [chartData, setChartData ] = useState<ChartData>({
        series: [{
            name: "",
            data: []
        }],
        labels: {
            categories: []
        },
    })

    useEffect(()=>{
        api.get('sales/success-by-seller')
        .then(res => { 
            const resData = res.data as SaleSuccess[];
            const categories = resData.map(sale => {
                return sale.sellerName
            })
            const data = resData.map(sale => {
                return round((sale.deals * 100) / sale.visited, 1); 
            })
            setChartData({
                    labels:{
                        categories
                    },
                    series:[
                        {
                            name:'Sucesso(%)',
                            data,
                        }
                    ]
                })
        })
        .catch(error => console.log("Erro ao buscar informações para o BarChart: " + error.message))
    },[])  


    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const Chart = dynamic(() => import('react-apexcharts'), {
        ssr: false,
    });

    return (
        <>
            <Chart
                options={{
                    ...options,
                    xaxis: chartData.labels,
                }}
                series={chartData.series}
                type="bar"
                height="200"
            />
        </>
    )
}