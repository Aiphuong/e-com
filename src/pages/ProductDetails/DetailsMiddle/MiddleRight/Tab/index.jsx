import React, { useState } from "react";
import "./style.scss";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TableContent from "../Table";

TabContent.propTypes = {};

export function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function TabContent(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="Description" />
          <Tab label="Reviews" />
          <Tab label="Questions" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography variant="h4">Origins</Typography>
          <Typography>
            We work hard to ensure that the fruit and vegetables we sell are
            fresh and high in quality. If we don’t grow them ourselves, we
            source them from carefully chosen suppliers, preferring to buy
            locally whenever possible.
          </Typography>
          <Typography variant="h4" className="cook">
            How to cook
          </Typography>
          <Typography>
            From roasts, salads and soups to casseroles and cakes, Carrots will
            lend sweetness, texture and colour to an enormous number of recipes.
          </Typography>
          <Typography variant="h4" className="vitamin">
            Full of Vitamins!
          </Typography>
          <TableContent />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Paper>
    </>
  );
}

export default TabContent;
