import './Skills.css'
import SkillTitle from '../../components/Skill/SkillTitle/SkillTitle'
import SkillBar from '../../components/Skill/SkillBar/SkillBar'
import HeaderRouter from '../HeaderRouter'

const skillBarInfo = [
    {
        name: 'HTML - 5',
        percentage: '80'
    },
    {
        name: 'CSS - 3',
        percentage: '75'
    },
    {
        name: 'Bootstrap',
        percentage: '60'
    },
    {
        name: 'Javascript',
        percentage: '50'
    },
    {
        name: 'Adobe Photoshop',
        percentage: '75'
    },
    {
        name: 'Adobe Illustartor',
        percentage: '60'
    },
]

function Skill(){
    return(
        <>
            <HeaderRouter />
            <div className='skill'>
                <SkillTitle />

                <div className='skill-set'>
                    {
                        skillBarInfo.map((item) => {
                            return (
                                <SkillBar key={item.name} skill={item.name} percentage={item.percentage} />            
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Skill