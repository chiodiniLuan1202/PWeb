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
import './faq.css';


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
              FAQ
        
          </Typography>
          <a href="http://localhost:3000/">
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
        <a href="http://localhost:3000/menu">
        <Button variant="contained" color="primary">Home</Button></a>
        </List>
       
        <List>
          <a href="http://localhost:3000/cadastroProdutos">
          <Button variant="contained" color="primary">Cadastro de Produtos</Button></a>
        </List>
        <List>
          <a href="http://localhost:3000/TelaInicial">
          <Button variant="contained" color="primary">Listagem de Produtos</Button></a>
        </List>
        <List>
          <a href="http://localhost:3000/listaUsuarios">
          <Button variant="contained" color="primary">Listagem Usuarios</Button></a>
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
          <Typography paragraph>
      
          </Typography>
         
          <Typography paragraph>
              <h1> Perguntas frequentes:</h1>
          </Typography>
            <Typography paragraph>
                <h2> Como cadastrar um usúarios? </h2>
                    <Typography paragraph>
                        1° Passo: Acessando a tela de login, embaixo do campo email se encontra o link de cadastro do usuário.
                    </Typography>
                    <Typography paragraph>
                        2° Passo: Após clicar irá abrir a tela de cadastro de usuário.
                    </Typography>
                    <Typography paragraph>
                        3° Passo: Preenchendo seus dados, e clique no botão de cadastrar. Pronto seu usuário esta criado.
                    </Typography>           
            </Typography>
            <Typography paragraph>
                <h2> Como achar a tela de cadastrar um produto? </h2>
                    <Typography paragraph>
                        1° Passo: Para você cadastrar um novo produto vá ao menu nop lado esquerdo da tela e clique nas tres barrinhas.
                    </Typography>
                    <Typography paragraph>
                        2° Passo: Após clicar irá abrir o menu, localize o botão cadastrar produto e clique nele.
                    </Typography>
                    <Typography paragraph>
                        3° Passo: A pagina irá direcioná-lo para página de cadastro, após preencher os dados clique no botão de cadastrar. 
                    </Typography>           
            </Typography>
            <Typography paragraph>
                <h2> Como vejo os produtos ja cadastrados? </h2>
                    <Typography paragraph>
                        1° Passo: Para você cadastrar um novo produto vá ao menu nop lado esquerdo da tela e clique nas tres barrinhas.
                    </Typography>
                    <Typography paragraph>
                        2° Passo: Após clicar irá abrir o menu, localize o botão cadastrar produto e clique nele.
                    </Typography>
                    <Typography paragraph>
                        3° Passo: A pagina irá direcioná-lo para página de cadastro, após preencher os dados clique no botão de cadastrar. 
                    </Typography>           
            </Typography>
          <Typography paragraph>
          Desejamos que sua experiência conosco seja extremamente positiva!
          </Typography>
          <Typography paragraph>
          Equipe LA Store.
          </Typography>
          <Typography paragraph>
                  <h2> Como ver a listagem dos usuários do sistema? </h2>
                      <Typography paragraph>
                          1° Passo: Para você ver a lista de usuários, vá ao menu localizado na parte superior do lado esquerdo da tela e clique nas três barrinhas.
                      </Typography>
                      <Typography paragraph>
                          2° Passo: Após clicar irá abrir o menu, localize o botão listar usuários e clique nele.
                      </Typography>
                      <Typography paragraph>
                          3° Passo: A página irá direcioná-lo para página da listagem de usuários. 
                      </Typography>           
              </Typography>
              <Typography paragraph>
                  <h2> Como excluir um produto? </h2>
                  <Typography paragraph>
                          1° Passo: Primeiramente entre na tela de listagem de produtos.
                      </Typography>
                      <Typography paragraph>
                          2° Passo: Após entrar na tela, localize o botão escluir no final de cada produto cadastrado.
                      </Typography>
                      <Typography paragraph>
                          3° Passo: Agora apenas clique nele que o produto será excluido. 
                      </Typography>            
            </Typography>
          <Typography paragraph>
            <h1>Desejamos que sua experiência conosco seja extremamente positiva!</h1>
          </Typography>
          <Typography paragraph>
            <h1>Equipe LA Store.</h1>
          </Typography>
      </main>
    </div>
  );
  
}
