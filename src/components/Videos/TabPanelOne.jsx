import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
        <Tab label="Монтаж Ip камер" {...a11yProps(0)} />
        <Tab label="Обжимка коннектора rj-45" {...a11yProps(1)} />

      </Tabs>
      <TabPanelOne value={value} index={0}>
          <div className="active-tab">
          
          </div>
        
      </TabPanelOne>
      <TabPanelOne value={value} index={1}>
        <div className="active-tab">
            <iframe width="800" height="415" src="https://www.youtube.com/embed/toTAeUyccg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>Обжимка коннектора RJ-45</h3>
            <div className="active-tab-description">
                Aliqua magna amet irure esse velit velit ullamco dolore occaecat culpa proident. Proident consectetur qui dolor sunt aliqua labore consectetur magna irure minim sint consectetur. Est adipisicing anim aliqua officia duis pariatur voluptate elit commodo non ad enim nostrud exercitation. Adipisicing culpa culpa est consequat laboris nulla Lorem aliquip laboris cupidatat elit sunt sint. Labore sunt esse deserunt nisi elit ex anim quis mollit nostrud.

Qui sint aliqua consectetur laboris dolore non pariatur in duis proident. Cillum minim eiusmod in exercitation ex ad ut qui nulla elit irure culpa. Anim aliquip id dolore sit ad velit ipsum. Labore ex proident velit aute anim culpa officia duis aute. Commodo labore tempor est incididunt.

Quis esse culpa eiusmod pariatur culpa do. Deserunt incididunt consequat consequat nisi laboris. Labore enim reprehenderit ad Lorem consequat. Consectetur nostrud veniam labore cupidatat id duis duis tempor ex. Tempor ad enim qui non cupidatat quis tempor non in voluptate ex. Nostrud ullamco amet ex dolor pariatur mollit veniam ipsum.

Reprehenderit aliquip quis excepteur non irure. Mollit cupidatat voluptate laborum do esse enim voluptate quis ad aliqua do et id. Commodo laborum amet ullamco in laborum minim consectetur labore culpa dolore. Dolor anim dolor laborum eiusmod anim ipsum dolor enim eiusmod mollit reprehenderit officia excepteur. Excepteur do laborum non velit sint dolore enim dolore labore minim fugiat est adipisicing.

Sunt exercitation magna aute occaecat id sit duis velit tempor magna. Incididunt mollit enim sit in consequat nisi consequat excepteur duis velit. Eiusmod anim reprehenderit veniam proident Lorem aute et deserunt. Quis ad cillum pariatur pariatur id anim ad voluptate officia sit voluptate pariatur nulla anim. Voluptate et ea esse nisi reprehenderit id occaecat incididunt excepteur enim est fugiat eiusmod. Id et ut commodo pariatur cillum id.

Nulla exercitation enim adipisicing aliquip laboris amet in duis eiusmod commodo ex proident nostrud voluptate. Veniam ut sint ad incididunt amet ut Lorem. Exercitation nisi anim labore cupidatat proident duis. Consequat nostrud deserunt eiusmod minim incididunt eu tempor nostrud. Mollit commodo mollit in veniam dolor occaecat velit eiusmod excepteur culpa ut labore.

Officia veniam cillum duis occaecat est. Velit officia anim voluptate sit quis nisi qui ipsum minim. Veniam aliqua est laboris excepteur magna non consectetur. Quis tempor enim cupidatat eu sint cillum veniam proident amet mollit. Velit dolor adipisicing sint sunt cupidatat exercitation commodo amet culpa incididunt Lorem aliquip nulla.
            </div>
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