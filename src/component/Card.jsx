import React, { useState } from "react";
import Error from "./Error";

const initialstate = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const Card = () => {
  const [form, setForm] = useState(initialstate);
  const [form_errors, setForm_errors] = useState(initialstate);
  const [valid, setValid] = useState(false);

  const validate_fields = () => {
    let errors_fields = {};
    const re =
      /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    if (!form.firstname.trim()) {
      errors_fields.firstname = "First Name cannot be empty";
    }
    if (!form.lastname.trim()) {
      errors_fields.lastname = "Last Name cannot be empty";
    }
    if (!form.email.trim()) {
      errors_fields.email = "Email cannot be empty";
    } else if (!re.exec(form.email.trim())) {
      errors_fields.email = "Looks like this is not an email";
    }
    if (!form.password.trim()) {
      errors_fields.password = "Password cannot be empty";
    }
    {
      Object.keys(errors_fields).length === 0
        ? setValid(true)
        : setValid(false);
    }
    return errors_fields;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setForm(initialstate);
    setForm_errors(initialstate);
    setValid(false);
  };

  const handleSubmit = () => {
    setForm_errors(validate_fields(form));
  };

  return (
    <section className="master">
      <article className="overview">
        <h2 className="title">Learn to code by watching others</h2>
        <p className="description">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable
        </p>
      </article>
      <article className="form-container">
        <div className="membership">
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </div>
        <div className="form">
          <div className="container-name">
            <input
              type="text"
              className={`name ${form_errors.firstname ? "name-error" : ""}`}
              placeholder="First Name"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
            />
            {form_errors.firstname && <Error message={form_errors.firstname} />}
          </div>
          <div className="container-lastname">
            <input
              type="text"
              className={`lastname ${
                form_errors.lastname ? "lastname-error" : ""
              }`}
              placeholder="Last Name"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
            />
            {form_errors.lastname && <Error message={form_errors.lastname} />}
          </div>
          <div className="container-email">
            <input
              type="email"
              className={`email ${form_errors.email ? "email-error" : ""}`}
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {form_errors.email && <Error message={form_errors.email} />}
          </div>
          <div className="container-password">
            <input
              type="password"
              className={`password ${
                form_errors.password ? "password-error" : ""
              }`}
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            {form_errors.password && <Error message={form_errors.password} />}
          </div>
          <button className="btn" onClick={handleSubmit}>
            Claim your free trial
          </button>
          <p className="terms">
            By clicking the button, you are agreeing to our{" "}
            <a href="">Terms and Services</a>
          </p>
        </div>
        <div className={valid ? "status" : "status-hide"}>
          <h3>Form sent successfully</h3>
          <button onClick={resetForm}>OK to continue</button>
        </div>
      </article>
    </section>
  );
};

export default Card;
