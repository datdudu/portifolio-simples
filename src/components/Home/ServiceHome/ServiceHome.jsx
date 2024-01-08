import './ServiceHome.css'
import ServiceTitle from '../../Service/ServiceTitle/ServiceTitle'
import ServiceCard from '../../Service/ServiceCard/ServiceCard'

function ServiceHome(){
    return(
        <>
            <div id='ServiceSection' className='service'>
                <ServiceTitle />

                <div className='service-cards'>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard /> 
                </div>
            </div>
        </>
    )
}

export default ServiceHome