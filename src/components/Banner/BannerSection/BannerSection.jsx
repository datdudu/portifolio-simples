import  '../BannerSection/BannerSection.css'
import FacebookIcon from '../../../assets/facebook.png'
import InstagramIcon from '../../../assets/instagramIcon.png'
import GitHubIcon from '../../../assets/github.png'
import LinkedinkIcon from '../../../assets/linkedin.png'
import ButtonGeneric from '../../GeneralComponents/ButtonGeneric/ButtonGeneric'
function BannerSection(){
    return(
        <>  
            <div className='banner-section'>
                <h3>Hi, It's me</h3>
                <h1>MD RIED MIA</h1>
                <h2>And I'm a <span className='orange'>Frontend Developer</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
dolorum ullam molestias autem deleniti iure earum!</p>
                <ul className="menu-social-media">
                    <li><a href="#"><img src={FacebookIcon} alt="" /></a></li>
                    <li><a href="#"><img src={LinkedinkIcon} alt="" /></a></li>
                    <li><a href="#"><img src={GitHubIcon} alt="" /></a></li>
                    <li><a href="#"><img src={InstagramIcon} alt="" /></a></li>
                </ul>
                <ButtonGeneric extra_style="background-orange" label="Curriculum" />
            </div>
            
        </>
    )
}

export default BannerSection