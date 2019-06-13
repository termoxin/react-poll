## Installation

```sh
npm install react-poll
```

## Usage

**Using NPM**

1 . Require react-poll after installation

```js
import Poll from "react-poll";
```

2 . Include react-poll component

```js
<Poll />
```

## Options

Notes:

- The tooltip sets `type: fill` as **default** attributes. You don't have to add these options if you don't want to change the defaults

[Check example](https://github.com/termoxin/react-poll)

| Global    |  Type  | Values       | Description                                                                                   |
| --------- | :----: | :----------- | :-------------------------------------------------------------------------------------------- |
| questions | Array  |              | These are questions to use for                                                                |
| type      | string | arrows, fill | Poll type `fill` or `arrows`                                                                  |
| name      | string |              | A name to showing in logs (after each a completed poll, component create a log in locaStorage |

Data structure for questions:

| Property      | Type                    | Values                | Description                                                                                    |
| ------------- | :---------------------- | :-------------------- | :--------------------------------------------------------------------------------------------- |
| id            | number or string        |                       | The question id                                                                                |
| text          | string                  |                       | The question text                                                                              |
| type          | string                  | fill, checkbox, radio | The question type                                                                              |
| description   | string                  |                       | The question description                                                                       |
| answers       | string or Array<string> |                       | The variety of answers                                                                         |
| correctAnswer | string                  |                       | The answers. The data depends on question type(fill, radio - string, checkbox - Array<string>) |

## Contributing

We welcome your contribution! Fork the repo, make some changes, submit a pull-request!
