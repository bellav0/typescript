import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  comentario : Object  = {
          alertaSpoiler : false,
	        texto : 'Ótimo filme' ,
	        horario : '12: 03 ' ,
          episódio : 5 ,
          likes : {
		          nLikes : '7' ,
		          estadoDoLike : true ,
	       }




  }


  likeOrUnlike(comentário)   {
	   if (this.comentario.likes.estadoDoLike  ==  false ) {
       this.comentario.likes.nLikes ++ ;
		   this.comentario.likes.estadoDoLike = true ;
	   }
	   else{
		     this.comentario.likes.nLikes --;
	       this.comentario.likes.estadoDoLike = false ;
	  }
  }
  spoiler(comentario) {
    if(this.comentario.alertaSpoiler ==true){
        return "Este comentário contém spoiler"
    }
    else {
      return comentario.texto
    }
  }
}
