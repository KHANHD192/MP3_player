
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playlist = $('.playlist');
const cdThumb = $('.cd-thumb');
const playButton = $(' .btn-toggle-play');
const audio = $('#audio');
const header = $('header');
const nameSong = $('header h2');
const next = $('.btn-next');
const pre = $('.btn-prev');
const repeatButton = $('.btn-repeat');
const progress = $('.progress');
let playing = false;
const app  = {
    currentIndex : 0,
    songs : [  
        {
            name :'Miễn là cùng nhau',
            singer :"Sean",
            path : './asset/music/song4.mp3',
            image :'./asset/image/song0.jpg',
            
        },
        {
            name :'Rồi ta sẽ ngắm pháo hoa cùng nhau',
            singer :"JUN DD",
            path : './asset/music/song3.mp3',
            image :'./asset/image/song1.jpg',
            
        },
        {
            name :'Hè Sang',
            singer :"FBBOIZ",
            path : './asset/music/song2.mp3',
            image :'./asset/image/song2.jpg',
           
        },
        {
            name :'Cầu Vồng Khuyết',
            singer :"CARA, Hoàng Duyên",
            path : './asset/music/song1.mp3',
            image :'./asset/image/song3.jpg',
            
        },
   ],
   render : function(){

       function creat(song){
        let template = `<div data-id =${song.id} class="item">
        <div class="item__avatar">
            <img src="./asset/image/Anh-avatar-bua-cute-dep-390x390.jpg" aslt="">
        </div>
        <div class="item_content">
            <span class="name">${song.name}</span>
            <span class="singer">${song.singer} </span>
        </div>
     </div>` 
      playlist.insertAdjacentHTML('beforeend',template);
       }
       this.songs.forEach(item =>{
          creat(item);
       })

    },
    loadCurrentSong : function(){
      audio.src= this.songs[this.currentIndex].path;
      nameSong.innerText = this.songs[this.currentIndex].name;
    },
    playing : function(){
        this.loadCurrentSong();
        playButton.addEventListener('click',function(){   
            if(!playing){
                audio.play();
                playing=true;
            }else {
                audio.pause();
                playing = false;
            }
       
      
    })

   },
   handleEvent : function(){
  //cd roate 
  const cd_rotate = [
    { transform: "rotate(0)" },
    { transform: "rotate(360deg)" },
  ];
  
  const Timming = {
    duration: 2000,
    iterations: Infinity,
  };
  // creat item of cdThumb animation rotate!
  let cd ;
  cd = cdThumb.animate(cd_rotate,Timming);
  cd.pause();
  function changeIconPlay(){
    document.querySelector('.icon-play').classList.remove('unactive');
    document.querySelector('.icon-pause').classList.add('unactive');
  }
  //handle next and pre song 
   function nextSong() {
    if(app.currentIndex < app.songs.length - 1){
        app.currentIndex++;  
        cd.pause();
        playing = false;
        changeIconPlay();
        app.loadCurrentSong(); 
        
        setTimeout(function(){
          audio.play();
        },1000);
     }
   }

    function preSong(){
        if(app.currentIndex > 0 ){
            app.currentIndex--;  
            cd.pause();
            playing = false;
            changeIconPlay();
            app.loadCurrentSong(); 
      
            setTimeout(function(){
              audio.play();
            },1000);
         }
    }
  pre.addEventListener('click',preSong);
  next.addEventListener('click',nextSong);
    // handle play-pause
    audio.addEventListener('play',function(){ 
        document.querySelector('.icon-play').classList.add('unactive');
        document.querySelector('.icon-pause').classList.remove('unactive');
           cd.play();
           fast_forward();
        
       })
       audio.addEventListener('pause',function(){
          document.querySelector('.icon-play').classList.remove('unactive');
          document.querySelector('.icon-pause').classList.add('unactive');
          cd.pause();
        
       })

    //handle ended 
    audio.addEventListener('ended',function(){
        nextSong();
    })
    //handle fast forward
    function fast_forward(){
        setInterval(function(){
            let progressPercent = (audio.currentTime / audio.duration);
           progress.value = progressPercent  * 100;
           
        },1000);
    }
    //handle drag time 
    progress.addEventListener('change',handleDragBar);
    function handleDragBar(e){
       audio.currentTime = (e.target.value / 100) * audio.duration;
    }
    // handle select playlist
     playlist.addEventListener('click',handleSelector);
     
     function handleSelector(e){
         const listItem  = playlist.children ;
         let index = [...listItem].findIndex((item)=>{
            return item.contains(e.target);
         });
          //handl change color 
         listItem[index].classList.add('active');
         if(app.currentIndex !== index){
            listItem[app.currentIndex].classList.remove('active');
         }
         //handle change song !
         app.currentIndex=index; 
         cd.pause();
         playing = false;
         changeIconPlay();
         app.loadCurrentSong(); 
         
         setTimeout(function(){
           audio.play();
         },1000);     
         
    
      }
        
     
      
     
},
   start : function(){
      app.render();
      app.handleEvent();
      app.playing();
   }
}
app.start();
