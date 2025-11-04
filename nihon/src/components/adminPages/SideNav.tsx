import NavLink from "./NavLinks"



export default function SideNav() {
    return(
        <div className="h-screen w-[400px] flex flex-col bg-white p-10 gap-10">
            <h1 className="text-[30px] font-bold text-[#ED3135]">Painel Admin</h1>
            <div className="flex flex-col gap-5">
                <NavLink/>
            </div>
        </div>
    )
}