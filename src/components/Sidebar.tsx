import Logo from "./Logo";
import Menu from "./Menu";

export default function Sidebar() {
    return (
        <div className="flex flex-col gap-5 bg-zinc-800 max-h-screen">
            <Logo />
            <Menu />
        </div>
    )
}