import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <h2>🛡️ Fake News Detection</h2>
        </div>

        <h1>Welcome Back!</h1>
        <p>Login to your account to continue</p>

        <form>
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
              placeholder="Enter your password"
            />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="register-link">
          Don't have an account? <a href="#">Register here</a>
        </div>
      </div>
    </div>
  );
}