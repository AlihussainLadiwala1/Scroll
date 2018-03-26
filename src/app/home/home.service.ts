import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import { Subject } from 'rxjs/Subject';
import { EventEmitter } from '@angular/core';


@Injectable()
export class HomeService {
    lastkey;
    private hostName: Subject<string>;
  constructor(private db: AngularFireDatabase) {
    this.hostName = new Subject<string>();
   }

  getMovies(batch, lastKey?): Observable<any> {
    if (lastKey) {
        console.log('hi');
        return this.db.list('/', ref => ref.orderByChild('FIELD40').limitToFirst(batch).startAt(lastKey)).valueChanges();

    } else {
        console.log('hellllo');
        return this.db.list('/', ref => ref.orderByChild('FIELD40').limitToFirst(batch)
    ).valueChanges();
  }
}

}







