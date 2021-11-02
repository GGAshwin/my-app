//rfc snippet used for template
import React,{useState} from 'react'

export default function About() {
    const [dark, setdark] = useState({
        color:'black',
        backgroundColor:'white'
    })
    const [btn, setbtn] = useState('Enable dark mode')

    const toggleStyle=()=>{
        if(dark.color==='black'){
            setdark({
                color:'white',
                backgroundColor:'black'
            })
            setbtn('disable dark mode')
        }
        else{
            setdark({
                color:'black',
                backgroundColor:'white'
            })
            setbtn('enable dark mode')
        }
    }
    return (
        <div style={dark}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusantium dicta aut, quaerat nostrum, itaque vel veniam, quod consequuntur mollitia hic nisi. Suscipit sunt quisquam voluptate minus voluptates, aliquam maiores quae reprehenderit magnam repudiandae temporibus harum atque voluptatibus id dolore porro incidunt rerum corporis eligendi iusto, doloremque amet. Ducimus, repellendus debitis? A doloribus rem quaerat quas natus voluptate quod totam rerum impedit eveniet! Impedit consequatur, suscipit voluptas ipsum quidem architecto libero, quod iure odio doloribus, optio sapiente maxime harum commodi tempora consectetur omnis corporis natus tempore. Et reiciendis, corporis adipisci eum id blanditiis cupiditate iste voluptatum minus suscipit nulla ut.</p>
            <button classNamea="btn" onClick={toggleStyle}>{btn}</button>
        </div>
    )
}
