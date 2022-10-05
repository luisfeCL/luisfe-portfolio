import './home.css'


export default function Home(){

    document.body.style.setProperty('--bg-color', 'hsl(198,100%,13%)')
    document.body.style.setProperty('--text-color', 'hsl(194,49%,90%)')

    return(
        <main className='container'>
            <h1 className='title'>A coder who thinks in design</h1>
            <section className='presentation element'>
                <article className='presentation__content '>
                    <h2 className="subtitle presentation__subtitle">Who I am</h2>
                    <p className="text presentation__text">
                        Welcome to my portfolio!
                        I’m Luisfe, a Frontend Developer and Motion Graphic Designer based in Valencia, Spain.
                        Here you can find a collection of my recents projects.
                        And if you want to talk (or hire me) don’t doubt and write me!!
                    </p>
                </article>
                <hr />
                <article className='presentation__content'>
                    <h2 className="subtitle presentation__subtitle">What I do</h2>
                    <p className="text presentation__text">
                        Welcome to my portfolio!
                        I’m Luisfe, a Frontend Developer and Motion Graphic Designer based in Valencia, Spain.
                        Here you can find a collection of my recents projects.
                        And if you want to talk (or hire me) don’t doubt and write me!!
                    </p>
                </article>
                <hr />
                <article className='presentation__content '>
                    <h2 className="subtitle presentation__subtitle">What I like</h2>
                    <p className="text presentation__text">
                        Welcome to my portfolio!
                        I’m Luisfe, a Frontend Developer and Motion Graphic Designer based in Valencia, Spain.
                        Here you can find a collection of my recents projects.
                        And if you want to talk (or hire me) don’t doubt and write me!!
                    </p>
                </article>
            </section>
        </main>
    )
}