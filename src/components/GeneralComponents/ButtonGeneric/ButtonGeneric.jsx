import './ButtonGeneric.css'


function ButtonGeneric({extra_style, label}){
    
    return (
        <>
            <button className={`button-generic ${extra_style}`}>{label}</button>
        </>
    )
}

export default ButtonGeneric
