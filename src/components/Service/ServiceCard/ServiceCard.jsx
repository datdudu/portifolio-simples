import './ServiceCard.css'
import LaptopImage from '../../../assets/laptop-code.png'
function ServiceCard(){
    return(
        <>
            <div className='service-card'>
                <img src={LaptopImage} alt="" />
                <h3>Web Development</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
            </div>
        </>
    )
}

export default ServiceCard