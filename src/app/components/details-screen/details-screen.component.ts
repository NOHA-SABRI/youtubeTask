import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YoutubeService } from 'src/app/service/youtube.service';

@Component({
  selector: 'app-details-screen',
  templateUrl: './details-screen.component.html',
  styleUrls: ['./details-screen.component.scss']
})
export class DetailsScreenComponent implements OnInit {
  starRating = 0; 
  video:any;
  vidID: any;
 getFav:any;
 favList:any;
 
 
  constructor(private youtube:YoutubeService,
    private activatedRout:ActivatedRoute,
   ) { }

  ngOnInit(): void {
    this.getVideo();
  }
  getVideo(){
    this.activatedRout.paramMap.subscribe((params) =>{
      let videoID:any=params.get('videoID')
      this.vidID=videoID;
      this.youtube.getspacificVideos(this.vidID).subscribe(
        ((data)=>{
          this.video=data['items'][0];
          // console.log(this.video)
        })
      )
 
    });
    
  }
    
  addToFavorite(){
     this.youtube.setFavorite(this.video,this.starRating);
     this.showFavorite();
  }
  
  showFavorite(){
    this.getFav=localStorage.getItem('Favorites');
    this.favList=JSON.parse(this.getFav)
    console.log(this.favList)

  }

 
 
}
