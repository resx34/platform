import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Desc from './Desc'

function TabPanelOne(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanelOne.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 700,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Обжимка коннектора rj-45" {...a11yProps(0)} />
        <Tab label="Сборка разъема питания DC" {...a11yProps(1)} />
        <Tab label="Сборка и установка купольных IP видеокамер" {...a11yProps(2)} />
        <Tab label="Регулировка купольных IP видеокамер" {...a11yProps(3)} />
        <Tab label="Сборка и установка уличных IP видеокамер" {...a11yProps(4)} />
        <Tab label="Подcоединение IP видеокамер через тип подключения PoE" {...a11yProps(5)} />
        <Tab label="Подсоединение IP видеокамеры через RJ-45 и разъем питания DC" {...a11yProps(6)} />
        <Tab label="Установка выключателя IP видеокамер" {...a11yProps(7)} />
        <Tab label="Подсоединение IP видеокамер к сетевому коммутатору" {...a11yProps(8)} />
        <Tab label="Подключение IP видеокамер к IP видеорегистратору" {...a11yProps(9)} />

      </Tabs>
      <TabPanelOne value={value} index={1}>
          <div className="active-tab">
            Item Two
          </div>
        
      </TabPanelOne>
      <TabPanelOne value={value} index={0}>
        <div className="active-tab">
            <iframe width="800" height="415" src="https://www.youtube.com/embed/toTAeUyccg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>Обжимка коннектора RJ-45</h3>
            <Desc/>

        </div>
      </TabPanelOne>
      <TabPanelOne value={value} index={2}>
        Item Three
      </TabPanelOne>
      <TabPanelOne value={value} index={3}>
        Item Four
      </TabPanelOne>
      <TabPanelOne value={value} index={4}>
        Item Five
      </TabPanelOne>
      <TabPanelOne value={value} index={5}>
        Item Six
      </TabPanelOne>
      <TabPanelOne value={value} index={6}>
        Item Seven
      </TabPanelOne>
    </div>
  );
}