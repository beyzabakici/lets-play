import React from 'react'
import './App.css'
import 'firebase/database'
import classnames from 'classnames'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { ConfirmationModal } from './components/ConfirmationModal';

export default class VideoChat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      userToCall: null,
      username: null,
      questions: [
        'What’s the last great TV show or movie you watched?',
        'You have your own late night talk show, who do you invite as your first guest?',
        'What’s the last thing you ate?',
        'What’s your favorite dessert?'
      ],
      duration: 5,
      index: 0,
      showConfirmationModal: false,
    }
  }

  renderQuestions = () => {
    const q = this.state.questions[this.state.index];

    return `Question ${this.state.index + 1}: ${q}`;
  };

  UrgeWithPleasureComponent = () => (
    <CountdownCircleTimer
      className={'timer'}
      isPlaying
      duration={this.state.duration}
      colors={[
        ['#004777', 0.33],
        ['#F7B801', 0.33],
        ['#A30000', 0.33],
      ]}
    >
      {({ remainingTime }) => {
        return remainingTime;
      }}
    </CountdownCircleTimer>
  )

  onLoginClicked = async () => {
    await this.props.onLogin(this.state.username)
    this.setState({
      isLoggedIn: true
    })
  }

  onStartCallClicked = () => {
    this.props.startCall(this.state.username, this.state.userToCall)
  }

  renderVideos = () => {
    return <div className={classnames('videos', { join: this.state.isLoggedIn })}>
      { this.props.connectedUser && this.UrgeWithPleasureComponent() }
      <p className="question">
        { this.props.connectedUser && this.renderQuestions() }
      </p>
      <div className="two-video-container">
        <div>
          <video className="first" ref={this.props.setLocalVideoRef} autoPlay playsInline></video>
          <label>{this.state.username}</label>
        </div>
        <div>
          <video ref={this.props.setRemoteVideoRef} autoPlay playsInline></video>
          <label>{this.props.connectedUser}</label>
        </div>
      </div>

    </div>
  }

  renderForms = () => {
    return this.state.isLoggedIn
      ? <div key='a' className='video-join-form'>
        <label>Call to</label>
        <input value={this.state.userToCall} type="text" onChange={e => this.setState({ userToCall: e.target.value })} />
        <button onClick={this.onStartCallClicked} id="call-btn" className="btn btn-primary">Call</button>

      </div>
      : <div key='b' className='video-join-form'>
        <label>Type a name</label>
        <input value={this.state.username} type="text" onChange={e => this.setState({ username: e.target.value })} />

        <button onClick={this.onLoginClicked} id="login-btn" className="btn btn-primary">Login</button>

      </div>
  }

  handleConfirmationModal = () => {
    this.setState({ showConfirmationModal: true })
  };

  handleCloseModal = (event) => {
    this.setState({ showConfirmationModal: false })
  };

  render () {
    return <section id="container">
      <div className="back-icon" onClick={this.handleConfirmationModal}>
        <img src={require('./icons/back.png')} />
      </div>
      { this.state.showConfirmationModal && <ConfirmationModal close={this.handleCloseModal} /> }
      { !this.state.isLoggedIn && <h1 className="video-title">Join the Room</h1> }
      {this.props.connectedUser ? null : this.renderForms()}

      {this.renderVideos()}

    </section>
  }
}
