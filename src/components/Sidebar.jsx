function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li className="active">
          <i className="fa-solid fa-chart-line"></i>
          Dashboard
        </li>
        <li>
          <i className="fa-solid fa-user"></i>
          Profile
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
