import '../components/Service/Service.css'
import ServiceCard from '../components/Service/ServiceCard/ServiceCard'
import ServiceTitle from '../components/Service/ServiceTitle/ServiceTitle'

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