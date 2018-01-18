import {EventAggregator} from 'aurelia-event-aggregator';
import {WebAPI} from './web-api';
import {GroupUpdated, GroupViewed} from './message';
import {areEqual} from './utility';
import {inject, bindable } from 'aurelia-framework';

@inject(WebAPI, EventAggregator)
export class Group {

@bindable selectedGroup

  constructor(api, ea) {
    this.api = api;
    this.groups = [];
    this.ea = ea;
    this.selectedGroup = null;
    this.groupId = 0;

    ea.subscribe(GroupViewed, msg => this.select(msg.contact));
    ea.subscribe(GroupUpdated, msg => {
      let id = msg.contact.id;
      let found = this.contacts.find(x => x.id == id);
      Object.assign(found, msg.contact);
    });
  }


  created() {
    this.api.getGroupMembers().then( groups => this.groups = groups);
    }

     select(group) {
        this.groupId = group.groupId;
        this.selectedGroup = group;
        return true;

    }
}
