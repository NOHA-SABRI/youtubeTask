import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  

  constructor(public http: HttpClient) { }
  apiKey : string = 'AIzaSyAbMueM5AmsM4hRq2vGqM16yLLd6RlcJQ4';
    getVideosForChanel(channel:string, maxResults:string): Observable<any> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
   
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }


  
  getspacificVideos(videoID:string): Observable<any> {
    let url ='https://www.googleapis.com/youtube/v3/videos?id='+videoID+'&key=' + this.apiKey +'&part=snippet,contentDetails,statistics,status'
   
    return this.http.get(url).pipe((res) => {
        return res;
        
      })
     
  }

  // ***************sending the favorite videos to local storage ***************
  favList: {vd:any,rate:number}[]=[];

  setFavorite(vd:any,rate:number){

    this.favList.push({vd,rate});
    localStorage.setItem('Favorites',JSON.stringify(this.favList));  
  }
  getVideos(){
    return this.favList;

  }
}

