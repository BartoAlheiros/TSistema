import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Sobre from '@/components/Sobre'
import Cadastro from '@/components/Cadastro'
import PainelAdmin from '@/components/PainelAdmin'
import PainelAdminContent from '@/components/PainelAdminContent'
import ChamadosAtend from '@/components/ChamadosAtend'
import OS from '@/components/OS'

Vue.use(Router)
Vue.use(Sobre)
Vue.use(Cadastro)
Vue.use(Login)
Vue.use(PainelAdmin)
Vue.use(PainelAdminContent)
Vue.use(ChamadosAtend)
Vue.use(OS)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/painelAdmin',
      component: PainelAdmin,
      children: [{
        path: '/content',
        name: 'PainelAdminContent',
        component: PainelAdminContent
      },
      {
        path: '/chamados',
        name: 'ChamadosAtend',
        component: ChamadosAtend},
      {
        path: '/os',
        name: 'OS',
        component: OS
      }]
    }
  ]
})
