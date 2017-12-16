import {inject} from 'aurelia-framework';
import {WebAPI} from './web-api';
import {areEqual} from './utility';

@inject(WebAPI)
export class FriendDetail {
  constructor(api){
    this.api = api;
  }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;

    return this.api.getFriendDetails(params.id).then(contact => {
      if(contact.friend == 'true'){
      this.contact = contact;
      this.routeConfig.navModel.setTitle(contact.firstName);
      this.originalContact = JSON.parse(JSON.stringify(contact));
    }});
  }  
}
