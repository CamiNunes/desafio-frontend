import Logo from "./Logo";
import Menu from "./Menu";

export default function Sidebar() {
    return (
        <div className="flex flex-col gap-5 bg-zinc-800">
            <Logo />
            <Menu />
        </div>
    )
}