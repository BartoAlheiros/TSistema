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
      <b-form v-if="show" validated="true">
      <h4>Equipamento</h4>
      <b-form-group id="exampleInputGroup8"
                    horizontal
                    label="Cod:"
                    label-for="exampleInput8"
                    label-cols="2"
                    label-class="text-sm-left">
          <b-form-input 
                      id="exampleInput8"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="0000000" 
                      class="col-sm-auto"
                      style="width: 50%">
          </b-form-input>
        </b-form-group>

        <b-form-group id="exampleInputGroup9"
                    horizontal
                    label="Data entrada:"
                    label-for="exampleInput9"
                    label-cols="5"
                    label-class="text-sm-left">
          <b-form-input 
                      id="exampleInput9"
                      type="date"
                      v-model="form.email"
                      required
                      placeholder="0000000" 
                      class="col-sm-auto"
                      style="width: 105%">
          </b-form-input>
        </b-form-group>

        <b-form-group id="exampleInputGroup10"
                    horizontal
                    label="Setor:"
                    label-for="exampleInput10"
                    label-cols="5"
                    label-class="text-sm-left">
          <b-form-input 
                      id="exampleInput10"
                      type="text"
                      v-model="form.email"
                      required
                      placeholder="0000000" 
                      class="col-sm-auto"
                      style="width: 105%">
          </b-form-input>
        </b-form-group>

        <b-form-group 
                      label="Histórico:"
                      label-for="textarea1"
                          >
          <b-form-textarea 
                      id="textarea1"
                      v-model="text"
                      :rows="3"
                      :max-rows="6">
          </b-form-textarea>
        </b-form-group>

        <b-form-group label="Iniciado:">
          <b-form-radio-group id="btnradios1"
          buttons
          v-model="selectedRadio"
          :options="options2"
          name="radiosBtnDefault" />
        </b-form-group>

        <button-group>
          <b-button type="submit" variant="primary">Ver detalhado</b-button>
        </button-group>

    </b-form>
    </b-col> 
  </b-row>
</b-container>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      form: {
        email: '',
        name: '',
        estado: '',
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
      ],
      selectedRadio: 's',
      options2: [
        { text: 'Sim', value: 's' },
        { text: 'Não', value: 'n' }
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