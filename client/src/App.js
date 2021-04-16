import React, { Component } from 'react'
import firebase from './firebase'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    const messaging = firebase.messaging()
    Notification.requestPermission().then(() => {
      return messaging.getToken()
    }).then(token => {
      console.log('Token : ', token)
    }).catch((err) => {
      console.log("err ________", err);
    })
    // messaging.onMessage((payload)=>{
    //   console.log(payload);
    // })
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
