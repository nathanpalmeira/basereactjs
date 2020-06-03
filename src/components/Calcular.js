import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
import MaterialTable from "material-table";

 
const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const validate = values => {
  const errors = {};
  if (!values.nome) {
    errors.nome = 'Obridatório';
  }
  if (!values.tpdocumento) {
    errors.tpdocumento = 'Obridatório';
  }
  if (!values.documento) {
    errors.documento = 'Obridatório';
  }
  if (!values.documento) {
    errors.documento = 'Obridatório';
  }
  if (!values.metal) {
    errors.metal = 'Obridatório';
  }
  if (!values.cotacao) {
    errors.cotacao = 'Obridatório';
  }

  return errors;
};



export default class Calcular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Peso (Grama)", field: "peso", type: "numeric" },
        { title: "Pureza (%)", field: "pureza", type: "numeric" }
      ],
      data: [
        { peso: 100, pureza: 80 },
        { peso: 130, pureza: 85 },
        { peso: 200, pureza: 90 }
      ]
    };
  }

  render() {
    return (
      <div style={{ padding: 16, margin: 'auto', maxWidth: 800 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Calcular
      </Typography>
      
      <Form
        onSubmit={onSubmit}
        initialValues={{ employed: true, stooge: 'larry' }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="nome"
                    component={TextField}
                    type="text"
                    label="Nome do Cliente"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    fullWidth
                    name="tpdocumento"
                    component={Select}
                    label="Tipo de Documento"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="cpf">CPF</MenuItem>
                    <MenuItem value="cnpj">CNPJ</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={8}>
                  <Field
                    fullWidth
                    required
                    name="documento"
                    component={TextField}
                    type="text"
                    label="Documento"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Metal</FormLabel>
                    <RadioGroup row>
                      <FormControlLabel
                        label="Ouro"
                        control={
                          <Field
                            name="metal"
                            component={Radio}
                            type="ouro"
                            value="ouro"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Prata"
                        control={
                          <Field
                            name="metal"
                            component={Radio}
                            type="prata"
                            value="prata"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Cobre"
                        control={
                          <Field
                            name="metal"
                            component={Radio}
                            type="cobre"
                            value="cobre"
                          />
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="cotacao"
                    fullWidth
                    required
                    component={TextField}
                    type="cotacao"
                    label="Cotação"
                  />
                </Grid>
                <Grid item xs={12}>
                  <MaterialTable
                    title="Itens"
                    columns={this.state.columns}
                    data={this.state.data}
                    options={{
                      search: false,
                      // paging: false
                    }}
                    editable={{
                      onRowAdd: newData =>
                        new Promise(resolve => {
                          setTimeout(() => {
                            resolve();
                            this.setState(prevState => {
                              const data = [...prevState.data];
                              data.push(newData);
                              return { ...prevState, data };
                            });
                          }, 600);
                        }),
                      onRowDelete: oldData =>
                        new Promise(resolve => {
                          setTimeout(() => {
                            resolve();
                            this.setState(prevState => {
                              const data = [...prevState.data];
                              data.splice(data.indexOf(oldData), 1);
                              return { ...prevState, data };
                            });
                          }, 600);
                        })
                    }}
                    localization={{
                      body: {
                        emptyDataSourceMessage: 'Nenhum registro para exibir',
                        editRow:{
                            deleteText: "Tem certeza que deseja deletar esse registro?"
                        }
                      },
                      header:{
                          actions: "Excluir"
                      },
                      toolbar: {
                        searchTooltip: 'Pesquisar',
                        searchPlaceholder: 'Pesquisar'
                      },
                      pagination: {
                        labelRowsSelect: 'linhas',
                        labelDisplayedRows: '{count} de {from}-{to}',
                        firstTooltip: 'Primeira página',
                        previousTooltip: 'Página anterior',
                        nextTooltip: 'Próxima página',
                        lastTooltip: 'Última página'
                      }
                    }}
                  />
                </Grid>
                
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Calcular
                  </Button>
                </Grid>
                
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
    );
  }
}
