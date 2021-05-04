import dynamic from 'next/dynamic'

export default function DonutChart() {
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
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
                    labels: mockData.labels
                }}
                series={mockData.series}
                type="donut"
                height="200"
            />
        </>
    )
}