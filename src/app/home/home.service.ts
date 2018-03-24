
import { Injectable } from '@angular/core';
import { escape } from 'querystring';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class HomeService {


    title = 'JSON to Table Example';
    constructor (private httpService: HttpClient) {
        this.arrBirds = new Subject<string>();
     }
    arrBirds: Subject<string>;

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
    }

    getPostsForIndex(): Observable<Object> {
        console.log(this.httpService.get<Object>(`/assets/ninjas.json`));
      return this.httpService.get<Object>(`/assets/ninjas.json`);
    }




}



