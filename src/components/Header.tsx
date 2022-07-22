import { Logo } from "./Logo";

export function Header() {
    return (
        <header className="w-full py-3 flex items-center justify-center bg-gray-300 border-b border-gray-300">
            <Logo/>
        </header>
    )
}