import './PortfolioProjectPhoto.css'

function PortfolioProjectPhoto({img}){
    return(
        <>
            <img src={img} alt="" className={`portfolio-project-photo`} />
        </>
    )
}

export default PortfolioProjectPhoto