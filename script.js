// console.log("welcome to Spotify");

//initialize to variable
let songindex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songname: "Itti Si Hansi Itti Si Khushi ", songpath: "assets/Itti Si Hansi Itti Si Khushi Mp3 Song Download(atozlyrics.in).mp3",coverpath: 'assets/songimg.webp'},
    {songname: "Itti Si Hansi Itti Si Khushi ", songpath: "assets/Itti Si Hansi Itti Si Khushi Mp3 Song Download(atozlyrics.in).mp3",coverpath: 'assets/songimg.webp'},
    {songname: "Itti Si Hansi Itti Si Khushi ", songpath: "assets/Itti Si Hansi Itti Si Khushi Mp3 Song Download(atozlyrics.in).mp3",coverpath: 'assets/songimg.webp'},
    {songname: "Itti Si Hansi Itti Si Khushi ", songpath: "assets/Itti Si Hansi Itti Si Khushi Mp3 Song Download(atozlyrics.in).mp3",coverpath: 'assets/songimg.webp'}
];

songItem.forEach((element, i)=>{
    let audioElement2 = new Audio(songs[i].songpath);
    // console.log(element, i,audioElement2.duration);
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songname;
    // element.getElementsByClassName('timestamp')[0].innerText=audioElement2.duration;
})

let audioElement = new Audio('assets/Itti Si Hansi Itti Si Khushi Mp3 Song Download(atozlyrics.in).mp3');
// audioElement.play();

// handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    // console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
    audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.add('fa-play');
        element.classList.add('fa-pause');
    })

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllplays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
    })

    
})