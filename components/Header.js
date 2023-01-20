import User from "./User";

export default function Header() {
    return ( 
        <header className="flex justify-between p-5 text-sm text-gray-500">
        <div className="flex space-x-5 items-center">
            <p className="link">About</p>
            <p className="link">Store</p>
        </div>
        <div className="flex space-x-5 items-center">
            <p className="link">Gmail</p>
            <p className="link">Image</p>
            <User />
        </div>
        </header>
     );
}

