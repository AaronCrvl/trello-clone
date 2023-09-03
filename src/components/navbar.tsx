import {Fragment} from 'react'
import logo  from '../assets/trello-clone-logo.png';
import { Link, Outlet } from 'react-router-dom';

function NavBar () { 
    const listTailwindCssStyle = 'text-md mt-4 h-full ml-4 hover:bg-zinc-900 p-3 opacity-50 hover:cursor-pointer'
    return (
        <Fragment>
            <header>
                <div className="sticky z-10 top-0 w-full bg-zinc-900">
                    <ul className="flex text-gray-200 font-bold ">
                        <li className="p-3 opacity-75">
                            <Link to='/'>
                                <img className="w-24 h-12" alt="" src={logo}/>
                            </Link>
                        </li>                
                        <li className={`${listTailwindCssStyle} hover:opacity-100`}>
                            {/* <Link to="myBoards"> */}
                                📋 My Boards (In progress)
                            {/* </Link> */}
                        </li>
                        <li className={`${listTailwindCssStyle} hover:opacity-100`}>
                            <Link to="https:www.github.com/AaronCrvl/">
                                🎆 Other Projects
                            </Link>
                        </li>                                               
                    </ul>
                </div>
            </header>
        <Outlet />
        </Fragment>
    )
}

export default NavBar; // !_☄