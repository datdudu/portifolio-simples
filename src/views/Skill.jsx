import '../components/Skill/Skill.css'
import SkillTitle from '../components/Skill/SkillTitle/SkillTitle'
import SkillBar from '../components/Skill/SkillBar/SkillBar'

function Skill(){
    return(
        <>
            <div className='skill'>
                <SkillTitle />

                <div className='skill-set'>
                    <SkillBar skill={"HTML - 5"} percentage={80} />
                    <SkillBar skill={"CSS - 3"} percentage={75} />
                    <SkillBar skill={"Bootstrap"} percentage={60} />
                    <SkillBar skill={"JavaScript"} percentage={50} />
                    <SkillBar skill={"Adobe Photoshop"} percentage={75} />
                    <SkillBar skill={"Adobe Illustrator"} percentage={60} />
                </div>
            </div>
        </>
    )
}

export default Skill