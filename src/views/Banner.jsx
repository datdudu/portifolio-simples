import '../components/Banner/Banner.css'
import BannerImage from '../components/Banner/BannerImage/BannerImage'
import BannerSection from '../components/Banner/BannerSection/BannerSection'

function Banner(){
    return (
        <>
            <div className='banner'>
                <BannerSection />
                <BannerImage />
            </div>
        </>
    )
}

export default Banner