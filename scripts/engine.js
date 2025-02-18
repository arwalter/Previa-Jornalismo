logoJornais = new Map();
//logo BDDF
logoJornais.set('logoBDDF', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAAyCAYAAAAtBJe4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAlJREFUeNrsm89PE0EUx6fEeIGY4skElBrtAS/AATx4oCQkHiV4Nen2DyCRm9FD6UHjrRgSryzhjng0IaEcPCAH6kWM1VB/kOAFG8ELF53vbrfdTre7M7Ozhdr5JsOPMrQzn33vzXuzO4RoKVdM6bslzTj9Olpt8Q6Yf4W2otVKRuX8QE2aAJimbYa2RAcbWJm2ddpWKOBi+6HaFgmI2Q4H6Qc4Z0GWsOCYBFDjP4bpDbdkmNFATZqAuExbqgvXngJtGQq3rA5q0pypAo2T7lWlCnY9PFTb3Zd1olRTJigcxDRQ9WBjGqh6sDGf3HNXcwvUmFdOG2uRg+52ScqkIuUaY3PZHo+OWQ2UW4kqLx9L1W6vJAywlprXfKSU97ZUu2La13ykdd2puC4wsVSJ4pcuktHhy3Z9t30Y2H9m+lqtv4iKe0ekcnxqf/99GhwAB/pIYrBPfDX6cULKBydB3bJWmsVY6q8wZagxe5Pcm75KUhNXLKgN9R2dcOHdIVlZ+0LWN741/e/fT+nQF3Jx5QOZf7rT8iLnH49bY5Qq/OnYpx68CS5jS0Z/HWrSxCbJpswHwsryT8YtK+C1rvlnOw0WrAIqZK59JplHb5uAbq7elfIEQajQFAVbcBaqlMyHLT+/Q169nOIGCmFymOTD9C3lQQ2WyFojLDQMUMfTOJVyx9RJGaCy7mRNllr30GBvk8vCjXNL77kmAiuEp2AsjhCCYLFuT6rFRhoXYck8cV5Sk+6USijZX5gbDQXUEazVPWno9cZ3bstAPwB0Q2Tjufv3F+ZelEBrHIWhwpWycyPKRgErQ8wKo68Hf/guwvEpiVgJNqXidluVgiUhZSETbcjQaXxNz97g6ru1/ZMsLMnd/xOCigUJKZNqIQQg1WJDgWrhAgqNf0nuc3pEJx/VZAVW2HMvIUsdGe6PdDCIrVYoiEi4cMWPR9zu3xaoMiWeyGLDJu6qhaLDnSlEJcf9y53sbkMDvXw1/MFJ1EMpnzuoIpWZE4vZKuqMY3PZ7f5bPKVqlANGvN7fvB/6fVA8nKG23FALhGPrD8G7VQbAswhEkY6xGyrtiJl+a20daskokKSJm1fxoNXZAYifARkgRUo/Z68VgGGduEgqPMBv669NqlgcSeN+Ku7xG2eRUyKWArTobhIWHjS/TerU7bp38G5myzoKhdq0SY26Vd9OkVftdkq9orJfKGg2krHU9UQgW6bOaz5ydUXr2t++d72oGYmtkeyjP14bKrlOr7DanOzn2Bf1A2rh5PmAmvfWn90xo5n5KtPqFIt+6FceqNnqj/rxdMVA+aDaYPVBCqUHKRorLn3kh0P6cBpPyhTZ4bRGsPoYpXKozTmtPvCrFGqzBXf90XStCPRPgAEA6MedIyi2b18AAAAASUVORK5CYII=');

//logo DF1
logoJornais.set('logoDF1', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAAyCAYAAAAtBJe4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9VJREFUeNrsm01oE0EUx2eLeio19WJBkRSbQ7w0ObQ9eOhGBE9i2pugZHMViuYmekhzULy1pdBrNni2jXgqCE0OHmqFxFPAVAyi0F5s0J686L7ZzWaz2dmP2dk0H/OHaUl2SWZ++96b9yYzCHExl8D00yJySPkb01poAMbfVFoVt7rU7B+oERkAppSWVFp4gA2sobSi0goK4GrvoaoWCRCzAw7SDnAOQ6awYIECqDTEMK3h1iU5GKgRGSDmlSaO4NxTUlpagdtgBzUiJzWgITS6ampgi/6hqu6e54mSrrRTOBA4UPZgBQ6UPVjBJvescG6OilvltAIhB62MSMrEIuWKm3PZMYsbsxyoa4U1XjaWyt2eSRgwW+oa50OlNWtLVSumb5wPtaZbFdc5Uyzt0pPUDRSauEBf3308QqX9I+fgdGUciQtT+L9XFd9/x30U56f8zTo/T5G8fYhWV2LEazbK4jTLZKknVmXovy8p/1Ok0qGlR3uoWvtl7TvP5/DDo1Vu8zPKrszS15+//yJ55xBtyDXcV9KYof+Jh7v4fssyti5NtmNqRBaDrOvB+vZe30Gx6KWua/lXN30B9VXMK3DggUzfeoMyLw4wUDtB/9eezZEuhzSO+kQlBj0AcE+wSKPA3aXlGd+ffXHiPFVYApirm1WS5VnKob+iMaYuunUz6IQXC93ZSugWao555tcQszIvDzwNEuJfavm6Z6jl/WP8PfCwpaUZ7P5evpegRaOlht0+Xa+xdKNQ63IhvQcLlzuL6acfPA8MYinN5DYbncSh5+TTfexBVqGJshjQLTWwCsocp/xkEiyVvH0tqAqrI6XqiUgZAKjy9i5q/nFnqYXtr04pzpmp51Dt3NuLC0JM7FeN8ULoDCzVODkxmB0dQ4Nb93fKKfsaauLBLvNCgAQkfu/dUFhqy/0bQVZTHa+vjg+z5zcChwoTz+NU1PXsPyxQW+5fJpWqLBZUjPGZdVxuVUV9orLRUktuXNfv4GHRgrWgvOylHHLjUhtqXYIXzaBmWPgcWDKzc31aC4b1iF6FFPgeWJsgDUHj2DH7w3YWyXwnWJcf94KOwCIyCUh5/thXrIWHAVkDrB758azGj1PbMbtYpNa3A/GfU9hJ/zmlXVGpb5Q4G7o52Lgj0FymZjgfKmXItb/62/U6Z+RJ6+atP1YLKrkgK6whTPZz5jf5BjV/stygZr30p96Y5sxslSadYuGbfumByqSLfHs6Y6DuoKpg+UEKpgcpOisufuTHhfjhNDcpU2CH0zrB8mOUzKF257T8wC9TqN0WPPJH07kC0H8BBgAM647rZ8jzuQAAAABJRU5ErkJggg==');

//logo GE
logoJornais.set('logoGE', 'data:image/png;base64,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');

//logo DF2
logoJornais.set('logoDF2', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAAyCAYAAAAtBJe4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABENJREFUeNrsm01ME0EUx6cEOSlWL5BoTI32gBfggBw8UBITjla8arq9mhDlZvRQOGi8FdPEK0v0rBhPJCQtBw/AgXqRRExo/EjwYhrl5EX3v7tTdmdnv2anQOn8kyEpbWdnf/Pem/emO4QoSVdKam9ZPW38HbFbugPuv2m0utl2tObxgZrVAbBgtLzRMh1sYA2jLRttyQBcP3yolkUCYqnDQQYBnjchC1hwSgCodoJh8uHuaHp7oGZ1QFw0Wq4L156a0YoG3IY8qFk9bwNNk+5V0wa7nByq5e6LKlFqqRgWDlIKqHywKQVUPthUQO65pbiFapSX06Z8ctCtLkmZZKRco2wu28P5YEkBjayMzSvAUpXbSwkDrKWWFR8hlfmWalVMu4qPsC7TiquXiaUePSxcI+n+PuEr1bd/keXVr+HB6cJpkr95SehatY090vz91/y+iBaWPpnfh0aGznv6wXu4Bu4lQCUzzWKg5tlP4QbLT8aSL5E/9snt+1XfQeEamDxRTWwMkNz1wdiT/WJpm9TW91pA6VjxujQz7Jlg/c0XUnz0wa/LPIXaY7t+jlfXY9akLJGGFVZfTXH7W3x+IxFQUb1b/WZCAkTWKmG5k/dWXLAhbfoqmZsZ8esybXNsLVQ5roV935d2Ezyrz40PmgM9Cp3tP2VOZvX1lNnevpx0jQWWPPts0/O9wvSVoG5zTvef4G7L/HHP1HzlI5mr1GNZKAZLLRQuCrjUAliXjds/5Ow/jnjegVg6PHSOzD7dbLk7PIm9p6BI5LTUjB8UdkGIG0sRt/xCysT4gOu9uEApiJAbTQSbDQ8RioFgqCGrXWSwHV0yxZuwDLv6H/mg/n0uRPocwgc8QMSy4xiBaIrWc8xmOvKix4YOWaLxFHqgDR1PqJ0kFCm0UEFsjZv7UvVGuRBNgkVSrDgxFTGczTj8tLb+U7rb08QeiymSf1GFQkUldFgL1eit90dmpbhPxGoYENKoJKU5df9GJ8VU2YKF0kyn/HgsSSXp2lBpBOWqmYtiYNJn+jxuJCNNkykk+Gg0jias8FxQ1/xK1d3qHWk3QHeTZAqTJGpZbCkKl2cLHBiGs/+Q8a85odYIZ+tP1oYKHYwzXZG5MSIyTowHbu+EZOa9FeLZn8BmEBVbIbJ2cxBTdzS8aLajoqKLFXZ92uH6ABG3fDbzUcNC444H18EOlt882Rxdqz8eZ9F4yXCSlRADwZ6lX6JNq5Yk5ezk3RXTouLklTSOhhqEkUZinBE2qVuPA6mfU+Sp9XPKQUVl/aOm2Ig5pPOJQLZMnVV8xLYM/Gt/67frBcUolhbYR394Gyrz7aywTpgaNi+X1ANqycR9QI2/9Wd9sKiYBW8Z+J1iUQ/9igPV/d5Uj6dLBhoNqgVWHaSQepDCXXGpIz8RpA6nRUmZ2nY4zQ1WHaOUDtWb06oDv1Khei2464+mK7VB/wUYACRX0Jr4ZZwbAAAAAElFTkSuQmCC');

//logo GCO
logoJornais.set('logoGCO', 'data:image/jpeg;base64,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');

//logo NIC
logoJornais.set('logoNIC', '');

//logo OUTROS
logoJornais.set('logoOUTROS', '');

let date = "";
let startEndTime = "";
let audReceived = "";
let audDelivered = "";
let glo = 0;
let sglo = 0;
let rec = 0;
let srec = 0;
let sbt = 0;
let ssbt = 0;
let ban = 0;
let sban = 0;
let rtv = 0;
let srtv = 0;
let nic = 0;
let snic = 0;
let tle = 0;
let stle = 0;
let time = [];
let audGLO = [];
let audREC = [];
let audSBT = [];
let audBAN = [];
let audRTV = [];
let audNIC = [];
let audTLE = [];
let maxTLE = [];
let maxInterval = 0;
let intervals = [];

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

let jornal = localStorage.getItem('jornal');
let csv = localStorage.getItem('file');
let intervalsArray = JSON.parse(localStorage.getItem('intervals'));
let history = JSON.parse(localStorage.getItem('history'));
let pgm = localStorage.getItem('pgm')

if(jornal != "OUTROS"){
document.getElementById('imgJornal').src = logoJornais.get('logo' + jornal);
}else{
    document.getElementById('logoJornal').innerHTML = `
    <div class="custom_pgm"><b>${pgm}</b></div>`;
}

let allTextLines = csv.split('\n');
for (let row = allTextLines.length - 2; row > 8; row--) { 
    const cols = allTextLines[row].split(';');
    time.push(cols[0]);
    audGLO.push(cols[2] == "-" ? "0" : cols[2].replace(",", "."));
    audREC.push(cols[3] == "-" ? "0" : cols[3].replace(",", "."));
    audSBT.push(cols[4] == "-" ? "0" : cols[4].replace(",", "."));
    audBAN.push(cols[5] == "-" ? "0" : cols[5].replace(",", "."));
    audRTV.push(cols[6] == "-" ? "0" : cols[6].replace(",", "."));
    audNIC.push(cols[7] == "-" ? "0" : cols[7].replace(",", "."));
    audTLE.push(cols[8] == "-" ? "0" : cols[8].replace(",", "."));
    maxTLE.push(parseFloat(cols[8] == "-" ? "0" : cols[8].replace(",", ".")));

}
maxInterval = Math.max(...maxTLE) + 1;
flag = 0;//flag 0 não pinta o gráfico de intervalos

for (let index = 0; index < time.length; index++) {
    if(intervalsArray.includes(time[index])){
        if(flag == 0){
            flag = 1;
            intervals.push(flag);
            continue;
        }else{
            intervals.push(flag);
            flag = 0;
            continue;
        }
    }
    intervals.push(flag);
}

intervals.forEach((element, index) => {
    if(element !== 0){
        intervals[index] = maxInterval;
    }
});

date = allTextLines[6].substr(0, 10).replace(/-/g, '/');
startEndTime = allTextLines[6].substr(11, 13);
audReceived = parseFloat(allTextLines[allTextLines.length - 2].split(';')[2].replace(',', '.')).toFixed(1);
audDelivered = parseFloat(allTextLines[9].split(';')[2].replace(',', '.')).toFixed(1);

tle = parseFloat(allTextLines[7].split(';')[8].replace(',', '.')).toFixed(1);
glo = allTextLines[7].split(';')[2] == "-" ? 0 : parseFloat(allTextLines[7].split(';')[2].replace(',', '.')).toFixed(1);
sglo = (glo * 100 / tle).toFixed(1);
rec = allTextLines[7].split(';')[3] == "-" ? 0 : parseFloat(allTextLines[7].split(';')[3].replace(',', '.')).toFixed(1);
srec = (rec * 100 / tle).toFixed(1);
sbt = allTextLines[7].split(';')[4] == "-" ? 0 : parseFloat(allTextLines[7].split(';')[4].replace(',', '.')).toFixed(1);
ssbt = (sbt * 100 / tle).toFixed(1);
ban = allTextLines[7].split(';')[5] == "-" ? 0 : parseFloat(allTextLines[7].split(';')[5].replace(',', '.')).toFixed(1);
sban = (ban * 100 / tle).toFixed(1);
rtv = allTextLines[7].split(';')[6] == "-" ? 0 : parseFloat(allTextLines[7].split(';')[6].replace(',', '.')).toFixed(1);
srtv = (rtv * 100 / tle).toFixed(1);
nic = allTextLines[7].split(';')[7] == "-" ? 0 : parseFloat(allTextLines[7].split(';')[7].replace(',', '.')).toFixed(1);
snic = (nic * 100 / tle).toFixed(1);

document.getElementById("date").innerText = date;
document.getElementById("startEndTime").innerText = startEndTime;
document.getElementById("audReceived").innerText = audReceived;
document.getElementById("audDelivered").innerText = audDelivered;
if(history){
    document.querySelector('.hi').innerHTML = `
    <div id="history" style="${history.haud >= 0 ? 'color:rgb(0, 176, 80)':'color:rgb(247, 33, 84)'};font-weight: 600;"></div>
    <div style="color: rgb(153, 153, 153);font-size: 11px;width:-webkit-fill-available">
    <span>Média Histórica</span>
    </div>`
    document.getElementById("history").innerHTML = `${history.haud}<i style="font-size:10px">pts </i>${history.hsha}<i style="font-size:10px">%</i> `;
}
document.getElementById("tle").innerText = tle;
document.getElementById("glo").innerText = glo == 0 ? "-" : glo;
document.getElementById("sglo").innerText = sglo == 0 ? "-" : sglo  + "%";
document.getElementById("rec").innerText = rec == 0 ? "-" : rec;
document.getElementById("srec").innerText = srec == 0 ? "-" : srec + "%";
document.getElementById("sbt").innerText = sbt == 0 ? "-" : sbt;
document.getElementById("ssbt").innerText = ssbt == 0 ? "-" : ssbt + "%";
document.getElementById("ban").innerText = ban == 0 ? "-" : ban;
document.getElementById("sban").innerText = sban == 0 ? "-" : sban + "%";
document.getElementById("rtv").innerText = rtv == 0 ? "-" : rtv;
document.getElementById("srtv").innerText = srtv == 0 ? "-" : srtv + "%";
document.getElementById("nic").innerText = nic == 0 ? "-" : nic;
document.getElementById("snic").innerText = snic == 0 ? "-" : snic + "%";

var ctx = document.getElementById("chart").getContext('2d');
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.point.radius = 0;
Chart.defaults.global.elements.point.hitRadius = 10;
Chart.defaults.global.elements.line.tension = 0;



var chartGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: time,
        datasets: [{
            label: 'GLO',
            datalabels: {
                formatter: function (value, context) {
                    return parseFloat(value).toFixed(1);
                },
                display: function (context) {
                    return (context.dataIndex % 15 == 0 && context.dataset.data[context.dataIndex] != '0' ? 'auto' : false);
                },
                borderRadius: 5,
                backgroundColor: '#0000ff44',
                color: 'blue'

            },
            data: audGLO,
            borderWidth: 3,
            borderColor: '#0025a0',
            backgroundColor: 'transparent',
            color: '#0025a0',
            type:'line'
        },
        {
            label: 'REC',
            datalabels: {
                formatter: function (value, context) {
                    return parseFloat(value).toFixed(1);
                },
                display: function (context) {
                    return (context.dataIndex % 17 == 0 && context.dataset.data[context.dataIndex] != '0') ? 'auto' : false;
                },
                color: '#d65142'
            },
            data: audREC,
            borderWidth: 3,
            borderColor: '#d65142',
            backgroundColor: 'transparent',
            type: 'line'
        },
        {
            label: 'SBT',
            datalabels: {
                formatter: function (value, context) {
                    return parseFloat(value).toFixed(1);
                },
                display: function (context) {
                    return (context.dataIndex % 18 == 0 && context.dataset.data[context.dataIndex] != '0') ? 'auto' : false;
                },
                color: '#5eb63e'
            },

            data: audSBT,
            borderWidth: 3,
            borderColor: '#5eb63e',
            backgroundColor: 'transparent',
            type:'line'
        },
        {
            label: 'BAND',
            datalabels: {
                formatter: function (value, context) {
                    return parseFloat(value).toFixed(1);
                },
                display: function (context) {
                    return (context.dataIndex % 19 == 0 && context.dataset.data[context.dataIndex] != '0') ? 'auto' : false;
                },
                color: '#d743bf'
            },

            data: audBAN,
            borderWidth: 3,
            borderColor: '#d743bf',
            backgroundColor: 'transparent',
            type:'line'
        },
        {
            label: 'REDETV',
            datalabels: {
                formatter: function (value, context) {
                    return parseFloat(value).toFixed(1);
                },
                display: function (context) {
                    return (context.dataIndex % 20 == 0 && context.dataset.data[context.dataIndex]) != '0' ? 'auto' : false;
                },
                color: '#ec7c32'
            },

            data: audRTV,
            borderWidth: 3,
            borderColor: '#ec7c32',
            backgroundColor: 'transparent',
            type:'line'
        },
        {
            label: 'NIC',
            datalabels: {
                formatter: function (value, context) {
                    return parseFloat(value).toFixed(1);
                },
                display: function (context) {
                    return (context.dataIndex % 20 == 0 && context.dataset.data[context.dataIndex]) != '0' ? 'auto' : false;
                },
                color: '#833b0c'
            },

            data: audNIC,
            borderWidth: 3,
            borderColor: '#833b0c',
            backgroundColor: 'transparent',
            type:'line'
        },
        {
            label: 'TLE',
            datalabels: {
                formatter: function (value, context) {
                    return parseFloat(value).toFixed(1);
                },
                display: function (context) {
                    return context.dataIndex % 20 == 0 && context.dataset.data[context.dataIndex] != '0';
                },
                color: '#a9a9a9'
            },

            data: audTLE,
            borderWidth: 3,
            borderColor: '#a9a9a9',
            backgroundColor: 'transparent',
            type:'line'
        },
        {
            label: 'BREAK',
            datalabels: {
                formatter: function (value, context) {
                    return parseFloat(value).toFixed(1);
                },
                display: function (context) {
                    return context.dataIndex % 20 == 0 && context.dataset.data[context.dataIndex] != '0';
                },
                color: '#999999'
            },

            data: intervals,
            borderColor: '#999999',
            backgroundColor: 'rgba(10,10,10,0.03)'
        }
        ]
    },
    options: {

        layout: {
            padding: {
                top: 30,
                left: 15
            }
        },
        plugins: {
            datalabels: {
                color: '#000000',
                align: 'top',
                display: 'auto',
                font: { weight: 'bold' }
            }
        },
        tooltips: {
            titleAlign: 'center',
            xPadding: 15,
            callbacks: {
                labelColor: function (tooltipItem, chart) {
                    var color = chart.data.datasets[tooltipItem.datasetIndex].borderColor;
                    return {
                        borderColor: color,
                        backgroundColor: color,
                        multiKeyBackground: color
                    };
                }
            },
            mode: 'index',
            // displayColors: true,
            position: 'nearest'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    // Include a dollar sign in the ticks
                    callback: function (value, index, values) {
                        return value.endsWith("0") ? value : "";
                    }
                },
                 categoryPercentage: 1,
                 barPercentage: 1
            }],
            yAxes: [{
                display: false
            }]
        }
    }
});

function copyImageToClipboard() {
    const downloadIcon = document.querySelector('.download');
    downloadIcon.classList.toggle('hidden');
    html2canvas(document.body).then(canvas => {
        let fileName = `Prévia ${jornal} ${date.split('/').join('-')}`;
        const link = document.createElement('a');
        link.download = fileName + '.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        downloadIcon.classList.toggle('hidden');
    });
}






