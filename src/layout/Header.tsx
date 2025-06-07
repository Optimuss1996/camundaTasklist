import { FaUser } from "react-icons/fa";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="w-full">
      <div>
        <Link to="http://localhost:8080/camunda/app/admin/default/#/">
          <FaUser />
        </Link>
      </div>
    </div>
  );
}
