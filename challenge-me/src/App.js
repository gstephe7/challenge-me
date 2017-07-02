import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import CompletedChallenges from './CompletedChallenges.js';
import CreateAccount from './CreateAccount.js';
import CreateChallenge from './CreateChallenge.js';
import MobileNavbar from './MobileNavbar.js';
import Profile from './Profile.js';
import RandomChallenge from './RandomChallenge.js';
import SignIn from './SignIn.js';
import Sidebar from './Sidebar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSignIn: false,
      showCreateAccount: false,
      user: {
        username: 'Greg',
        name: 'Greg',
        img: require('./img/profilepic.jpg'),
        acceptedChallenges: [],
        completedChallenges: [],
        points: 0
      },
      challenges: ['catch a seagull', 'eat 21 raw oysters in 2 minutes', 'stick 3 cheesesticks in your nose'],
      randomChallenge: '',
      completedChallenges: [{src: require('./video/dance.mp4'), points: 0}, {src: require('./video/rush.mp4'), points: 0}, {src: require('./video/soccer.mp4'), points: 0}],
      randomVideo: '',
      newChallenge: ''
    }
    this.displaySignIn = this.displaySignIn.bind(this);
    this.displayCreateAccount = this.displayCreateAccount.bind(this);
    this.generateRandomChallenge = this.generateRandomChallenge.bind(this);
    this.generateRandomVideo = this.generateRandomVideo.bind(this);
    this.inputChallenge = this.inputChallenge.bind(this);
    this.createChallenge = this.createChallenge.bind(this);
    this.acceptChallenge = this.acceptChallenge.bind(this);
  }

  acceptChallenge() {
    this.state.user.acceptedChallenges.push(this.state.randomChallenge);
    this.generateRandomChallenge();
  }

  createChallenge() {
    if (this.state.newChallenge.length > 3) {
      this.state.challenges.push(this.state.newChallenge);
      this.setState({
        newChallenge: ''
      })
    }
  }

  displaySignIn() {
    this.setState({
      showSignIn: !this.state.showSignIn
    })
  }

  displayCreateAccount() {
    this.setState({
      showCreateAccount: !this.state.showCreateAccount
    })
  }

  inputChallenge(event) {
    this.setState({
      newChallenge: event.target.value
    })
  }

  generateRandomChallenge() {
    this.setState({
      randomChallenge: this.state.challenges[Math.floor(Math.random() * this.state.challenges.length)]
    })
  }

  generateRandomVideo() {
    this.setState({
      randomVideo: this.state.completedChallenges[Math.floor(Math.random() * this.state.completedChallenges.length)].src
    })
  }

  render() {
    return (
      <div className="container">

        <MobileNavbar
          displaySignIn={this.displaySignIn}
        />

        <SignIn
          showSignIn={this.state.showSignIn}
          displaySignIn={this.displaySignIn}
          displayCreateAccount={this.displayCreateAccount}
        />

        <CreateAccount
          displayCreateAccount={this.displayCreateAccount}
          showCreateAccount={this.state.showCreateAccount}
        />

        <div className="col-sm-9 col-xs-12">
          <CreateChallenge
            newChallenge={this.state.newChallenge}
            inputChallenge={this.inputChallenge}
            createChallenge={this.createChallenge}
          />
          <RandomChallenge
            generateRandomChallenge={this.generateRandomChallenge}
            randomChallenge={this.state.randomChallenge}
          />
          <CompletedChallenges
            generateRandomVideo={this.generateRandomVideo}
            randomVideoSrc={this.state.randomVideo}
            randomVideoPoints={this.state.randomVideo.points}
          />
          <Profile
            name={this.state.user.name}
            img={this.state.user.img}
            points={this.state.user.points}
            challengesAccepted={this.state.user.challengesAccepted}
            challengesCompleted={this.state.user.challengesCompleted}
          />
        </div>

        <div className="col-sm-3 hidden-xs">
          <Sidebar
            name={this.state.user.name}
            img={this.state.user.img}
            points={this.state.user.points}
            challengesAccepted={this.state.user.challengesAccepted}
            challengesCompleted={this.state.user.challengesCompleted}
          />
        </div>

      </div>
    )
  }
}

export default App;
