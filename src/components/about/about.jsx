import './about.css'

export default function About(){

    document.body.style.setProperty('--bg-color', 'hsl(60,7%,95%)')
    document.body.style.setProperty('--text-color', 'hsl(248,78%,25%)')

    return(
        <section className='container'>
            <h1 className="title">A newbie frontend Developer.</h1>
            <article className='about__content element '>
                    <img className='photo' src="/foto.png" alt="" />
                        <p className="text about__text">
                            Welcome to my portfolio!
                            I’m Luisfe, a Frontend Developer and Motion Graphic Designer based in Valencia, Spain.
                            Here you can find a collection of my recents projects.
                            And if you want to talk (or hire me) don’t doubt and write me!!<br/>
                        
                            <button>asldkfhjañlsk</button>
                        </p>
                        
                </article>
        </section>
    )
}