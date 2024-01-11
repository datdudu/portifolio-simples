import './Service.css'
import ServiceTitle from '../../components/Service/ServiceTitle/ServiceTitle'
import ServiceCard from '../../components/Service/ServiceCard/ServiceCard'

function Service(){
    return(
        <>
            <div className='service'>
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

export default Service