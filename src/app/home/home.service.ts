import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';


@Injectable()
export class HomeService {
    lastkey;
  constructor(private db: AngularFireDatabase) { }

  getMovies(batch, lastKey?): Observable<any> {



    if (lastKey) {
        console.log('hi');
        return this.db.list('/', ref => ref.orderByChild('id').limitToFirst(batch).startAt(lastKey)).valueChanges();

    } else {
        return this.db.list('/', ref => ref.orderByChild('id').limitToFirst(batch)
    ).valueChanges();
  }
}
}
