import './BannerHome.css'
import BannerSection from '../../Banner/BannerSection/BannerSection'
import BannerImage from '../../Banner/BannerImage/BannerImage'

function BannerHome(){
    return(
        <>
            <div id='BannerSection' className='banner'>
                <BannerSection />
                <BannerImage />
            </div>
        </>
    )
}

export default BannerHome