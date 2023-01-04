import "../App.css";

function VegAndNonVeg() {
  return (
    <div>
      <div className="btn-group">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false">
          Veg&NonVeg
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/">
              Veg&NonVeg
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Veg
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              NonVeg
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VegAndNonVeg;
