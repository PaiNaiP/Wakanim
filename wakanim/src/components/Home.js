import React, { Component } from 'react';
//import Auth from './Auth';
import { Header } from './Header';
import { HmComp } from './HmComp';
//import { VideoPleer } from './VideoPleer';
import './NavMenu.css'


export default class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <Header/>
        <HmComp/>
      </div>
    );
  }
}
