import React from 'react'
import ButtonItem from '../components/ButtonItem';
import ButtonItemTwo from '../components/ButtonItemTwo';
import '../all.css'



class VeganFood extends React.Component{
    render(){
        return(
         <div className="App">
             <header className="App-header">
                 logo
             </header>
        
     
     
        <div>
         <nav className="Nav">
             <ul>
           <li><ButtonItem /></li> 
           <li><ButtonItemTwo /></li>
           </ul>
        </nav>

        <div className="Cont" id="contMenu">
    <p>contenedor</p>
        <ButtonItemTwo />
        <ButtonItemTwo />
        </div>

        <div className="Cont">
            <p>contenedor 2</p>
            <ButtonItemTwo />
        </div>
     </div>
</div>

            )
    }

}

export default VeganFood;