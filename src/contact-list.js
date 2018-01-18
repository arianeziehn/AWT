import {EventAggregator} from 'aurelia-event-aggregator';
import {WebAPI} from './web-api';
import {ContactUpdated, ContactViewed} from './message';
import {areEqual} from './utility';
import {inject, bindable } from 'aurelia-framework';

@inject(WebAPI, EventAggregator)
export class ContactList {

@bindable selectedContact

  constructor(api, ea) {
    this.api = api;
    this.contacts = [];
    this.ea = ea;
    this.selectedContact = null;
    this.selectedId = 0;

    ea.subscribe(ContactViewed, msg => this.select(msg.contact));
    ea.subscribe(ContactUpdated, msg => {
      let id = msg.contact.id;
      let found = this.contacts.find(x => x.id == id);
      Object.assign(found, msg.contact);
    });
  }

  created() { 
    this.api.getContactList().then(contacts => this.contacts = contacts);
  }

  select(contact) {
    this.selectedId = contact.id;
    this.selectedContact = contact;
    return true;
  }

  add() {
      this.api.addFriend(this.selectedContact).then(contact => {
        this.selectedContact = contact;
        this.routeConfig.navModel.setTitle(contact.firstName);
        this.originalContact = JSON.parse(JSON.stringify(contact));
        this.ea.publish(new ContactUpdated(this.selectedContact));
      });
    }

   get canSave() {
    return !this.selectedContact.friend //&& !this.api.isRequesting;
    }

}


