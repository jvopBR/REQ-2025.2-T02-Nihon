import Form from "@/components/adminPages/FormNihon";




export default function Home() {
    return(
        <div className="h-full w-full flex flex-col items-center justify-center gap-4 bg-[#ED3135] px-20">
            <div className="bg-[#F2F2F2] mx-20 flex flex-col justify-center items-center h-screen w-full">
                <div className="h-[150px] w-[150px] rounded-full bg-[#ED3135] drop-shadow-2xl"></div>
                <h1 className="text-black text-[35px]">Administrativo</h1>
                <Form/>
            </div>
        </div>
    );
}