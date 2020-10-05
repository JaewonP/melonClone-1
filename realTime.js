const clockTitle = $(".realtime");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const years = date.getFullYear();
    const months = date.getMonth()+1;
    const days = date.getDate();
    
    clockTitle.html(`${years}.${months}.${days} ${
        hours < 10 ? `0${hours}`: hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    } 기준`);
    console.log(`${years}.${months}.${days} ${
        hours < 10 ? `0${hours}`: hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    } 기준`);

}
function init(){
    setInterval(getTime, 1000);
}
init();