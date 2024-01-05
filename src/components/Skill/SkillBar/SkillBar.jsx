import './SkillBar.css'

function SkillBar({skill, percentage}){

    percentage += '%';
    return (
        <>
            <div className='skill-bar'>
                <p>{skill}</p>

                <div className='skill-bar-layer'>
                    <div className='skill-bar-fill' style={{width: percentage}}></div>
                </div>

                <span>{percentage}</span>
            </div>
        </>
    )
}

export default SkillBar