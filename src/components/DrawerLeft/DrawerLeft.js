import React, {Fragment} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './DrawerLeft.scss';

import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({

    left: false,

  });

  const toggleDrawerLeft = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawerLeft(anchor, false)}
      onKeyDown={toggleDrawerLeft(anchor, false)}
    >
      <List>
        {['Ropa íntima', 'Accesorios', 'Juguetes eróticos', 'Novedades'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    
    </div>
  );
return (
    <Fragment>
{['left'].map((anchor) => (
                <React.Fragment key={anchor} >
                <Button onClick={toggleDrawerLeft(anchor, true)}><MenuIcon fontSize="large"  className="text-white"/></Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawerLeft(anchor, false)}>
                    {list(anchor)}
                </Drawer>
                </React.Fragment>
            ))}
    </Fragment>
  );
}