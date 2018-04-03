import React from "react";
import "./SearchForm.css";
// Using the datalist element we can create autofill suggestions based on the props.breeds array

const SearchFormTwo = props => (
    <div className="form-group">
      <input
        onChange={props.handleInputChange}
        name="better_two"
        list="users"
        type="text"
        className="form-control"
        placeholder="Type in a better to begin"
        id="better_two"
      />
      <datalist id="users">
        {props.users.map(user => <option value={user.username} key={user._id} />)}
      </datalist>
    </div>
);
export default SearchFormTwo;