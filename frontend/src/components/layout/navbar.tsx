import {
    Link,
    Outlet
} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/data">CRUD</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}