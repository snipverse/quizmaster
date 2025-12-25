function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <i className="fa-solid fa-brain"></i>
        <span>QuizMaster</span>
        <span className="badge">Tech</span>
      </div>
      <div className="header-right">
        <span>Welcome, TechName</span>
        <button>Sign Out</button>
      </div>
    </header>
  );
}

export default Header;
