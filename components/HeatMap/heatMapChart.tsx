import * as React from "react";
import dynamic from 'next/dynamic'

const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
)


const HeatMapChart:React.FC<THeatMapChartProps> = (props) => {
    const options:any = {
        chart: {
            height: 50,
            type: 'heatmap',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            heatmap: {
            // shadeIntensity: 0.5,
            enableShades: false,
            radius: 0,
            // useFillColorAsStroke: true,
            colorScale: {
                ranges: [{
                    from: -9999999999,
                    to: 0,
                    name: 'low',
                    color: '#219653'
                },
                {
                    from: 1,
                    to: 10000,
                    name: 'medium',
                    color: '#F2994A'
                },
                {
                    from: 10000,
                    to: 99999999999,
                    name: 'high',
                    color: '#EB5757'
                },
                ]
            }
            }
        },
        dataLabels: {
          enabled: true,
          formatter: function(val:any, { seriesIndex, dataPointIndex, w }:any) {
            return props.label[dataPointIndex]
          },
          style: {
            colors: ['#fff']
          },
          textAnchor: 'middle',
          background: {
            enabled: true,
            foreColor: '#000',
            padding: 1,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#fff',
            opacity: 0.7,
          },
        },
        stroke: {
            width: 1
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
          labels: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          show: false,
        },
        grid: {
          padding: {
            top: -28,
            right: 0,
            bottom: -13,
            left: 0
          },  
          show: false, 
        },
        tooltip: {
            enabled: true,
            x: {
                show: false,
                format: 'dd MMM',
                formatter: undefined,
            },
        }
    };

    const series =[{
        name: '',
        data: props.data
        }
    ]

  return (
    <Chart
      options={options}
      series={series}
      type="heatmap"
      height={26}
      width={'100%'}
    />
  );
};

export default HeatMapChart;

export type THeatMapChartProps = { data: number[], label: string[] }
