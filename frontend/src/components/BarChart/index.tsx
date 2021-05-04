import dynamic from 'next/dynamic'

export default function BarChart() {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]
            }
        ]
    };

    const Chart = dynamic(() => import('react-apexcharts'), {
        ssr: false,
    });

    return (
        <>
            <Chart
                options={{
                    ...options,
                    xaxis: mockData.labels,
                }}
                series={mockData.series}
                type="bar"
                height="200"
            />
        </>
    )
}