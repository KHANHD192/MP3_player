
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playlist = $('.playlist');
const cdThumb = $('.cd-thumb');
const playButton = $('.icon-play');
const audio = $('#audio');
let playing = false;
const app  = {
    currentIndex : 0,
    songs : [
        {
            name :'Cầu Vồng Khuyết',
            singer :"CARA, Hoàng Duyên",
            path : './asset/music/song1.mp3',
        },
        {
            name :'Hè Sang',
            singer :"FBBOIZ",
            path : './asset/music/song2.mp3',
        },
        {
            name :'Rồi ta sẽ ngắm pháo hoa cùng nhau',
            singer :"JUN DD",
            path : './asset/music/song3.mp3',
        },
        {
            name :'Miễn là cùng nhau',
            singer :"Sean",
            path : './asset/music/song4.mp3',
        },
   ],
   render : function(){

       function creat(song){
        let template = `<div class="item">
        <div class="item__avatar">
            <img src="./asset/image/Anh-avatar-bua-cute-dep-390x390.jpg" aslt="">
        </div>
        <div class="item_content">
            <span class="name">${song.name}</span>
            <span class="singer">${song.singer} </span>
        </div>
     </div>` 
      playlist.insertAdjacentHTML('afterbegin',template);
       }
       this.songs.forEach(item =>{
          creat(item);
       })

    },
    loadCurrentSong : function(){
        audio.src = './asset/music/song1.mp3';
        
    },
    playing : function(){
        playButton.addEventListener('click',function(){   
            if(!playing){
                console.log('working');
                audio.play();
                playing=true;
            }else {
                audio.pause();
                playing = false;
            }
       
      
    })

   },
   handleEvent : function(){
     audio.addEventListener('play',function(){
        document.querySelector('.icon-pause .unactive').classList.remove('unactive');
        playButton.classList.add('unactive');
     })
   },
   start : function(){
      app.render();
    //   app.handleEvent();
      app.playing();
   }
}
app.start();
