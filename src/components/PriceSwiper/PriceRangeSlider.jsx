import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const CustomSlider = styled(Slider)({
  color: "#000",
  height: 6,

  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#000",
    border: "3px solid #fff",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0px 0px 0px 8px rgba(0, 0, 0, 0.16)",
    },
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#eee",
  },
});

const PriceRangeSlider = ({ onChange }) => {
  const [value, setValue] = useState([0, 30000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue); // Передача выбранного диапазона цен в родительский компонент
  };

  return (
    <Box sx={{ width: 300, marginTop: "30px" }}>
      <div
        style={{
          fontWeight: "bold",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        Price
      </div>
      <CustomSlider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        min={0}
        max={3000000}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </Box>
  );
};

export default PriceRangeSlider;
