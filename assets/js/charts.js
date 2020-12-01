//population data taken from https://www.ris.gov.tw/app/portal/346
var ctx = document.getElementById("chart1").getContext('2d');
var chart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1951","1961","1971","1981","1991","2001","2011","2019"],
        datasets: [{
            label: 'population sum', // Name the series
            data: [7869247, 11149139, 14994823, 18193955, 20605831, 22405568, 23224912, 23603121],
            fill: false,
            borderColor: '#FF8C00', // line color
            backgroundColor: '#FF7F50',
            borderWidth: 1
        }]},
    options: { responsive: true, maintainAspectRatio: false}
});