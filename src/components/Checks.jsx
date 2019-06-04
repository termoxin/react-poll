import React from "react";
import { Form, Checkbox } from "semantic-ui-react";

const Checks = ({ answers, value, handleChange }) => (
  <>
    {answers.map(answer => (
      <Form.Field key={answer.id}>
        <Checkbox
          label={answer.text}
          value={answer.text}
          name="checkbox"
          onChange={handleChange}
        />
      </Form.Field>
    ))}
  </>
);

export default Checks;
