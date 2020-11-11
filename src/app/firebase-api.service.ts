import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  constructor(private firebaseApi: AngularFireDatabase) { }

  public createClient(client: any) {
    return this.firebaseApi.database.ref('clients').push(client);
  }

  public readClient() {
    return this.firebaseApi.list('clients').valueChanges();
  }

  public deleteClient(clien: any) {
    var sv:any;
    var clav:any;
    this.firebaseApi.database.ref('clients').on("value", function (snap) {
      sv = snap.val();
      var svArr = Object.keys(sv);
      clav = svArr[clien];
      console.log(clav);

    }, function (errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
    this.firebaseApi.database.ref('clients/' + clav).remove();
  }
}
