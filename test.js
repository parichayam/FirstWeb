import React from "react"

export default function test() {
  return (
    <div className="main">
        <nav>
            <div className='logo'>
                <h4>apolo</h4>
            </div>
            <ul className='navbar'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Features</a></li>
                <li><a href='#'>Screenshots</a></li>
                <li><a href='#'>Pricing</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </nav>
        <header className="container">            
                <div className="info">
                    <h1>Make cool Landing pages with Apolo</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero dolor, viverra id arcu vel, ullamcorper hendrerit justo. Donec tristique sem nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p> 
                    <p>* Available on iPhone, iPad and all Android devices</p>                      
                </div>   
                <div className="phone">
                    <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt=""></img>
                </div>              
        </header>

    </div>
  )
}
