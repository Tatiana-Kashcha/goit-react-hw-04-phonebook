import * as s from './Filter.styled';

export const Filter = ({ filter, handleCangeFilter }) => {
  return (
    <s.Div>
      <s.Description>Find contacts by name:</s.Description>
      <s.Input
        type="text"
        name="name"
        value={filter}
        onChange={handleCangeFilter}
      />
    </s.Div>
  );
};
