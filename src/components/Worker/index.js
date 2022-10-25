import './Worker.css'

const Worker = ({ name, position, image, primaryColor }) => {
    return (
        <div className='worker'>
            <div className='header' style={{ backgroundColor: primaryColor }}>
                <img src={image} alt={name} />
            </div>
            <div className='body'>
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    );
}

export default Worker;