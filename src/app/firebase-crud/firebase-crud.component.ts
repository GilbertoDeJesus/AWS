import { Component, OnInit } from '@angular/core';
import { FireClient } from '../fire-client';
import { ClientFireList } from '../client-fire-list'
import { FirebaseApiService } from '../firebase-api.service';


@Component({
  selector: 'app-firebase-crud',
  templateUrl: './firebase-crud.component.html',
  styleUrls: ['./firebase-crud.component.css']
})
export class FirebaseCRUDComponent implements OnInit {

  clientObj = new FireClient(null, null, null, null, null, null, null, null, null);
  clientList: ClientFireList[] = [];
  client: any = {
    id: 1,
    isActivated: true,
    age: 19,
    name: 'Gilberto Angel de Jesus',
    gender: 'male',
    company: 'LACorp',
    email: 'gadjs2001@gmail.com',
    phone: '2381157257',
    address: '30 Oriente 509'
  }

  constructor(private firebaseApiService: FirebaseApiService) { }

  ngOnInit(): void {
    this.readClient();

  }

  public createClient() {
    this.clientObj.id = this.clientObj.id + 1;
    this.clientObj.isActivated = true;
    this.firebaseApiService.createClient(this.clientObj).then(() => {
      console.log('Client inserted');
    },
      (err) => {
        console.log(err);
      }
    );
  }

  public readClient() {
    this.firebaseApiService.readClient().subscribe((response: any) => {
      this.clientList = response;
      console.log(this.clientList);
    });
  }

  public deleteClient(client) {
    console.log(this.clientList.indexOf(client));
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.firebaseApiService.deleteClient(this.clientList.indexOf(client))
    }
  }

}
