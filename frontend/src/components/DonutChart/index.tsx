import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { api } from '../../utils/requests';
import { SaleSum } from '../../types/sale'


type ChartData = {
    series: number[];
    labels: string[];
}

export default function DonutChart() {
    const [chartData, setChartData ] = useState<ChartData>({
        labels:[],
        series:[],
    })

    useEffect(()=>{
        api.get('sales/sum-by-seller')
        .then(res => {
            const resData = res.data as SaleSum[];
            const labels = resData.map(sale => {
                return sale.sellerName
            })
            const series = resData.map(sale => {
                return sale.sum
            })
            setChartData({
                    labels,
                    series
                })
        })
        .catch(error => console.log("Erro ao buscar informações para o DonutChart: " + error.message))
    },[])  
    
    const options = {
        legend: {
            show: true
        }
    }

    const Chart = dynamic(() => import('react-apexcharts'), {
        ssr: false,
    });

    return (
        <>
            <Chart
                options={{
                    ...options,
                    labels: chartData.labels
                }}
                series={chartData.series}
                type="donut"
                height="200"
            />
        </>
    )
}