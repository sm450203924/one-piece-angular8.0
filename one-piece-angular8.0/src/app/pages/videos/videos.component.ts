import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  topicList: any;
  topic: string;
  video: any;
  id: string;
  title: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

/*  getVideos(): void {
    const mykey = 'AIzaSyCYNjPwG5IddBh9YgnlzIYfY1RXhOygfKM';
    this.topicList = ['Episode Preview', 'Top Scene', 'Past Of charecters', 'Theories Discussions', 'Warriors Gameplay'];
    this.topicList.map(topicList =>
      this.searchVideo(topicList, mykey)
    );

  }

  searchVideo(topicList, mykey): any {
      topicList = topicList.toString().toLowerCase().replace(/\s/g, '%20');
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet
      &maxResults=3&q=one%20piece%20${topicList}&type=video&key= ${mykey}`;
      this.http.get(url)
        .subscribe((data) => this.operateData(data));
  }

  operateData(data): void {
    const videoInfoArr = [];
    let videoJson = {}; // [{},{}]
    let videoArr = []; // [{topic:"",video:[]}]
    let videoItemJson = {}; // [{topic:"", video:[{title:"",video:""},{}]}]
    const itemList = data.data.items;
    videoJson['topic'] = this.topicList[i];

    for (let j = 0; j < 3; j++) {
      videoItemJson = {};
      videoItemJson.title = (itemList[j].snippet.title.toString());
      videoItemJson.videoId = (itemList[j].id.videoId);
      videoArr[j] = videoItemJson;
    }

    videoJson['video'] = videoArr;
    videoArr = [];

    videoInfoArr[i] = videoJson;
    videoJson = {};





    // console.log(videoInfoArr);
    return videoInfoArr;
    console.log(data);
    this.videos = data;
  }*/
}
