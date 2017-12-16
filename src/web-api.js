let latency = 200;
let id = 0;

function getId(){
  return ++id;
}

let contacts = [
  {
    id:getId(),
    firstName:'Henrik',
    lastName:'Dichmann',
    email:'henrikdichmann@campus.tu-berlin.de',
    phoneNumber:'0164789159894',
    friend: 'true'
  },
  {
    id:getId(),
    firstName:'Fiona',
    lastName:'Wille',
    email:'fionawille@campus.tu-berlin.de',
    phoneNumber:'33166401',
    friend: 'false'
  },
  {
    id:getId(),
    firstName:'Julian',
    lastName:'Müller',
    email:'julianmüller@campus.tu-berlin.de',
    phoneNumber:'646812024055',
    friend: 'false'
  },
  {
    id:getId(),
    firstName:'Alia',
    lastName:'Siemund',
    email:'aliasiemund@campus.tu-berlin.de',
    phoneNumber:'867-5309',
    friend: 'true'
  },
  {
    id:getId(),
    firstName:'Ariane',
    lastName:'Ziehn',
    email:'arianeziehn@campus.tu-berlin.de',
    phoneNumber:'1245015001',
    friend: 'false'
  },
  {
    id:getId(),
    firstName:'John',
    lastName:'Tolkien',
    email:'tolkien@inklings.com',
    phoneNumber:'867-5309',
    friend: 'false'
  },
  {
    id:getId(),
    firstName:'Clive',
    lastName:'Lewis',
    email:'lewis@inklings.com',
    phoneNumber:'867-5309',
    friend: 'false'
  },
  {
    id:getId(),
    firstName:'Owen',
    lastName:'Barfield',
    email:'barfield@inklings.com',
    phoneNumber:'867-5309',
    friend: 'false'
  },
  {
    id:getId(),
    firstName:'Charles',
    lastName:'Williams',
    email:'williams@inklings.com',
    phoneNumber:'867-5309',
    friend: 'false'
  },
  {
    id:getId(),
    firstName:'Roger',
    lastName:'Green',
    email:'green@inklings.com',
    phoneNumber:'867-5309',
    friend: 'false'
  }

];

export class WebAPI {
  isRequesting = false;
  
  getContactList(){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = contacts.map(x =>  { return {
          id:x.id,
          firstName:x.firstName,
          lastName:x.lastName,
          email:x.email,
          friend:x.friend
        }});
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getFriendList(){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let resultsFriends = contacts.filter(x => x.friend === 'true').map(x =>  { 
         
          return {
          id:x.id,
          firstName:x.firstName,
          lastName:x.lastName,
          email:x.email,
          friend:x.friend
        
      }
      });
        resolve(resultsFriends);
        this.isRequesting = false;
      }, latency);
    });
  }

  getContactDetails(id){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = contacts.filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  getFriendDetails(id){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = contacts.filter(x => x.friend === 'true').filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  saveContact(contact){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(contact));
        let found = contacts.filter(x => x.id == contact.id)[0];

        if(found){
          let index = contacts.indexOf(found);
          contacts[index] = instance;
        }else{
          instance.id = getId();
          contacts.push(instance);
        }

        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  }

  addFriend(contact){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(contact));
        let found = contacts.filter(x => x.id == contact.id)[0];

        if(found){
          instance.friend = 'true'
          let index = contacts.indexOf(found);
          contacts[index] = instance;
          //instance.id = getId();
          //contacts.push(instance);
        }
        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  }
}
