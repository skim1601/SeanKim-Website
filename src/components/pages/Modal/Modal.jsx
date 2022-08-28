import './Modal.scss';
import BriefDescription from './BriefDescription';
import ImageSlide from '../../../assets/ImageSlide/ImageSlide';
import { xBar } from '../../../assets/GeneralLogos';
import ProjectLinks from './ProjectLinks';
import ProjectSetUp from './ProjectSetUp';
import SetOverflow from './SetOverflow';

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal__bar">
                <span className="modal__bar-title">{props.title}</span>
                <span className="modal__bar-title-alt">{props.alt}</span>
                <img src={xBar} alt="&times;" onClick={() => {
                    props.update(false); 
                    SetOverflow(false);
                }}/>
            </div>
            <div className="modal__contents">
                <div className="modal__image">
                    { props.image === undefined 
                        ? <ImageSlide img={props.images}/>
                        : <img className="experience-logo" src={props.image} alt=""/> 
                    }
                </div>
                <div className="brief-description">
                    <BriefDescription {...props}/>
                    <p>{props.children}</p>
                </div>
            </div>
            <ProjectLinks {...props}/>
            <ProjectSetUp {...props}/>
        </div>
    );
}

export default Modal;