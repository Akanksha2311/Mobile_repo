import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom' 

export default function Home() {
    return (
        <div>
             <nav class="navbar navbar-light bg-info">
                <span class="navbar-brand mb-0 h1">Mobile App</span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="login">Login<span class="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </nav>
            <h1 id="home">Welcome to my Mobile Store </h1>
           
           <div className="card" style={{width: "23rem"}}>
                <img src="\images\iphone1.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p  class="card-text"><b>Apple</b><br/>website: www.oneplus.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\samsung.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p  class="card-text"><b>Samsung</b><br/>website: www.oneplus.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\nokia1.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p  class="card-text"><b>Nokia</b><br/>website: www.nokia.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\oneplus.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p  class="card-text"><b>One+</b><br/>website: www.oneplus.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\vivo.jpg" class="card-img-top" alt="..."/>
                <div class="card-body" >
                <p  class="card-text"><b>Vivo</b><br/>website: www.vivo.com </p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\oppo.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p  class="card-text"><b>Oppo</b> <br/> website: www.oppo.com</p>
            </div>
            </div>
        </div>
    )
}
