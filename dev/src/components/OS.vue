<template>
	<b-container align="left">
  <!--<div class="col-sm-auto" style="width: 600px">
  	<br>-->
    <br>
    <b-row>
    <b-col cols="8">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" validated="true">
      <!--<div class="col-sm-auto" style="width: 600px">-->
       
      	<b-form-group id="exampleInputGroup1"
      							horizontal
                    label="Número:"
                    label-for="exampleInput1"
                    label-cols="3"
                    label-class="text-sm-left"
                    description="Digite o número da OS.">
        	<b-form-input 
        							id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="0000000" 
                     	class="col-sm-auto"
                      style="width: 30%">
        	</b-form-input>
      	</b-form-group>

      <b-form-group id="exampleInputGroup2"
      							horizontal
                    label="Data devida:"
                    label-for="exampleInput2"
                    label-cols="3"
                    label-class="text-sm-left">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name"
                      class="col-sm-auto"
                      style="width: 45%"
                      :type="'date'"
                      readonly>
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup3"
      							horizontal
                    label="Prazo em dias:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      :type="'text'"
                      required
                      style="width: 40%">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup4"
      							horizontal
                    label="Data criação:"
                    label-for="exampleInput4">
        <b-form-input id="exampleInput4"
                      :type="'date'"
                      required
                      style="width: 40%">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup5"
      							horizontal
                    label="Situação:"
                    label-for="exampleInput5">
        <b-form-select id="exampleInput5"
                      :options="foods"
                      required
                      style="width: 45%"
                      v-model="form.food">
        </b-form-select>
      </b-form-group>

      <b-form-group id="exampleInputGroup6"
      							horizontal
                    label="Cod orçamento:"
                    label-for="exampleInput6">
        <b-form-input id="exampleInput6"
                      :type="'text'"
                      required
                      style="width: 40%"
                      placeholder="000000">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup7"
      							horizontal
                    label="Cod fatura:"
                    label-for="exampleInput7">
        <b-form-input id="exampleInput7"
                      :type="'text'"
                      required
                      style="width: 40%"
                      placeholder="000000">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup7"
      							horizontal
                    label="Cod chamado:"
                    label-for="exampleInput7">
        <b-form-input id="exampleInput7"
                      :type="'text'"
                      required
                      style="width: 40%"
                      placeholder="000000">
        </b-form-input>
      </b-form-group>

     <div style="width: 70%">
     	<div>Equipamentos: </div>
    	<b-form-select v-model="selected" :options="options" class="mb-3" :select-size="4">
    	</b-form-select>
     </div>
    </div>
    <button-group>
      <b-button type="submit" variant="primary">Salvar</b-button>
      <b-button type="reset" variant="danger">Limpar</b-button>
    </button-group>
    
    </b-form>
  </b-col>
    <b-col style="width: 600px">
      <h3>Equipamento</h3>
    </b-col> 
  </b-row>
</b-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Selecione uma', value: null },
        'Concluída', 'Em aberto'
      ],
      show: true,
      selected: null,
      options: [
        { value: null, text: 'Selecione um equipamento' },
        { value: 'a', text: 'Notebook Dell 7787' },
        { value: 'b', text: 'Impressora HP 30703' },
        { value: 'c', text: 'PC desktop Itautec 3031' }
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>

<!-- b-form-1.vue -->