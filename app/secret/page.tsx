import {lusitana} from "@/app/ui/fonts";

export default function Page() {
    return <div className="flex m-11 h-screen items-center justify-center bg-pink-300 shadow-lg shadow-indigo-500/50">
        <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>Lorna you will be the best mum and I love you</p>
    </div>;
}