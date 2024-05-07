import { Link } from "react-router-dom";

function NavBar(){
    return (
        <>
         <div className='w-full bg-black text-white flex justify-center py-4'>
              <div className="container flex justify-between text-lg">
                <div className='text-2xl font-bold uppercase'>Loja de Games</div>
    
                <div className='flex gap-4'>
                  <div className='hover:underline'>Produtos</div>
                  <div className='hover:underline'>Temas</div>
                  <div className='hover:underline'>Cadastrar tema</div>
                  <div className='hover:underline'>Perfil</div>
                  <div className='hover:underline'>Sair</div>
                </div>
              </div>
            </div>
        </>
      )
    
}

export default NavBar;