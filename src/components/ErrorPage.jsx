import './ErrorPage.css'

import { MdError } from "react-icons/md";

function ErrorPage(){
    return(
        <div className="ErrorPage">
            <div className='aviso'>
                <div>
                    <MdError />
                    <h1>ERRO</h1>
                </div>
                <ul>
                    <li>Recarregue a página</li>
                    <li>Verfique sua conexão</li>
                    <li>Verifique a url</li>
                </ul>
            </div>
        </div>
    )
}

export default ErrorPage