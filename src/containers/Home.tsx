import React, { Component } from "react";
import Questions from "../components/Questions";
import { questions } from "../questions.json";
import Files from "react-files";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: null
    };

    this.fileReader = new FileReader();
  }

  componentDidMount() {
    this.fileReader.onload = event => {
      let questions = event.target.result;
       = JSON.parse(questions.questions);

      this.setState({
        questions
      });
    };
  }

  onFileChange = file => {
    this.fileReader.readAsText(file[0]);
  };

  onFileError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };

  render() {
    return (
      <div>
        <div className="files">
          <Files
            className="files-dropzone"
            onChange={this.onFileChange}
            onError={this.onFileError}
            accepts={[".json"]}
            clickable
          >
            Drop files here or click to upload
          </Files>
        </div>
        <Questions questions={questions} />
      </div>
    );
  }
}

export default Home;
