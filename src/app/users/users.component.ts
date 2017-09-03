import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
userUrl='https://api.github.com/users/';
userRepoUrl='https://api.github.com/users/';
//repoDetails:any;
userDump:any;
user:any={};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    let name=this.route.snapshot.paramMap.get('username');
    //console.log(technologyname);
    let getRepoUrl=this.userUrl+name;
    this.http.get(getRepoUrl).subscribe(data => {
    this.user = data;
     console.log(this.user);
  });
  let getuserRepoUrl=this.userRepoUrl+name+'/repos';
  this.http.get(getuserRepoUrl).subscribe(data => {
  this.userDump = data;
   console.log(this.userDump);
});

  }
  calculateDays(updateat:Date){
    let currentDate=new Date();
    let LastUpdateDate=new Date(updateat);
    let timeDiff = Math.abs(currentDate.getTime() - LastUpdateDate.getTime());
    let  diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      return diffDays>1 ? diffDays+' days': ' a day ';
    }




}
