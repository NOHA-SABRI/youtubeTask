import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import{ YoutubeService} from 'src/app/service/youtube.service'
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  
  video:any[]=[];
  vidID: any;
  constructor(private youtube:YoutubeService,
    private activatedRout:ActivatedRoute,
    private router:Router){
      this.data='';
    }
   ////*********pagination****//////
    totalLenght:any;
    page:number=1;
  // ******************** for search *********************
    data: string ;
  //********************get data from given youtube channle*******************//
 ngOnInit(){
   this.youtube.getVideosForChanel("UCz4tgANd4yy8Oe0iXCdSWfA","190").subscribe((data)=>{
     console.log(data)
     this.totalLenght=data.length;
     this.video = data.items
   })
 
 }
 
 //***********************send vDetails to Details Screen *****************/
 viewDetails(vID:any){
   this.router.navigate(['/VideoDetails',vID]);
 }

 


}
