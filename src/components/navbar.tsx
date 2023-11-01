import {Fragment} from 'react'
import logo  from '../assets/trello-clone-logo.png';
import { Link, Outlet } from 'react-router-dom';
import uniqid from 'uniqid';

export default function NavBar() {    
    const  navConfig = [
        {
            link : '/boardTemplates',
            text : '📋 Board Templates'
        },
        {
            link : '/myBoards',
            text : '🅱 My Boards'
        },
        {
            link : 'https:www.github.com/AaronCrvl/',
            text : '🎆 Other Projects'
        }
    ]
    return (
        <Fragment>
            <header>
                <div className="sticky z-10 top-0 w-full bg-zinc-900">
                    <ul className="flex text-gray-200 font-bold ">
                        {/* Logo */}
                        <li className="p-3 opacity-75">
                            <Link to='/'>
                                <img className="w-24 h-12" alt="" src={logo}/>
                            </Link>
                        </li>   
                        {/* Options --------------- */}                        
                        {navConfig.map(config => {
                            return(
                                <li key={uniqid()} className={`text-md mt-4 h-full ml-4 hover:bg-zinc-900 p-3 opacity-50 hover:cursor-pointer hover:opacity-100`}>
                                    <Link key={'link' + uniqid()} to={config.link}>
                                        {config.text}
                                    </Link>
                                </li>                        
                            )
                        })}                                                    
                    </ul>
                </div>
            </header>
            <Outlet />
        </Fragment>
    )
}
// !_☄