import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedBackClicked: true,
  }

  clickedEmoji = () => {
    this.setState({isFeedBackClicked: false})
  }

  responseFeedBack = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedBack-con">
        <img className="love-sty" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="thankYou-sty">Thank You!</h1>
        <p className="description">
          We will user your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  feedBackFun = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="question-con">
        <h1 className="que-title">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                onClick={this.clickedEmoji}
                className="btn-sty"
                type="button"
              >
                <img
                  className="emoji-sty"
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                />
                <p className="name-sty">{eachEmoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isFeedBackClicked} = this.state
    return (
      <div className="bg-con">
        <div className="card-con">
          {isFeedBackClicked ? this.feedBackFun() : this.responseFeedBack()}
        </div>
      </div>
    )
  }
}
export default Feedback
