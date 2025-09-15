


console.log("welcome to spotify");
//Initialize the varibles
let songIndex = 0;
let audioElement = new Audio('images/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressBar');
let beat = document.getElementById('beat');
let songs = [
    {songnames:"bird of a feather",filePath:"images/1.mp3",coverPath:"images/bird.jpg"},
     {songnames:"fuunk do bad",filePath:"images/funk.mp3",coverPath:"images/funk.jpg"},
     {songnames:"Faded",filePath:"images/faded.mp3",coverPath:"images/faded.jpg"},
     {songnames:"bird of a feather",filePath:"images/1.mp3",coverPath:"images/bird.jpg"},
     {songnames:"bird of a feather",filePath:"images/1.mp3",coverPath:"images/bird.jpg"},
     {songnames:"bird of a feather",filePath:"images/1.mp3",coverPath:"images/bird.jpg"},
    
];




//Handle play/pause clicks
let playIcon = masterPlay.querySelector('i');  // Target the <i> inside masterPlay

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        beat.style.opacity = 1;

        playIcon.classList.remove('fa-solid fa-circle-play');
        playIcon.classList.remove('fa-solid fa-pause');
    } else {
        audioElement.pause();
        beat.style.opacity = 0;

        playIcon.classList.remove('fa-solid fa-pause');
        playIcon.classList.add('fa-solid fa-circle-play');
    }
});


    

    


 // audioElement.play();
audioElement.addEventListener('timeupdate',()=>{
   
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value/100*audioElement.duration
})