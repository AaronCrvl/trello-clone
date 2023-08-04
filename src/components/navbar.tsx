import React from "react";
import logo  from '../assets/trello-clone-logo.png'

function NavBar (){
    return (
        <div className="sticky w-screen h-full bg-zinc-800">
            <ul className="flex text-gray-200 font-bold ">
                <li className="p-3 opacity-75"><img className="w-24 h-12" alt="" src={logo}/></li>
                <li className="text-md mt-4 h-full ml-2 hover:bg-zinc-600 p-3 opacity-75 hover:cursor-pointer"><a href="">Create New Board</a></li>
                <li className="text-md mt-4 h-full ml-4 hover:bg-zinc-600 p-3 opacity-75 hover:cursor-pointer"><a href="">Clear Card</a></li>
                <li className="text-md mt-4 h-full ml-4 hover:bg-zinc-600 p-3 opacity-75 hover:cursor-pointer"><a href="https:www.github.com/AaronCrvl/">Other Projects</a></li>
            </ul>
        </div>
    )
}

export default NavBar;