import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import Check from './Check';

export default function Desc() {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
    }

 
    return (
        <>
        <div className={isActive ? 'active-tab-test': 'active-tab-description' } >
            <div className="text">
                Aliqua magna amet irure esse velit velit ullamco dolore occaecat culpa proident. 
                Proident consectetur qui dolor sunt aliqua labore consectetur magna irure minim sint consectetur. 
                Est adipisicing anim aliqua officia duis pariatur voluptate elit commodo non ad enim nostrud exercitation. 
                Adipisicing culpa culpa est consequat laboris nulla Lorem aliquip laboris cupidatat elit sunt sint. 
                Labore sunt esse deserunt nisi elit ex anim quis mollit nostrud.

                Qui sint aliqua consectetur laboris dolore non pariatur in duis proident. Cillum minim eiusmod in exercitation 
                ex ad ut qui nulla elit irure culpa. Anim aliquip id dolore sit ad velit ipsum. Labore ex proident velit 
                aute anim culpa officia duis aute. Commodo labore tempor est incididunt.

                Quis esse culpa eiusmod pariatur culpa do. Deserunt incididunt consequat consequat nisi laboris. 
                Labore enim reprehenderit ad Lorem consequat. Consectetur nostrud veniam labore cupidatat id duis duis 
                tempor ex. Tempor ad enim qui non cupidatat quis tempor non in voluptate ex. Nostrud ullamco amet ex dolor 
                pariatur mollit veniam ipsum.

                Reprehenderit aliquip quis excepteur non irure. Mollit cupidatat voluptate laborum do esse enim voluptate 
                quis ad aliqua do et id. Commodo laborum amet ullamco in laborum minim consectetur labore culpa dolore. 
                Dolor anim dolor laborum eiusmod anim ipsum dolor enim eiusmod mollit reprehenderit officia excepteur. E
                xcepteur do laborum non velit sint dolore enim dolore labore minim fugiat est adipisicing.

                Sunt exercitation magna aute occaecat id sit duis velit tempor magna. Incididunt mollit enim sit in
                 consequat nisi consequat excepteur duis velit. Eiusmod anim reprehenderit veniam proident Lorem aute et 
                 deserunt. Quis ad cillum pariatur pariatur id anim ad voluptate officia sit voluptate pariatur nulla anim. 
                 Voluptate et ea esse nisi reprehenderit id occaecat incididunt excepteur enim est fugiat eiusmod. 
                 Id et ut commodo pariatur cillum id.

                Nulla exercitation enim adipisicing aliquip laboris amet in duis eiusmod commodo ex proident nostrud 
                voluptate. Veniam ut sint ad incididunt amet ut Lorem. Exercitation nisi anim labore cupidatat proident duis. 
                Consequat nostrud deserunt eiusmod minim incididunt eu tempor nostrud. Mollit commodo mollit in veniam dolor 
                occaecat velit eiusmod excepteur culpa ut labore.

                Officia veniam cillum duis occaecat est. Velit officia anim voluptate sit quis nisi qui ipsum minim. 
                Veniam aliqua est laboris excepteur magna non consectetur. Quis tempor enim cupidatat eu sint cillum 
                veniam proident amet mollit. Velit dolor adipisicing sint sunt cupidatat exercitation commodo amet culpa 
                incididunt Lorem aliquip nulla.
                </div>
                <div className="test">
                    <h4>Как правильно обжать витую пару по схеме Т-568B</h4>
                    <Check/>                              
                </div>
            
            </div>
            <Button variant="contained" className={isActive ? 'active-tab-test': 'active-tab-description' } onClick={handleClick} className="button">Пройти тест</Button>
        </>
    )
}
