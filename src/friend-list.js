import {WebAPI} from './web-api';
import {inject} from 'aurelia-framework';
import {areEqual} from './utility';

@inject(WebAPI)
export class FriendList {
  constructor(api) {
    this.api = api;
    this.contacts = [];
  }

  created() {
    this.api.getFriendList().then(contacts => {      
      this.contacts = contacts   
  });
  }

  select(contact) {    
    this.selectedId = contact.id;
    return true;
  
}

  
}
