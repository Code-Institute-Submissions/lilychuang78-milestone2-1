//POPULATION SECTION chart1 
//population data taken from Department of Household Registration, Taiwan https://www.ris.gov.tw/app/portal/346
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
    options: {
        responsive: true,
        maintainAspectRatio: false, //the canvas is resized but becomes blurry
        scales: {
            yAxes: [{
                ticks: {
                    callback:function(value, index, values){
                        return value/1e6+' million'
                    }
                }
            }]
        }
    }
});


//BUSINESS SECTION chart2
//survey data taken from InterNations https://www.internations.org/press/press-release/expat-insider-2019-survey-reveals-the-best-and-worst-destinations-to-live-and-work-in-2019-39881
var data = {
  labels: [
    "Affordable healthcare",
    "Quality of medical care",
    "Personal safety",
    "Easy to settle down",
    "Friendly locals",
    "Career prospects",
    "Learning local languages"
  ],
  datasets: [
    {
      label: "Taiwan",
      backgroundColor: "lightgreen",
      borderColor: "green",
      borderWidth: 1,
      data: [89, 92, 96, 78, 88, 65, 52]
    },
    {
      label: "Global",
      backgroundColor: "pink",
      borderColor: "red",
      borderWidth: 1,
      data: [55, 65, 81, 59, 68, 55, 45]

    }
  ]
};

var options = {
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: true,
    text: "2019 Expat Insider Survey "
  }
}

var ctx = document.getElementById("chart2").getContext("2d");
window.myBar = new Chart(ctx, {
type: "bar",
option: options,
data: data,
});