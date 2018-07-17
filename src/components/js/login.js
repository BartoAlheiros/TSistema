export default {
  name: 'test',
  data () {
    return {
      msg: 'Cadastro.',
      user: {},
      showDismissibleAlert: false,
      selected: 'a',
      options: [
      { value: 'a', text: 'Cliente' },
      { value: 'b', text: 'Técnico' },
      { value: 'c', text: 'Recepção' }
      ],
      html: '<a href="#">Link</a>',
      registros: [{
        usuario: 'usuario1',
        senha: 'senha123'
      },
      {
        usuario: 'usuario2',
        senha: 'senha456'
      },
      {
        usuario: 'usuario3',
        senha: 'senha789'
      }
      ]
    }
  },
  methods: {
    validarLogin () {
      var validou = false;

      for (var i = 0; i < this.registros.length; i++){
        console.log('rodei o for')
        if (this.user.login == this.registros[i].usuario && this.user.password == this.registros[i].senha) {
          alert('Voce conseguiu logar.')
          break;
        } else {
         alert('Login ou senha incorretos')
         break;
        }
      }
    }
  }
}