<script>
  import { Line } from 'vue-chartjs'

  export default {
    name: 'chamadosAtend',
    components: {
      'chart': Line
    },
    extends: Line,
    mounted () {
      this.renderChart({
        type: 'line',
        data: {
          labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
          datasets: [{
            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          },
          legend: {
            display: false
          }
        }
      })
    }
  }
</script>  

<template>
<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Chamados Atendidos</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
              <button class="btn btn-sm btn-outline-secondary">Compartilhar</button>
              <button class="btn btn-sm btn-outline-secondary">Exportar</button>
            </div>
            <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
              <span data-feather="calendar"></span>
              Esta semana
            </button>
          </div>
        </div>

        <canvas class="my-4 w-100" id="myChart" width="900" height="380"><chart></chart></canvas>

        <!--<h2>Chamados</h2>-->
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Cliente</th>
                <th>Prioridade</th>
                <th>Data Abertura</th>
                <th>Prazo</th>
                <th>Equipamento</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alta</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Média</td>
                <td>consectetur</td>
                <td>adipiscing</td>
                <td>elit</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Alta</td>
                <td>nec</td>
                <td>odio</td>
                <td>Praesent</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Média</td>
                <td>Sed</td>
                <td>cursus</td>
                <td>ante</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Alta</td>
                <td>diam</td>
                <td>Sed</td>
                <td>nisi</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Alta</td>
                <td>quis</td>
                <td>sem</td>
                <td>at</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Média</td>
                <td>elementum</td>
                <td>imperdiet</td>
                <td>Duis</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Baixa</td>
                <td>ipsum</td>
                <td>Praesent</td>
                <td>mauris</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Alta</td>
                <td>nec</td>
                <td>tellus</td>
                <td>sed</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Média</td>
                <td>semper</td>
                <td>porta</td>
                <td>Mauris</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Média</td>
                <td>Vestibulum</td>
                <td>lacinia</td>
                <td>arcu</td>
              </tr>
            </tbody>
          </table>
        </div>
</main>
</template>      