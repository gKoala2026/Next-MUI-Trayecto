import { NextPage } from 'next'
import { Container, Grid, Stack, Typography } from "@mui/material"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { PriceLabel, } from "../../styles/styledComponents";
import Employer, { TEmployerProps } from "../../components/Employer";
import Gauge, { TGaugeProps } from "../../components/commons/gauge";

// const GaugeProps:TGaugeProps[] = [
//     {
//         data: [ 70, 30 ],
//         title: [ 'Google', 'Stripe' ]
//     },
//     {
//         data: [ 100, 10, 60 ],
//         title: [ 'RSUs', 'ISOs', 'ESPP' ]
//     },
//     {
//         data: [ 80, 20 ],
//         title: [ 'Held', 'Unvested' ]
//     },
// ]
const GaugeProps:TGaugeProps[] = [
    [
        { name: 'Google', value: 70 }, 
        { name: 'Sripe', value: 30 }, 
    ],
    [
        { name: 'RSUs', value: 100 }, 
        { name: 'ISOs', value: 10 }, 
        { name: 'ESPP', value: 60 }, 
    ],
    [
        { name: 'Held', value: 80 }, 
        { name: 'Unvested', value: 20 }, 
    ],
]

const Equity:NextPage<TEquityProps> = (props) => {
    return(
        <Grid container spacing={2} mb={15}>
            <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color='#333333' fontSize={24} lineHeight="29px" fontWeight="bold">Holdings</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={0} alignItems='center' >
                            <Stack direction={{md:'row', xs:'column'}}>
                                <Stack spacing={2}>
                                    <PriceLabel>Total Equity Value</PriceLabel>
                                    <Stack direction='row' alignItems='center'>
                                        <Grid item>
                                            <Typography fontSize={48} lineHeight="58px">${props.totalEquityValue.toLocaleString('en-US')}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <InfoOutlinedIcon sx={{fontSize:"18 px"}} />
                                        </Grid>
                                    </Stack>
                                </Stack>
                                <Grid container justifyContent='center'>
                                    {
                                        GaugeProps.map((item, index)=>(
                                            <Gauge {...{data:item}} key={index} />
                                        ))
                                    }
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Employer {...props.GoogleStockPlan} />
                    </Grid>
                    <Grid item xs={12}>
                        <Employer {...props.StripeStockPlan} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color='#333333' fontSize={24} lineHeight="29px" fontWeight="bold">Upcoming Equity Events</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {
                              props.EquityEventData.map((list, index)=>{
                                var year = new Date(props.EquityEventData[index].date).getFullYear();
                                if (index !== 0)
                                  year = new Date(props.EquityEventData[index-1].date).getFullYear();
                                return (
                                    new Date(list.date).getFullYear() > year && 
                                    <Grid item xs={12} key={index}>
                                        <Grid container spacing={1} alignItems='center'>
                                            <Grid item xs={12}>
                                              <Typography color='#333333' fontSize={16} lineHeight="19.3px" fontWeight="bold">
                                                {new Date(list.date).getFullYear()}
                                              </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Grid container spacing={1} alignItems="center">
                                                    <Grid item>
                                                        <Grid container>
                                                            <img src={list.icon} alt="" />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography color='#828282' fontSize={16} >{list.date}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Typography color='#333333' fontSize={16} >{list.shares[0]}</Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography color='#828282' fontSize={16} >{list.shares[1]}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid> ||
                                    <Grid item xs={12} key={index}>
                                        <Grid container spacing={1} alignItems='center'>
                                            <Grid item xs={6}>
                                                <Grid container spacing={1} alignItems="center">
                                                    <Grid item>
                                                        <Grid container>
                                                            <img src={list.icon} alt="" />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography color='#828282' fontSize={16} >{list.date}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Typography color='#333333' fontSize={16} >{list.shares[0]}</Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography color='#828282' fontSize={16} >{list.shares[1]}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )}
                                )
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Equity

export type TEquityProps = {
    totalEquityValue: number,
    GoogleStockPlan: TEmployerProps,
    StripeStockPlan: TEmployerProps,
    EquityEventData: {
        icon: string,
        date: string,
        shares: string[]
    }[],
}
