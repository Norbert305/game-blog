import { React } from "react";
import { Link } from "react-router-dom";

export const EditProfile = () => {
  // const [updatedUser, setUpdatedUser] = useState({
  //   full_name: store.loggedUser.full_name,
  //   email: store.loggedUser.email,
  //   phone: store.loggedUser.phone,
  //   address: store.loggedUser.address,
  // });

  // const handleChange = (e) =>
  //   setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });

  return (
    <div className="signUp">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 middle">
          <form>
            <h1
              className="text-center letter-shadow"
              style={{ color: "wheat" }}
            >
              User Information
            </h1>
            <br />
            <br />
            <h2>Edit fields bellow</h2>
            <div className="mb-3">
              <label for="exampleInputName1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                placeholder="Name"
                // onChange={handleChange}
                // value={updatedUser.full_name}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Address"
                // onChange={handleChange}
                // value={updatedUser.email}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPhoneNumber1"
                placeholder="Phone Number"
                // onChange={handleChange}
                // value={updatedUser.phone}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputNumber" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputAddress1"
                placeholder="Address"
                // onChange={handleChange}
                // value={updatedUser.address}
              />
            </div>
            <Link to="/ClientProfilePage">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </Link>
          </form>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};
