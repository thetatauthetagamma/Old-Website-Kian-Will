import React from 'react';
import {
    Link
} from 'react-router-dom';

export class LinkedListNode {
  constructor(jsonProfile, prevNode, userid) {
    this.profile = new Profile(jsonProfile);
    this.prevNode = prevNode;
    this.nextNodes = [];
    this.userid = userid
  }

  addNextNode(nextNode) {
    this.nextNodes.push(nextNode);
  }

  updateProfile(jsonProfile) {
    this.profile = new Profile(jsonProfile);
  }
}

export class Profile {
  constructor(jsonProfile) {
    if (jsonProfile != null) {
      this.userid = jsonProfile['userid'];
      this.major = jsonProfile['major'];
      this.city = jsonProfile['city'];
      this.state = jsonProfile['state'];
      this.grad_year = jsonProfile['grad_year'];
      this.grad_sem = jsonProfile['grad_sem'];
      this.pledge_class = jsonProfile['pledge_class'];
      this.nickname = jsonProfile['nickname'];
      this.gender = jsonProfile['gender'];
      this.phone = jsonProfile['phone'];
      this.biguserid = jsonProfile['biguserid'];
    } else {
      this.userid = null;
      this.major = null;
      this.city = null;
      this.state = null;
      this.grad_year = null;
      this.grad_sem = null;
      this.pledge_class = null;
      this.nickname = null;
      this.gender = null;
      this.phone = null;
      this.biguserid = null;
    }
    this.firstname = null;
    this.lastname = null;
    this.roll = null;
    this.verified = null;
    this.email = null;
    this.img = null;
  }

}
