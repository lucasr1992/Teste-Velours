<template>
  <div class="container mt-5" >
    <div class="card">
      <div class="card-header">
        <h1>Cadastro de Produto</h1>
        <RouterLink to="/" class="btn btn-success float-end">Voltar</RouterLink>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label>Cod.</label>
          <input type="text" v-model="modelo.produto.cod_produto" class="form-control"/>
        </div>
        <div class="mb-3">
          <label>Descrição</label>
          <input type="text" v-model="modelo.produto.descricao" class="form-control"/>
        </div>
        <div class="mb-3">
          <label>Valor</label>
          <input type="number" v-model="modelo.produto.valor" class="form-control"/>
        </div>
        <div class="mb-3">
          <label>Qnt. Estoque</label>
          <input type="number" v-model="modelo.produto.qnt_estoque" class="form-control"/>
        </div>
        <div class="mb-3">
          <button type="button" @click="salvarProduto" class="btn btn-primary">Cadastrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'criarProduto',
    data(){
      return{
        modelo: {
          produto:{
            cod_produto:'',
            descricao:'',
            valor:null,
            qnt_estoque:null
          }
        }
      }
    },

    methods:{
      salvarProduto(){
        axios.post('http://localhost:3000/api/produto/add', this.modelo.produto)
        .then( res => {
          if(res.data.error === 'Informe Todos os Campos'){
            alert("Erro Ao Cadastrar");
          }else{
            alert("Cadastrado com Sucesso");
            this.modelo.produto = {
              cod_produto:'',
              descricao:'',
              valor:null,
              qnt_estoque:null
            }
          }
        })
      }
    }
  }

</script>


