var CHART = $('#barChart')

let barChart = new Chart(CHART, {
  type: 'bar',
  data: {
    labels: [
      "HTML5",
      "CSS3",
      "Javascript",
      "Jquery",
      "Bootstrap",
      "Materialize",
    ],
    datasets: [
      {
        label: "Skills %",
        backgroundColor: [
          'rgb(222, 222, 222)',
          'rgba(105, 105, 105, 1)',
          'rgb(222, 222, 222)',
          'rgba(105, 105, 105, 1)',
          'rgb(222, 222, 222)',
          'rgba(105, 105, 105, 1)',
        ],
        borderColor: [
          'rgba(31, 30, 30, 1)',
          'rgba(31, 30, 30, 1)',
          'rgba(31, 30, 30, 1)',
          'rgba(31, 30, 30, 1)',
          'rgba(31, 30, 30, 1)',
          'rgba(31, 30, 30, 1)',
        ],
        borderWidth: 2,
        data: [
          55,
          59,
          40,
          40,
          45,
          50,
          0
        ]
      }
    ]
  }

})
