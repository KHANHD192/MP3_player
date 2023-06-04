
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playlist = $('.playlist');
const cd = $('.cd-thumb');
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
       // them playlist
    //    const htmls = this.songs.map(song =>{
    //     return ` <div class="item">
    //     <div class="item__avatar">
    //         <img src="./asset/image/Anh-avatar-bua-cute-dep-390x390.jpg" aslt="">
    //     </div>
    //     <div class="item_content">
    //         <span class="name">${song.name}</span>
    //         <span class="singer">${song.singer} </span>
    //     </div>
    //  </div>` 
    //    })

    //    playlist.innerHTML = htmls.join('');
    //cach 2 :
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

       cd.aminate([
        {transform : "rotate(360deg)"}
       ],[{
        duration :10000,
       }])
   },
   handleEvent : function(){
    document.onscroll = function (){
        let scroll_top = document.documentElement.scrollTop;
        
    }
   },
   start : function(){
      app.render();
   }
}
app.start();
