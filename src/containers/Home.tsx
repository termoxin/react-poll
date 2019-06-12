import React, { Component } from "react";
import Questions from "../components/Questions";
import { questions } from "../questions.json";
import Files from "react-files";

interface State {
  questions: Array<object>;
  name: string;
}

class Home extends Component<{}, State> {
  fileReader: FileReader;

  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      name: ""
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
    const name = file[0].name;

    if (file.length > 1) {
      file.shift();
    }

    this.fileReader.readAsText(file[0]);

    this.setState({
      name
    });
  };

  onFileError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };

  render() {
    const { questions, name } = this.state;

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
        <Questions questions={questions} name={name}  />
      </div>
    );
  }
}

export default Home;
