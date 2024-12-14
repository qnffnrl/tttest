import React, {useState} from 'react';
import Modal from "./Modal.jsx";

function PortfolioCard(props) {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            <button onClick={openModal} className="portfolio-card d-flex flex-direction-column align-items-center justify-content-between">
                <div className="d-flex justify-content-center align-items-center w-100 font-size-small project-header bold"><span className="gradient">@&nbsp;</span>Project&nbsp;{props.numbering}</div>
                <p><span className="gradient bold">{props.subHeader}</span></p>
                <img className="project-image border-white" src={props.imgPath} />
                <div className="d-flex justify-content-end align-items-center w-100 project-footer"><span className="gradient bold">@onClick!</span></div>
            </button>
            <Modal open={modalOpen} close={closeModal} header={props.headerName}>
                <div>Preview</div>
                <img className="img-in-modal border-white" src={props.imgPath}/>
                <ul className="d-flex justify-content-around align-items-center modal-ul">
                    {/*<li><a target="_blank" href={props.linkPath}><img src={process.env.PUBLIC_URL + "/icons/icon-monitor.png"}/></a></li>*/}
                    {/*<li><a target="_blank" href={props.githubPath}><img src={process.env.PUBLIC_URL + "/icons/icon-github.png"}/></a></li>*/}
                </ul>
                <div className="d-flex justify-content-around w-100">
                    <p className="w-50 text-center font-size-small"><span className="gradient">Link Page{props.comment}</span></p>
                    <p className="w-50 text-center font-size-small"><span className="gradient">GitHub</span></p>
                </div>
            </Modal>
        </>
    );
}

export default PortfolioCard;