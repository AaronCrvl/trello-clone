import logo  from '../assets/trello-clone-logo.png'

function NavBar (){
    return (
        <div className="sticky z-10 top-0 w-full bg-zinc-900">
            <ul className="flex text-gray-200 font-bold ">
                <li className="p-3 opacity-75 hover:animate-bounce"><img className="w-24 h-12" alt="" src={logo}/></li>                
                <li className="text-md mt-4 h-full ml-4 hover:bg-zinc-900 p-3 opacity-50 hover:cursor-pointer"><a href="">📋 My Boards (In progress)</a></li>
                <li className="text-md mt-4 h-full ml-4 hover:bg-zinc-900 p-3 opacity-50 hover:cursor-pointer"><a href="https:www.github.com/AaronCrvl/">🚮 Other Projects</a></li>
            </ul>
        </div>
    )
}

export default NavBar; // !_☄