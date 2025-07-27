import { Menu, School } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DarkMode from '../DarkMode'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useLogoutUserMutation } from '../features/api/authApi'
import { useSelector } from 'react-redux'


const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
    const navigate = useNavigate();

    const logouthandler = async () => {
        await logoutUser();
        isSuccess && toast.success(data?.message || "Logged Out successfully");
        navigate('/login');
    }

    return (
        <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>
            {/* DeskTop */}
            <div className='max-w-7xl mx-auto hidden md:flex justify-between item items-center gap-10 h-full'>
                <div className='flex items-center gap-2'>
                    <School size={'30'} />
                    <h1 className='hidden md:block font-extrabold text-2xl'>E-Learning</h1>
                </div>
                {/* User Icon & Dark Mode Icon */}
                <div className='flex items-center gap-5'>
                    {
                        user ? (<DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar>
                                    <AvatarImage src={user.photoUrl || "https://github.com/shadcn.png"} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem><Link to='my-learning'>My Learning</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link to='profile'>Edit Profile</Link></DropdownMenuItem>
                                <DropdownMenuItem onClick={logouthandler}>Log Out</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>) : (
                            <div className='flex items-center gap-2'>
                                <Button variant="outline">Login</Button>
                                <Button>Signup</Button>
                            </div>
                        )
                    }
                    <DarkMode />
                </div>
            </div>
            {/* Mobile Device */}
            <div className='flex md:hidden items-center justify-between px-4 h-full'>
                <h1 className='font-extrabold text-2xl'>E-Learning</h1>
                <MobileNavbar />
            </div>
        </div>
    )
}

export default Navbar;

const MobileNavbar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                {/* <div size='icon' className='rounded-full bg-gray-200 hover:bg-gray-200' variant='outline'> */}
                <Menu />
                {/* </div> */}
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                <SheetHeader className='flex flex-row items-center justify-between mt-10'>
                    <SheetTitle className='font-bold'>E - Learning</SheetTitle>
                    <DarkMode />
                </SheetHeader>
                <nav className='flex flex-col items-center justify-between space-y-4'>
                    <span>Dashboard</span>
                    <span>My Learning</span>
                    <span>Edit Profile</span>
                    <Button>Log Out</Button>
                </nav>
            </SheetContent>
        </Sheet>
    )
}