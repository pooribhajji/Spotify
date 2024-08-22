let audioElement = new Audio('music1.mp3');
let songIndex=0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')

let songs = [
    
        {songName:'Blank Space',songPath:"music1.mp3",coverPath:"cover.jpg"},
        {songName:'1984',songPath:"music2.mp3",coverPath:"cover2.jpg"},
        {songName:'1989',songPath:"music3.mp3",coverPath:"cover3.jpg"},
        {songName:'Love Story',songPath:"music4.mp3",coverPath:"cover4.jpg"},
];

let songItems = Array.from(document.getElementsByClassName('songItem'));
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
       {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
       } 
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }   

})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

songItems.forEach((element,idx)=> {
    console.log(element,idx);
    element.getElementsByTagName("img")[0].src=songs[idx].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[idx].songName;
});


const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add("fa-circle-play");
        element.classList.remove("fa-circle-pause");
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
          audioElement.play();
          masterPlay.classList.add("fa-circle-pause");
          masterPlay.classList.remove("fa-circle-play");
    })
})