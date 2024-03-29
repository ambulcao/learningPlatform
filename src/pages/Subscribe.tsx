import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { Logo } from "../components/Logo";

export function Subscribe() {

    const CREATE_SUBSCRIBER_MUTATION = gql`
        mutation CreateSubscriber($name: String!, $email: String!) {
            createSubscriber(data: {name: $name, email: $email}) {
                id
            }
        }
    `

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    function handleSubscribe(event: FormEvent) {
        event.preventDefault();
        
        createSubscriber({
            variables: {
                name,
                email,
            }
        })
    }

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
                
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                    <input 
                        className="bg-gray-900 rounded px-5 h-14"
                        type="text" 
                        placeholder="Seu nome completo" 
                        onChange={event => setName(event.target.value)}
                        />
                    <input 
                        className="bg-gray-900 rounded px-5 h-14"
                        type="email" 
                        placeholder="Digite seu e-mail"
                        onChange={event => setEmail(event.target.value)}
                    />

                    <button 
                        type="submit" 
                        className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
                    >
                        Acesso
                    </button>
                </form>
            </div>
        </div>
        
        <img src="/src/assets/background-surf.jpg" className="mt-10" alt=""/>
       </div>
    );
}