import * as React from "react";
import dynamic from 'next/dynamic'
import { Box, Stack, Typography, } from "@mui/material";

const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
)


const Gauge:React.FC<Props> = (props) => {
    const names:string[] = []
    const values:number[] = []
    var labels:any[] = []
    
    if (props.data.length === 2) labels = [ undefined, '']
    else labels = [ undefined, 'slantedLines', '']

    for (let index = 0; index < props.data.length; index++) {
        const element = props.data[index];
        names.push(element.name)
        values.push(element.value)
    }
    
    const options:any = {
        chart: {
            // width: 380,
            type: 'donut',
            dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
            }
        },
        colors:['#333333'],
        stroke: {
          width: 1,
          colors: ['#333']
        },
        plotOptions: {
            pie: {
                startAngle: -120,
                endAngle: 120,
                offsetY: 10,
                donut: {
                    size: '75%',
                    labels: {
                        show: false,
                        total: {
                            showAlways: true,
                            show: true
                        }
                    }
                }
            },
        },
        labels: names,
        dataLabels: {
            enabled: false,
            dropShadow: {
                blur: 3,
                opacity: 0.8
            }
        },
        fill: {
            type: 'pattern',
            colors: [ '#333' ],
            opacity: 1,
            pattern: {
                enabled: true,
                style: labels
                // [ undefined, 'slantedLines', ''],
            },
        },
        states: {
            hover: {
            filter: 'none'
            }
        },
        theme: {
            palette: 'palette2'
        },
        grid: {
          padding: {
            top: -10,
            right: -30,
            bottom:-0,
            left: -10
          },  
          show: false,
        },
    }

    const series = values

    const order:{id:number,value:number,title:string}[] = [];

    for (let index = 0; index < values.length; index++) {
        if(values.length == 2 && index == 1)
            order.push({id: index+1, value: values[index], title: names[index]});
        else
            order.push({id: index, value: values[index], title: names[index]});
    }
    order.sort(function(a:any, b:any) {
        return parseFloat(b.value) - parseFloat(a.value);
    });
    // console.log('ppppp', order)

    return (
        <div id="chart-wrap">
            <Chart
            options={options}
            series={series}
            type="donut"
            width='150px'
            height='150px'
            />
            <div className="legend">
                <Stack 
                    direction="column"
                    justifyContent="center"
                    sx={{height:'100%'}}
                >
                    {
                        order.map((item,index)=>{
                            if(item.value!==0)
                            switch (item.id) {
                                case 0: return (
                                    <Stack direction='row' alignItems='center' spacing={1} key={index}>
                                        <Box width='10px' height="10px" border='1px solid #333' sx={{bgcolor:'#333'}}></Box>
                                        <Typography fontSize={12}>{item.title}</Typography>
                                    </Stack>)
                                    break;
                                case 1: return(
                                    <Stack direction='row' alignItems='center' spacing={1} key={index}>
                                        <Box width='10px' height="10px" border='1px solid #333' sx={{backgroundImage:"url('./pattern1.png')"}}></Box>
                                        <Typography fontSize={12}>{item.title}</Typography>
                                    </Stack>)
                                    break;
                                case 2: return(
                                    <Stack direction='row' alignItems='center' spacing={1} key={index}>
                                        <Box width='10px' height="10px" border='1px solid #333' sx={{bgcolor:'white'}}></Box>
                                        <Typography fontSize={12}>{item.title}</Typography>
                                    </Stack>)
                                    break;
                            }
                        })
                    }
                </Stack>
            </div>
        </div>
    );
};

export default Gauge;

export type TGaugeProps = {
    value: number,
    name: string
}[]
type Props = {data:TGaugeProps}