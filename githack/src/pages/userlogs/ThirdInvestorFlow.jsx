import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CheckCircleRounded } from "@mui/icons-material";
import Business from "./Business";
import Services from "./Services";
import ThirdHouseHoldFlow from "./ThirdHouseHoldFlow";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ThirdInvestorFlow() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered indicatorColor="secondary">
          <Tab icon={<CheckCircleRounded />} label="Business Information" {...a11yProps(0)} />
          <Tab icon={<CheckCircleRounded />} label="Services" {...a11yProps(1)} />
          <Tab icon={<CheckCircleRounded />} label="Recycling Center" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Business />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Services />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ThirdHouseHoldFlow />
      </CustomTabPanel>
    </Box>
  );
}
