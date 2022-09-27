// import "./index.css"
import * as React from "react"
import { Button, Divider, Grid, Link, Stack, Typography } from "@mui/material"
import { Container } from "@mui/system"
import Header from "./header"

// import Timeline from "../components/Chart/Timeline.js";

const clients = [
    {
    avatar:'Avatar1.png',
    name:'Jenny Thompson',
    job:'Software Engineer at Google, Inc.',
    },
    {
    avatar:'Avatar3.png',
    name:'Benny Thompson',
    job:'Product Manager at Slack',
    },
]

const TimelineProps = {
    x: [0, 5.5, 7, 14, 21, 28, 35, 42, 47, 49, 56],
    y: [25, -35, -20, -5, 10, 25, 40, 55, 80, 60, 60],
};
const Layout: React.FC<Props> = ( {children} ) => {
    return(
        <>
            <Header />
            <Container>
                <Grid item container spacing={2} pt='30px'>
                    <Grid item xs={12}>
                        <Stack direction='row' spacing={2} divider={<Divider orientation="vertical" flexItem />} alignItems='center'>
                            <Link  href="/clients" underline="none" color='inherit'>
                                <Stack direction='row'>
                                    <Typography fontSize='1.25rem' lineHeight='24px'>Clients {`->`}</Typography>
                                    <Typography fontWeight='600' fontSize='1.25rem' lineHeight='24px'> &nbsp; The Thompsons</Typography>
                                </Stack>
                            </Link>
                            <Stack direction='row' spacing={2}>
                                {
                                    clients.map((item, index)=>(
                                        <Stack direction='row' spacing={1} key={index}>
                                            <img src={item.avatar} alt="" width='32px' height='32px' />
                                            <Stack color='#333333' >
                                                <Typography fontSize='1rem' fontWeight='500' lineHeight='19.3px'>{item.name}</Typography>
                                                <Typography fontSize='0.75rem' fontWeight='400' lineHeight='14.5px'>{item.job}</Typography>
                                            </Stack>
                                        </Stack>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} sx={{paddingTop:'33px !important'}}>
                        <Grid container spacing={2}>
                            <Grid item flexGrow={1}>
                                {/* <Timeline {...TimelineProps} /> */}
                                {/* <Chart /> */}
                            </Grid>
                            {/* <Grid item>
                                <Upcoming {...UpcomingProps} />
                            </Grid> */}
                        </Grid>
                    </Grid> 
                </Grid>
            </Container>
            {children}
        </>
    )
}

type Props = {
    children: JSX.Element,
};

export default Layout