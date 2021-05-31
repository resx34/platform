import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <IconButton edge="start"  onClick={handleClick} color="inherit" aria-label="menu">
        <MenuIcon />
    </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} > 
            <Link to='/' >Главная</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to='/videos'>Видео</Link>
            </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to='/profile'>Профиль</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}