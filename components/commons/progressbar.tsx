import * as React from "react";
import dynamic from 'next/dynamic'

const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
)


const ProgressBar:React.FC<TProgressBarProps> = (props) => {
  const options:any = {
    chart: {
      height: 350,
      type: 'rangeBar',
      toolbar: {
        show:false
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        dataLabels: {
          hideOverflowingLabels: false
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function(val:any, { seriesIndex, dataPointIndex, w }:any) {
        return w.config.series[0].data[dataPointIndex].label
      },
      style: {
        colors: ['#fff']
      },
      textAnchor: 'middle',
      // offsetX: -30,
      offsetY: 0,
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
    xaxis: {
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      }
    },
    stroke: {
      width: 1,
      colors: ['#000']
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      show: false,
      min: props.min,
      max: props.max
    },
    fill: {
      colors: ['#000'],
      type: 'pattern',
      opacity: 1,
      pattern: {
        style: [ '' , 'slantedLines', undefined , 'slantedLines'], // string or array of strings
      },
    },
    grid: {
      padding: {
        top: -32,
        right: 0,
        bottom:-3,
        left: -15
      },  
      show: false,
      xaxis: {
          lines: {
              show: false
          }
      },   
      yaxis: {
          lines: {
              show: false
          }
      }, 
      row: {
        colors: ['#f3f4f5', '#fff'],
        opacity: 1
      }
    },
    tooltip:{
      enabled: false
    }
  };

  const series = [
    {
      data: props.data
    },
  ]

  return (
    <Chart
      options={options}
      series={series}
      type="rangeBar"
      height={40}
      width={'100%'}
    />
  );
};

export default ProgressBar;

export type TProgressBarProps = {
  data: {
      x: string,
      y: number[],
      label: string
  }[],
  min: number,
  max: number
}
