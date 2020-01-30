import { Component, OnInit } from '@angular/core';
import { Serializer } from '@angular/compiler';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  posts;
  constructor() {
  }   
  ngOnInit()  {
    this.posts =[
  
      {
        nome:'Lucas', 
        texto:'Não tive filhos, não transmiti a nenhuma criatura o legado de nossa miséria.',
        user:'@lusca',
        like:false,
        dislike:false,
        nLikes:5,
        nDislikes:5,
        alertaSpoiler:true,
        serie:'Prison Break',
      },
     {
        nome:'Fellipe',
        texto:'A vida sem luta é um mar morto no centro do organismo universal',
        user:'@lipe',
        like:false,
        dislike:false,
        nLikes:6,
        nDislikes:7,
        alertaSpoiler:true,
        serie:'Breaking Bad',
     },
    
     {
        nome:'Alana',
        texto:'Cada qual sabe amar a seu modo; o modo, pouco importa; o essencial é que saiba amar.',
        user:'@Lana',
        like:false,
        dislike:false,
        nLikes:7,
        nDislikes:8,
        alertaSpoiler:true,
        serie:'Scream',
     },
    
     {
        nome:'Mariah',
        texto:'O acaso... é um Deus e um diabo ao mesmo tempo.',
        user:'@mari',
        like:false,
        dislike:false,
        nLikes:8,
        nDislikes:9,
        alertaSpoiler:true,
        serie:'Vikings',
     },
    
     {
        nome:'Brenda',
        texto:'O dinheiro não traz felicidade — para quem não sabe o que fazer com ele.',
        user:'@Brenda',
        like:false,
        dislike:false,
        nLikes:9,
        nDislikes:10,
        alertaSpoiler:true,
        serie:'Dark',
     },
    
    
    
    ] 

  }

   
  

  


  Like(post)   {
	   if ((post.like ==  false) && (post.dislike == false)) {
       post.nLikes ++ ;
       post.like = true ;
       post.dislike = false;
	   }
     else
      if ((post.like == false) && (post.dislike == true))  {
		     post.nLikes ++;
         post.like = true ;
         post.nDislikes --;
         post.dislike =false;
    
      }
      else if  (post.like==true){
        post.nLikes --;
        post.like = false;
      }
  
 }
  
    Dislike(post)  {
    
      if ((post.like == true) && (post.dislike ==false)){
        post.like = false;
        post.nLikes --;
        post.dislike = true;
        post.nDislikes ++;
      }
      else if (post.dislike == false){
        post.dislike = true;
        post.nDislikes ++;
      }
     else if (post.dislike ==true){
       post.dislike = false;
       post.nDislikes --;
     } 
  }

}
