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
                {props.imgPath}
            </Modal>
        </>
    );
}

export default PortfolioCard;