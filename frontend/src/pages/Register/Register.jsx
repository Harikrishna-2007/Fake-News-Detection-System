import "./Register.css";

export default function Register() {
return ( <div className="register-container"> <div className="register-card"> <div className="logo"> <h2>🛡️ Fake News Detection</h2> </div>

```
    <h1>Create an Account</h1>
    <p>Fill in the details to get started</p>

    <form>
      <div className="input-group">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
        />
      </div>

      <div className="input-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Create a password"
        />
      </div>

      <div className="input-group">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
        />
      </div>

      <div className="terms">
        <input type="checkbox" />
        <span>
          I agree to the Terms & Conditions and Privacy Policy
        </span>
      </div>

      <button type="submit" className="register-btn">
        Register
      </button>
    </form>

    <div className="login-link">
      Already have an account? <a href="#">Login here</a>
    </div>
  </div>
</div>


);
}
