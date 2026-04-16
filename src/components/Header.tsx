import Link from "next/link";
import { shadow } from "@/styles/utils";
import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "@/components/DarkModeToggle";

function Header() {
  const user = null;
  return (
    <header className="bg-popover relative flex h-24 items-center justify-between px-3 sm:px-8"
        style={{
            boxShadow: shadow
        }}
        >
        <div className="text-2xl font-bold">
            Cordinova
        </div>
        <Link href="/">
    
        </Link>
    
    <div className="flex gap-4">
        {user ? (
            "Logout"
        ) : (
            <>
            <Button asChild variant="outline">
                <Link href = "/signup">Sign Up</Link>
            </Button>
            <Button asChild>
                <Link href="/login" >Login</Link>
            </Button>
            </>
        )}
        <DarkModeToggle />
    </div>
    </header>
  )
}

export default Header