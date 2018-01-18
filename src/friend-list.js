import {EventAggregator} from 'aurelia-event-aggregator';
import {WebAPI} from './web-api';
import {ContactUpdated, ContactViewed} from './message';
import {areEqual} from './utility';
import {inject, bindable } from 'aurelia-framework';


@inject(WebAPI, EventAggregator)
export class FriendList {

@bindable selectedContact

  constructor(api, ea) {
    this.api = api;
    this.contacts = [];
    this.ea = ea;
    this.selectedContact = null;
  }

  created() {
    this.api.getFriendList().then(contacts => {      
      this.contacts = contacts   
  });
  }

  select(contact) {    
    this.selectedId = contact.id;
    this.selectedContact = contact;
    return true;
  
}

  
}
