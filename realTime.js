
function getTime(){
    const clockContainer = document.querySelector(".chart");
    
    const clockTitle = clockContainer.querySelector(".realtime");
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const years = date.getFullYear();
    const months = date.getMonth()+1;
    const days = date.getDate();
    const time =`${years}.${months}.${days} ${
        hours < 10 ? `0${hours}`: hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    } 기준`; 
    
    clockTitle.innerHTML = time;
    console.log(time);

}
