import React, { Component } from 'react'  
import axios from 'axios';  
import MaterialTable from 'material-table';
// import SelectAccount from './SelectAccount';

export default class CadUsuario extends Component {  
  constructor(props) {  
    super(props)  
    this.state = {  
        columns: [
            { title: 'Nome', field: 'name' },
            { title: 'Login', field: 'login' },
            { title: 'Senha', field: 'pass' },
          //   {
          //     title: 'Birth Place',
          //     field: 'birthCity',
          //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          //   },
          ],
        data:[],
        // bnk: props.match.params.banco
        // ProductData: []  
  
    }  
  }  
  
  contactBack(nData,crud){
    
    console.log(nData)
    // alert(123)
    axios.post(`${global.api}/usuario/${crud}`,
    nData,
        {
            headers: { 
                'Content-Type' : 'application/json' ,
                // 'Access-Control-Allow-Origin': "*"
                // "Access-Control-Request-Method": "POST ",
                // "Access-Control-Request-Headers": "X-PINGOTHER, Content-Type"
            }
        }
    )
    // axios({
    //   method: 'POST',
    //   url: `${global.api}/usuario/${crud}`,
    //   data: nData
    // })
    window.location.reload(false);
  }
  




  componentDidMount() { 
    // if(this.props.match.params.cliente!==undefined){
    // axios.post(`http://127.0.0.1:5000/usuario/s`,{},{
    //     headers: { 
    //         'Content-Type' : 'application/json' 
    //     }
    // })
    
    axios.get(`${global.api}/usuario/s`)
    .then(response => {  
        // console.log(response.data);  
        this.setState({  
            data: response.data  
        });  
    });
    // console.log(this.state.data) 
    



    // }
     
  } 
  
  render() {  
    // console.log(this.state.bnk)  
    // console.log(this.state.data) 
    if(this.state.bnk !== this.props.match.params.banco){
      this.state.bnk=this.props.match.params.banco
      this.componentDidMount()
    }
    
    // console.log(this.props.match.params.banco);  
    
      return (  
          <div>
              {/* <SelectAccount></SelectAccount> */}
              <MaterialTable
                  title={`Usuário`}
                  columns={this.state.columns}
                  data={this.state.data.data}
                  editable={{
                      onRowAdd: (newData) =>
                      new Promise((resolve) => {
                          setTimeout(() => {
                          resolve();
                          this.contactBack(newData,'c')
                          }, 600);
                      }),
                      onRowUpdate: (newData, oldData) =>
                      new Promise((resolve) => {
                          setTimeout(() => {
                          resolve();
                          if (oldData) {
                            this.contactBack(newData,'u')
                          }
                          }, 600);
                      }),
                      onRowDelete: (oldData) =>
                      new Promise((resolve) => {
                          setTimeout(() => {
                          resolve();
                          this.contactBack(oldData,'d')
                          }, 600);
                      }),
                  }}
                  localization={{
                      body: {
                        emptyDataSourceMessage: 'Nenhum registro para exibir',
                        editRow:{
                            deleteText: "Tem certeza que deseja deletar esse registro?"
                        }
                      },
                      header:{
                          actions: "Ações"
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
          </div>
      )
    
  }  
}