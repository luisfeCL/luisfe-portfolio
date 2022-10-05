import './footer.css'


export default function Footer(){
    return(
        <footer className='container element'>
            <h3 className='subtitle'>You can also find me on:</h3>
            <ul>
                <li className='text ssnn'><a className='link' href='x'>Github</a></li>
                <li className='text ssnn'><a className='link' href='x'>LinkedIn</a></li>
                <li className='text ssnn'><a className='link' href='x'>Twitter</a></li>
            </ul>
            <h4 className='signature'>Designed, coded & animated by me ✌️</h4>
        </footer>
    )
}