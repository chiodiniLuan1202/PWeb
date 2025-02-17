
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import logo from './logo.jpg';
import './menu.css';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
         LA Store
        
          </Typography>
          <a href="http://localhost:3000/">
         <img id="botao" src="https://image.flaticon.com/icons/png/512/1828/1828479.png" alt="Logout" width="35" height="35"></img>
         </a>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
         <a href="http://localhost:3000/cadastroProdutos">
         <Button variant="contained" color="primary">Cadastro de Produtos</Button></a>
         
        </List>
        <List>
        <a href="http://localhost:3000/TelaInicial">
        <Button variant="contained" color="primary">Listagem de Produtos</Button></a>
         
        </List>
        <List>
        <a href="http://localhost:3000/ListaUsuarios">
        <Button variant="contained" color="primary">Listagem de Usuarios</Button></a>
         
        </List>
        <List>
        <a href="http://localhost:3000/faq">
        <Button variant="contained" color="primary">FAQ</Button></a>
         
        </List>
        <Divider />
        
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
          <div id="logo">
            <img src={logo} alt="Logo LA Store" width="650" height="500"/>
          </div>
          <Typography paragraph>
          A LA Store é uma loja virtual de moda feminina. Ela foi fundada em 02 de Outubro de 2020 pelas sócias Amanda e Lucineia, de onde originou-se o nome da empresa. 
          A loja virtual nasceu do sonho das sócias em ter um negócio próprio e foi criada com o objetivo de levar conforto e estilo para cada cliente.
          </Typography>
          <Typography paragraph>
          A LA Store busca peças confortáveis e modernas. Looks perfeitos para qualquer ocasião. Peças exclusivas. T-shirts, Vestidos e mais. Compre online. Looks estilosos para você.
          </Typography>
          <Typography paragraph>
          Desejamos que sua experiência conosco seja extremamente positiva!
          </Typography>
          <Typography paragraph>
          Equipe LA Store.
          </Typography>
      </main>
    </div>
  );
  
}
