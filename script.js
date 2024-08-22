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


let s = Array.from(document.getElementsByClassName('songName'));
s.forEach((element,idx)=>{
        element.innerText = `${songs[idx].songName}`;
    })

let c = Array.from(document.getElementsByClassName('coverImg'));
    c.forEach((element,idx)=>{
            element.src = `${songs[idx].coverPath}`;
        })

let d = Array.from(document.getElementsByClassName('coverImg'));
        c.forEach((element,idx)=>{
                element.src = `${songs[idx].coverPath}`;
            })
    

let songBannerName = document.getElementById('songInfo');


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

const makeAllPlays =()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
     element.classList.add('fa-circle-play');
})
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src = `music${songIndex}.mp3`;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
           songBannerName.innerText=`${songs[songIndex].songName}`;
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex==4)
    {
        songIndex=1;
    }
    else
    {
        songIndex++;
    }
    audioElement.src = `music${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    songBannerName.innerText=`${songs[songIndex].songName}`;
})

document.getElementById('back').addEventListener('click',()=>{
    if(songIndex==1)
    {
        songIndex=4;
    }
    else
    {
        songIndex--;
    }
    audioElement.src = `music${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
        songBannerName.innerText=`${songs[songIndex].songName}`;
})