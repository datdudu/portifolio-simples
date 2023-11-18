import './BannerImage.css'
import BannerImagePNG from '../../../assets/BannerImage.webp'

function BannerImage(){
    
    return (
        <>
            <img src={BannerImagePNG} alt="" className='banner-image' />
        </>
    )
}

export default BannerImage
