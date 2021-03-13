import PropTypes from 'prop-types';
const Button = ({color,onClick,showAdd}) => {
    return (
        <button style={{backgroundColor:color}} className='btn' onClick={onClick}>{showAdd?"Close":"Add"}</button>
    )
}

Button.defaultProps={
    title:"Add task",
    color:"red"
}
Button.propTypes={
    title:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
}
export default Button
