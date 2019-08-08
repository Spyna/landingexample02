import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Icon from "../../components/Icon";
import mailIcon from "./ico-mail.svg";
import notificationIcon from "./ico-notification.svg";
import NewsLetter from './Newsletter'

const NotificationIcon =()=> <Icon image={notificationIcon} />;
const NewsLetterIcon =()=><Icon image={mailIcon} />;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    display:'none',
    "@media (min-width: 320px) and (max-width: 480px) ": {
      display:'block'
    },
    width: '100%',
    // backgroundColor: theme.palette.background.paper,
  },
}));

const AntTabs = withStyles({
  root: {
    borderBottom: 0,
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    backgroundColor: "#ccc",
    borderBottom: 0,
    width: "50%",
    "&:hover": {
      opacity: 1,
    },
    "&$selected": {
      backgroundColor: "white",
      fontWeight: theme.typography.fontWeightMedium,
      borderBottom: 0,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <AntTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          className={classes.tab}
        >
          <AntTab label="" icon={<NewsLetterIcon />} {...a11yProps(0)} />
          <AntTab label="" icon={<NotificationIcon />} {...a11yProps(1)} />
        </AntTabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <NewsLetter />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
}
