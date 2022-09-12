import Worker from '../Worker';
import './Team.css';

const Time = (props) => {
    return (
        (props.workers.length > 0) && <section className="team" style={{ backgroundColor: props.secondColor }}>
            <h3 style={{ borderBottomColor: props.primaryColor }}>{props.name}</h3>
            <div className='workers'>
                {props.workers.map(worker => <Worker
                    key={worker.name}
                    name={worker.name}
                    position={worker.position}
                    image={worker.image}
                    primaryColor={props.primaryColor} />)}
            </div>
        </section>
    );
}

export default Time;