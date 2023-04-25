async function getData(){

        const url = 'https://api-nba-v1.p.rapidapi.com/teams';
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
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

async function playerData(){
        const url = 'https://api-nba-v1.p.rapidapi.com/players';
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
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
        

}






async function mainEvent(){
    console.log("Start");
    getData()
    const mainForm = document.querySelector('.main-form');
    const teamForms = document.querySelector('#load-teams');
    let teamList = []
    teamForms.addEventListener('click,')
    
}

document.addEventListener('DOMContentLoaded', async => mainEvent());

