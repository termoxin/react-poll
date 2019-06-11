import React, { Component } from "react";
import Questions from "../components/Questions";
import { questions } from "../questions.json";
import Files from "react-files";

interface State {
  questions: Array<object>;
}

class Home extends Component<{}, State> {
  fileReader: FileReader;

  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };

    this.fileReader = new FileReader();
  }

  componentDidMount() {
    this.fileReader.onload = event => {
      const file: string = this.fileReader.result as string;
      const { questions } = JSON.parse(file);

      this.setState({
        questions
      });
    };
  }

  onFileChange = file => {
    if (file.length > 1) {
      file.shift();
    }

    this.fileReader.readAsText(file[0]);
  };

  onFileError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };

  render() {
    const { questions } = this.state;

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
        <Questions questions={questions} type="arrows" />
      </div>
    );
  }
}

export default Home;
