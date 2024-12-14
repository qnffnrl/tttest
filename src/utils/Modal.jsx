import React from 'react';
import "@/asset/css/modal.css"
import { Carousel } from "@material-tailwind/react"
import photos from "../asset/datas/photos.json"

function Modal(props) {

    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const {open, close, header} = props;

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        <span className="gradient">{header}</span>
                        <button className="close" onClick={close}>&times;</button>
                    </header>

                    <main class="dd-flex">
                        <Carousel className="rounded-xl">
                            {
                                photos.map((photo, index) => (
                                    <img
                                        src={photo.url}
                                        alt="image 1"
                                        className="h-full w-full object-cover img-in-modal"
                                    />
                                ))
                            }
                        </Carousel>
                    </main>


                    <footer>
                        <button className="close" onClick={close}>close</button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}

export default Modal;