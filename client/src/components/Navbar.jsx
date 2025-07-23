import { School } from 'lucide-react'
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


const Navbar = () => {
    const user = true;
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
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>My Learning</DropdownMenuItem>
                                <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                                <DropdownMenuItem>Log Out</DropdownMenuItem>
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
        </div>
    )
}

export default Navbar;