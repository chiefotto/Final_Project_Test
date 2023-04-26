// async function getData(){

//     const url = 'https://api-nba-v1.p.rapidapi.com/teams';
//     const options = {
//     method: 'GET',
//     headers: {
//         'content-type': 'application/octet-stream',
//         'X-RapidAPI-Key': 'c5c7f5acfbmsh559cf33f7adee0dp192e66jsn118bb5513352',
//         'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function playerData(){
//         const url = 'https://api-nba-v1.p.rapidapi.com/players';
//         const options = {
//         method: 'GET',
//         headers: {
//             'content-type': 'application/octet-stream',
//             'X-RapidAPI-Key': 'c5c7f5acfbmsh559cf33f7adee0dp192e66jsn118bb5513352',
//             'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
        

// }

function injectHTML(list) {
    console.log('fired injectHTML');
    const target = document.querySelector('#team_list');
    target.innerHTML = '';

    var winList = {};
    list.forEach((item) => {
      const str = `<li>${item.team.name}: ${item.win.total}-${item.loss.total}</li>`;
      winList[item.team.name] = item.win.total;

      target.innerHTML += str;
    })

    var values = Object.keys(winList).map(function(key){
        return winList[key];
    });

    target.innerHTML += `<canvas id="piechart" width="400" height="400"></canvas>`;
    const ctx = document.getElementById('piechart');

    new Chart(ctx, {
      type: 'bar',
      data: {
          labels: Object.keys(winList),
            datasets: [{
              label: "Number of Wins",
              data: values,
              backgroundColor: "",
              hoverOffset: 4
            }]
      },
      options: {

      }
    })

}

async function getTeams() {
    const url = 'https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2021';
    const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'c5c7f5acfbmsh559cf33f7adee0dp192e66jsn118bb5513352',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        let result = await response.text();
        result = JSON.parse(result)
        console.table(result.response)
        injectHTML(result.response);
    } catch (error) {
        console.error(error);
    }
}


async function mainEvent(){
    console.log("Start");
    const mainForm = document.querySelector('.main-form');
    const teamForms = document.querySelector('#load-teams');

    
    // getData()

    
    // let teamList = []
    
    // teamForms.addEventListener('load', async (submitEvent) => {
    //     const url = 'https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2021';
    //     const options = {
    //     method: 'GET',
    //     headers: {
    //         'content-stype': 'application/octet-stream',
    //         'X-RapidAPI-Key': 'c5c7f5acfbmsh559cf33f7adee0dp192e66jsn118bb5513352',
    //         'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    //         }
    //     };
    //     try {
    //         const response = await fetch(url, options);
    //         let result = await response.text();
    //         result = JSON.parse(result)
    //         console.table(result.response)
    //         injectHTML(result.response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // })
    
}

document.addEventListener('DOMContentLoaded', async => mainEvent());

