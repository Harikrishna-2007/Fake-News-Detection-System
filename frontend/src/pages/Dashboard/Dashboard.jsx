import "./Dashboard.css";

export default function Dashboard() {
return ( <div className="dashboard-container">

```
  <div className="sidebar">
    <h2>🛡️ FND</h2>

    <ul>
      <li>Dashboard</li>
      <li>Users</li>
      <li>Predictions</li>
      <li>Reports</li>
      <li>Settings</li>
      <li>Logout</li>
    </ul>
  </div>

  <div className="main-content">

    <h1>Dashboard</h1>
    <p>Overview of system analytics</p>

    <div className="cards">

      <div className="card">
        <h3>Total Users</h3>
        <p>1245</p>
      </div>

      <div className="card">
        <h3>Total Predictions</h3>
        <p>5432</p>
      </div>

      <div className="card">
        <h3>Fake News</h3>
        <p>2842</p>
      </div>

      <div className="card">
        <h3>Real News</h3>
        <p>2590</p>
      </div>

    </div>

    <div className="chart-section">
      <h2>Prediction Overview</h2>
      <div className="chart-placeholder">
        Chart Area
      </div>
    </div>

    <div className="table-section">
      <h2>Recent Predictions</h2>

      <table>
        <thead>
          <tr>
            <th>News Title</th>
            <th>Result</th>
            <th>Confidence</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Election Update</td>
            <td>Fake</td>
            <td>94%</td>
          </tr>

          <tr>
            <td>Sports News</td>
            <td>Real</td>
            <td>89%</td>
          </tr>

          <tr>
            <td>Tech Launch</td>
            <td>Real</td>
            <td>92%</td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>
</div>


);
}
