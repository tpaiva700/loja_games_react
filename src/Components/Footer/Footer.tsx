import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer(){

    return(
       <>
            <div className="flex justify-center bg-black text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">Loja de Games</p>
                    <p className="text-lg">Acesse nossas redes </p>
                    <div className="flex gap-6">
                        <LinkedinLogo size={40} weight="bold" />
                        <InstagramLogo size={40} weight="bold"/>
                        <FacebookLogo size={40} weight="bold"/>
                        <GithubLogo size={40} weight="bold"/>
                    </div>
                </div>
            </div>
       </> 
    );
}

export default Footer;