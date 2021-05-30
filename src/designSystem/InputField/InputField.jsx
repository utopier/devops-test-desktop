/* eslint-disable */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const InputField = ({ className, type, placeholder, value, onChange }) => {
  return (
    <input
      className={className}
      css={style}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

InputField.defaultProps = {
  type: 'text',
};

const style = css`
  border-radius: 5px;
  width: 180px;
  height: 30px;
`;

export default InputField;
