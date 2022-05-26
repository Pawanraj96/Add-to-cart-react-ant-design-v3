import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { prod } from './productList/product'

const options = {
    chart: {
        spacingTop:30,
        type: 'pie',

    },
    title: {
        text: 'Product visualization',
        align:'center',
        y:-15
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    legend:{
        align:'top',
        layout:'horizontal',
        squareSymbol:true,
        symbolRadius:0,
        verticalAlign:'top',
    },
    
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: prod
    }]
}

function PieChart() {
    
    return (
        <HighchartsReact options={options} Highcharts={Highcharts}/>
    )
}

export default PieChart

// import HighchartsReact from 'highcharts-react-official';
// import React from 'react'
// import Highcharts from 'highcharts'
// import { prod } from './productList/product';
// const options = {
//     chart: {
//         type: 'pie',
//         spacingTop: 30,
//     },
//     title: {
//       text: 'Product visualization',
//       align: 'center',
//       y:-10,
//     },
//     legend: {
//         layout: 'horizontal',
//         squareSymbol: true,
//         symbolRadius: 0,
//         align: 'top',
//         verticalAlign: 'top',
//     },
//     plotOptions: {
//         series: {
//             showInLegend: true,
//             pointPadding: 0.4,
//             borderWidth: 0,
//             dataLabels: {
//                 enabled: false,
//             },
//         }
//     },
//     tooltip: {
//         headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
//         pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}$</b> of total<br/>'
//     },
//     series: [
//         {
//             colorByPoint: true,
//             data: prod
//         }
//     ],
//   };
//   function PieChart() {
//     return <div>
//         <HighchartsReact highcharts={Highcharts} options={options} />
//     </div>
// }
// export default PieChart