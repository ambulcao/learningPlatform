import { Logo } from "../components/Logo";

export function Subscribe() {
    return(
       <div className="min-h-screen bg-blur bg-coverbg-no-repeat flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
            <div className="max-w-[640px]">
                <Logo />

                <h1 className="mt-8 text-[2.5rem] leading-tight flex items-center">
                    <strong className="text-green-300">Treinamento e Evolução</strong>
                </h1>
                <p className="mt-4 text-gray-200 leading-relaxed">
                    Evolua sua forma física diariamente com os treinos preparados exclusimante para o Surf.
                </p>
            </div>
            <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                
                <form action="" className="flex flex-col gap-2 w-full">
                    <input 
                        type="text" 
                        placeholder="Seu nome completo" 
                    />
                    <input 
                        type="email" 
                        placeholder="Digite seu e-mail"
                    />
                </form>
            </div>
        </div>
        
        <img src="/src/assets/background-surf.jpg" className="mt-10" alt=""/>
       </div>
    );
}