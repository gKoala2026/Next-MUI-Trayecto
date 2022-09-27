import * as React from "react";
import PropTypes from "prop-types";
import { Container, Grid, OutlinedInput, TextField, } from "@mui/material";

import { SelectIcon } from "../commons/icon/multipleIcons";
import {
  GrayBoxPanel,
  TypoItem,
  PriceLabel,
  StockSelect,
  StockInput,
  PriceNumberFormatCustom,
} from "../../styles/styledComponents";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  numberInput: {
    width: "100%",
    backgroundColor: '#fff',
    "& input": { padding: "6px 8px" },
  },
});

type TSelect = {
  value: string|number,
  options: string[],
}

type TEquityDetailProps = {
  title?: string,
  name: TSelect,
  member: TSelect,
  company: TSelect,
  price: TSelect,
  handleChange: (e: any) => void;
}


const EquityDetail:React.FC<TEquityDetailProps> = (props) => {

  const classes = useStyles();

  return (
    <GrayBoxPanel p={3}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TypoItem lineHeight="18px" >
          {props.title}
          </TypoItem>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Liquidity Gameboard Name</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <StockInput
                    value={props.name.value}
                    name="LiquidityGameboardName"
                    onChange={props.handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} md={3}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Household Member</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <StockSelect
                    input={<OutlinedInput />}
                    IconComponent={SelectIcon}
                    value={props.member.value}
                    name="HouseholdMember"
                    onChange={props.handleChange}
                  >
                    {props.member.options.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </StockSelect>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} md={2}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Company</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <StockSelect
                    input={<OutlinedInput />}
                    IconComponent={SelectIcon}
                    value={props.company.value}
                    name="Company"
                    onChange={props.handleChange}
                  >
                    {props.company.options.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </StockSelect>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} md={2}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <PriceLabel>Current Share Price</PriceLabel>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.numberInput}
                    variant="outlined"
                    value={props.price.value}
                    onChange={props.handleChange}
                    name="price"
                    InputProps={{
                      inputComponent: PriceNumberFormatCustom as any,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </GrayBoxPanel>
  );
};

export default EquityDetail;
