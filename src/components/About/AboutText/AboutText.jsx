import './AboutText.css'
import ButtonGeneric from '../../GeneralComponents/ButtonGeneric/ButtonGeneric'
function AboutText()
{
    return(
        <>
            <div className='about-text'>
                <h2 className='about-text-title'>Frontend Developer & Graphic Designer</h2>

                <div className='about-text-information'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis reprehenderit dolorem odio ab accusantium aliquid exercitationem voluptates animi, dolores pariatur aliquam dolore molestias. Nulla quis dolorem vero culpa ipsa excepturi omnis, maxime voluptatibus, veniam repudiandae, facilis deserunt quod provident cumque at. Quidem, perferendis possimus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptate perferendis fugit iure quo maiores distinctio aliquid ea.</p>
                </div>

                <ButtonGeneric extra_style="background-white" label="Read More..."/>
            </div>
        </>
    )
}

export default AboutText