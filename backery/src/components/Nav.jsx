import { NavLink } from "react-router-dom";

export default function Nav() {
    const checkIsactive = ({ isActive }) => {
        return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "orange" : "",
        }
    }
    return (
        <nav>
          <ul>
            <li>
              <NavLink style={checkIsactive} to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink style={checkIsactive} to="/login">
                LOGIN
              </NavLink>
            </li>
          </ul>
        </nav>
    )
}

