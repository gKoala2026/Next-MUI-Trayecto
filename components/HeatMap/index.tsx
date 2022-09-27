import {
  Box,
  Grid,
} from "@mui/material";

import {
  PriceLabel,
} from "../../styles/styledComponents";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ProgressBar, { TProgressBarProps } from "../commons/progressbar";
import HeatMapChart, { THeatMapChartProps } from "./heatMapChart";


const HeatMap:React.FC<THeatMapProps> = (props) => {

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={8.5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12/100*40}>
                  <PriceLabel>Category 1</PriceLabel>
                </Grid>
                <Grid item xs>
                  <PriceLabel>Category 2</PriceLabel>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <ProgressBar {...props.data} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3.5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <PriceLabel>Heatmap</PriceLabel>
            </Grid>
            <Grid item xs={12}>
              {/* <Stack spacing={0.6} direction='row'>
                {props.heatMap.map((item, index)=>(
                // <Grid item xs={3} key={index} >
                  <Stack bgcolor={(item.value<=0 && '#219653') || ((item.value<10000 && '#F2994A') || 'red')} py="0px"  justifyContent='center' spacing={0.3} direction='row' alignItems='center' width='57px' height='26px'>
                    {item.check===1 && 
                      <CheckCircleOutlineOutlinedIcon sx={{color:"#fff", fontSize:"12px"}} />
                    }
                      <Typography fontSize='0.75rem' fontWeight="bold" color="#fff">{item.title}</Typography>
                  </Stack>
                // </Grid>
                ))}
              </Stack> */}
              <HeatMapChart {...props.heatMap} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeatMap;

export type THeatMapProps ={
  heatMap: THeatMapChartProps,
  data: TProgressBarProps
}