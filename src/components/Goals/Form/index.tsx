import React from 'react';

const Form: React.FC = () => {
  return (
    <form>
      <label>
        goal:
        <input type="text" name="goal" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
