const ctx = document.getElementById('myChart').getContext('2d');
const labels = [
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020'
];
const data = {
  labels,
  datasets: [{
    data: [211, 326, 165, 350, 420, 370, 500, 375, 415],
    label:"Minecraft",
    fill: false,
    backgroundColor: [
      '#fff',
    ],
    borderColor: [
      '#6956E5',
      '#F6866A',
      '#FABE7A',
      '#59E6F6',
    ],
    pointBackgroundColor: '#fff',
  },
  {
    data: [245, 465, 265, 150, 220, 570, 100, 475, 215],
    label:"Minecraft",
    fill: false,
    backgroundColor: [
      '#6956E5',
      '#F6866A',
      '#FABE7A',
      '#59E6F6',
    ],
    borderColor: [
      '#6956E5',
      '#F6866A',
      '#FABE7A',
      '#59E6F6',
    ],
    pointBackgroundColor: '#fff',
  },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: function (value){
            return '$' + value + 'm';
          },
        },
      },
    },
  },
};
const myChart = new Chart(ctx, config);


// var Main = document.getElementById('toggle');
// var Icon = document.querySelector('.icon');
// let Aside = document.querySelector('.aside');

// Main.onclick = function(){
//   Aside.classList.toggle('close');
//   Icon.classList.toggle('close');
// }


// const Ctx = document.getElementById('BarChart').getContext('2d');
// const Labels = [
//   '2012',
//   '2013',
//   '2014',
//   '2015',
//   '2016',
//   '2017',
//   '2018',
//   '2019',
//   '2020'
// ];
// const Data = {
//   labels,
//   datasets: [{
//     data: [211, 326, 165, 350, 420, 370, 500, 375, 415],
//     label:"Minecraft",
//     fill: false,
//     backgroundColor: [
//       '#fff',
//     ],
//     borderColor: [
//       '#6956E5',
//       '#F6866A',
//       '#FABE7A',
//       '#59E6F6',
//     ],
//     pointBackgroundColor: '#fff',
//   },
//   {
//     data: [245, 465, 265, 150, 220, 570, 100, 475, 215],
//     label:"Minecraft",
//     fill: false,
//     backgroundColor: [
//       '#6956E5',
//       '#F6866A',
//       '#FABE7A',
//       '#59E6F6',
//     ],
//     borderColor: [
//       '#6956E5',
//       '#F6866A',
//       '#FABE7A',
//       '#59E6F6',
//     ],
//     pointBackgroundColor: '#fff',
//   },
//   ],
// };

// const Config = {
//   type: 'bar',
//   data: data,
//   options: {
//     responsive: true,
//     scales: {
//       y: {
//         ticks: {
//           callback: function (value){
//             return '$' + value + 'm';
//           },
//         },
//       },
//     },
//   },
// };
// const BarChart = new Chart(Ctx, Config);


// const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         // labels: ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2021', 'Feb 2021', 'Mar 2021'],
//         labels: ['a', 'b', 'c', 'd'],
//         datasets: [{
//             label: '# of Votes',
//             data: [1, 5, 3, 10],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 5
//         },
//     ]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });