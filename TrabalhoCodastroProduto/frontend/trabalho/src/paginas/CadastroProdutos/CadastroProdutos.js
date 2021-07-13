import React, {useState} from 'react';
import api from '../services/api';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import StoreIcon from '@material-ui/icons/Store';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    marginLeft: theme.spacing(-5)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(-5)

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
   
  },
}));

export default function CadastroProdutos() {
  const classes = useStyles();
  const [codigo, setCodigo] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [preco, setPreco] = useState('');
    const [foto, setFoto] = useState('');
    
    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            codigo,
            nome,
            descricao,
            tamanho,
            preco,
            foto
        };

        try {
            console.log(dados);
            const response = await api.put('produto', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("Produto cadastrado com sucesso");
            window.location.reload();
       
        } catch (error) {
            alert("Erro ao cadastrar produto " + error.message);            
        }
    }

  return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <StoreIcon />
          
        </Avatar>
        
        <form className={classes.form} noValidate onSubmit={handleCadastro}>
        <Typography component="h1" variant="h5" >
          Cadastrar Produtos
        </Typography>
          <Grid container spacing={3}>
           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="codigo"
                value={codigo}
                label="Codigo"
                name="codigo"
                autoComplete="codigo"
                onChange={e => setCodigo(e.target.value)}
                autoFocus
               
              />
            </Grid>
            <Grid item xs={12} > 
              <TextField
                autoComplete="fname"
                name="Nome"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                value={nome}
                label="Nome"
                onChange={e => setNome(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="descricao"
                value={descricao}
                label="Descricao"
                name="descricao"
                autoComplete="descricao"
                onChange={e => setDescricao(e.target.value)}
               
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="tamanho"
                label="Tamanho"
                value={tamanho}
                type="tamanho"
                id="tamanho"
                autoComplete="current-password"
                onChange={e => setTamanho(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="preco"
                label="Preco"
                value={preco}
                name="preco"
                autoComplete="preco"
                onChange={e => setPreco(e.target.value)}
                        
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="foto"
                label="Link foto"
                value={foto}
                name="foto"
                autoComplete="foto"
                onChange={e => setFoto(e.target.value)}
                        
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
           
          >
            Cadastrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
             
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
     
      </Box>
    </Container>
 
    
  );
}