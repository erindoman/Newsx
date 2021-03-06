import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EditProfilePage.css";

class EditProfilePage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.user,
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdateUser(this.state.formData);
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData: formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  render() {
    return (
      <>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <div className="edit-input">
            <input
              type="text"
              name="avatar"
              value={this.state.formData.avatar}
              onChange={this.handleChange}
            />
            <label htmlFor="">Profile Image Url</label>
          </div>
          <div className="edit-input">
            <input
              type="text"
              name="bio"
              value={this.state.formData.bio}
              onChange={this.handleChange}
            />
            <label htmlFor="">Personal Bio</label>
          </div>
          <div>
            <button type="submit" disabled={this.state.invalidForm}>
              Update Profile
            </button>
            <Link
              to={{
                pathname: "/profile",
              }}
            >
              <button>Cancel</button>
            </Link>
          </div>
        </form>
      </>
    );
  }
}

export default EditProfilePage;
