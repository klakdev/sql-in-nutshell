import React from 'react';
import './App.css';
import MyAppContext from "./components/MyAppContext";
import TweetList from "./components/TweetList";
import { getTweetsList } from "./lib/API";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      isLoading: true,
      errorMessage: false,
      errorText: "",
      userName: "Name"
    };
  }

  getTweets() {
    getTweetsList().then(response => {
      const tweet = response.data.tweets;
      this.setState({ tweets: tweet, isLoading: false });
    })};

  componentDidMount() {
    this.getTweets(this);
      setInterval(() => {
        this.getTweets(this);
      }, 10000);
    }

  render() {
    return (
      <>
        <div className="App">
        <header className="App-header">
          <MyAppContext.Provider value={this.state}>
          {this.state.isLoading && (
                    <img
                      className="loader"
                      src="http://pluspng.com/img-png/loader-png-22-jan-2015-23-46-3161-loader-6-png-22-jan-2015-23-46-3087-loader-7-png-22-jan-2015-23-46-3177-loader-8-png-22-jan-2015-23-46-3582-loader-9-png-504.png"
                      alt="loader"
                    ></img>
                  )}
                  <TweetList></TweetList>
                  </MyAppContext.Provider>
            </header>
          </div>
      </>
          );
  }}

  

export default App;
