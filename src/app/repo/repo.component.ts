import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { DataService} from '../data-service.service';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
repoUrl='https://api.github.com/search/repositories?q=';
repoDetails:any;
repoDump:any;
totalRrepoDump:number;
p: number = 1;
searchText:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private service:DataService
  ) { }

  ngOnInit() {
    let technologyname=this.route.snapshot.paramMap.get('technology');
    //console.log(technologyname);
    let getRepoUrl=this.repoUrl+technologyname;
    this.http.get(getRepoUrl).subscribe(data => {
    this.repoDump = data;

    this.repoDetails=this.repoDump.items;
    this.totalRrepoDump=this.repoDump.total_count;
    console.log(this.repoDetails);
  });

  }
  setData(data:any){
    this.service.repoDetailsDump=data;
  }

calculateDays(updateat:Date){
  let currentDate=new Date();
  let LastUpdateDate=new Date(updateat);
  let timeDiff = Math.abs(currentDate.getTime() - LastUpdateDate.getTime());
  let  diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays>1 ? diffDays+' days': ' a day ';
  }

}
