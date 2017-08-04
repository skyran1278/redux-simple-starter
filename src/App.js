import React, { Component } from 'react';
import _ from 'lodash'
import Search from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/viedo_list'
import VideoDetail from './components/video_detail'
import  './styles/style.css'

const API_KEY = 'AIzaSyDZe4cUXnA4bNNqnEgyK4FXuywVbO7JNFc';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectVideo: null
    }

    this.videoSearch('surf')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos,
        selectVideo: videos[0]
      });
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 1000)
    return (
      <div>
        <Search
          onInputChange={videoSearch} />
        <div className="row">
          <VideoDetail video={this.state.selectVideo} ></VideoDetail>
          <VideoList
            onVideoSelect={selectVideo => this.setState({selectVideo}) }
            videos={this.state.videos} ></VideoList>
        </div>

      </div>
    );
  }
}

export default App;
