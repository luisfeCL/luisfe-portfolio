import './header.css'
import { Link } from "react-router-dom"


export default function Header(props){
    return(
        <>
            <header className='container'>
            <Link to={`/`} className="logo" href="">{props.logo}</Link>
            <nav className="nav">
                <Link to={`/projects`} href="" className="nav__element link">Projects</Link>
                <Link to={`/about`} href="" className="nav__element link">About</Link>
                <a href="" className="nav__element link">Contact</a>
            </nav>
        </header>
        </>
    )
}