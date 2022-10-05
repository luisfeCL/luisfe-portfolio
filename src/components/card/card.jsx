import './card.css'

export default function Card(props){
    return(
        <div className="project element">
            <img className='icon' src={props.icon} alt="" />
            <div className="description">
                <h className="description__name" >{props.title}</h>
                <p className="description__text text">
                    {props.description}
                </p>
                <a target="_blank" href={props.link} className="description__nav text"> 
                    Open project
                    <svg className='description__nav--icon' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 3.5V5.5H18.09L8.26 15.33L9.67 16.74L19.5 6.91V10.5H21.5V3.5M19.5 19.5H5.5V5.5H12.5V3.5H5.5C4.39 3.5 3.5 4.4 3.5 5.5V19.5C3.5 20.0304 3.71071 20.5391 4.08579 20.9142C4.46086 21.2893 4.96957 21.5 5.5 21.5H19.5C20.0304 21.5 20.5391 21.2893 20.9142 20.9142C21.2893 20.5391 21.5 20.0304 21.5 19.5V12.5H19.5V19.5Z" fill="#F4F1DE"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}