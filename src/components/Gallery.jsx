import React, { useState } from "react";
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import imag1 from "../assets/Gallery/i1.jpeg";
import imag2 from "../assets/Gallery/i2.jpg";
import imag3 from "../assets/Gallery/i3.jpg";
import imag4 from "../assets/Gallery/i4.jpg";
import imag5 from "../assets/Gallery/i5.jpeg";
import imag6 from "../assets/Gallery/i6.jpeg";
import imag7 from "../assets/Gallery/i7.jpg";
import imag8 from "../assets/Gallery/i8.jpg";
import imag9 from "../assets/Gallery/i9.jpeg";
import imag10 from "../assets/Gallery/i10.jpg";
import imag11 from "../assets/Gallery/i11.jpeg";
import imag12 from "../assets/Gallery/i12.png";
import imag13 from "../assets/Gallery/i13.jpg";
import imag14 from "../assets/Gallery/i14.jpg";
import imag15 from "../assets/Gallery/i15.jpeg";
import imag16 from "../assets/Gallery/i16.png";
import imag17 from "../assets/Gallery/i17.jpeg";
import imag18 from "../assets/Gallery/i18.jpeg";
import imag19 from "../assets/Gallery/i19.jpg";
import imag20 from "../assets/Gallery/i20.jpeg";
import imag21 from "../assets/Gallery/i21.jpeg";
import imag22 from "../assets/Gallery/i22.jpg";
import imag23 from "../assets/Gallery/i23.png";

import "../components/Styles/gallery.css";
import Navbar from "./Navbar";

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: imag1,
            caption: "Kokrajhar Orphan Centre Visit to distribute needy material to the children",
        },
        {
            id: 2,
            imgSrc: imag2,
            caption: "Visited Nakkati hill bongaigaon with a group of mates",
        },
        {
            id: 3,
            imgSrc: imag3,
            caption: "A pic with RNM Sir Theory of computation class ",
        },
        {
            id: 4,
            imgSrc: imag4,
            caption: "All Tech Clubs together in the Bodoland International Knowledge Fest",
        },
        {
            id: 5,
            imgSrc: imag5,
            caption: "IoT course group pic with Pranav Singh",
        },
        {
            id: 6,
            imgSrc: imag6,
            caption: "Participated in Poem Recitation competition during cultural fest (Ecstacy'22)",
        },
        {
            id: 7,
            imgSrc: imag7,
            caption: "Stall of Coding society of CITK with faculty mentor in the BIKF event",
        },
        {
            id: 8,
            imgSrc: imag8,
            caption: "Demonstrating the stall visiors about Coding",
        },
        {
            id: 9,
            imgSrc: imag9,
            caption: "My Major Project Group of the college after the presentation",
        },
        {
            id: 10,
            imgSrc: imag10,
            caption: "Bootcamp event on C/C++ Programming by Coding Club CITK",
        },
        {
            id: 11,
            imgSrc: imag11,
            caption: "Shopping of Puja vacation",
        },
        {
            id: 12,
            imgSrc: imag12,
            caption: "Inauguration cum  Orientation event of Coding Society of CITK lead by me",
        },
        {
            id: 13,
            imgSrc: imag13,
            caption: "Giving orientation about Coding Club to the student's",
        },
        {
            id: 14,
            imgSrc: imag14,
            caption: "On the campus of Himalayan mountaining Institue Darjeeling",
        },
        {
            id: 15,
            imgSrc: imag15,
            caption: "At Brahmaputra River front museum Guwahati (Assam)",
        },
        {
            id: 16,
            imgSrc: imag16,
            caption: "With the Group of student's from CITK in Interation program with CM of Assam at IT Park Kokrajhar",
        },
        {
            id: 17,
            imgSrc: imag17,
            caption: "In the Cultural fest of College named Ecstacy",
        },
        {
            id: 18,
            imgSrc: imag18,
            caption: "Representing Coding Club as a Secretary",
        },
        {
            id: 19,
            imgSrc: imag19,
            caption: "As a Campus Ambassador of GeeksforGeeks for CITK",
        },
        {
            id: 20,
            imgSrc: imag20,
            caption: "All Clubs Together with the Dean AER & Faculty Incharge of Tech Board",
        },
        {
            id: 21,
            imgSrc: imag21,
            caption: "Workshop on python prgramming during Tech Fest (Techcracy)",
        },
        {
            id: 22,
            imgSrc: imag22,
            caption: "Certificate distribution of Coding competition by Coding Club",
        },

    ]

    const [model, setModel] = useState(false);
    const [tempImgIndex, setTempImgIndex] = useState(0);

    const openModal = (index) => {
        setTempImgIndex(index);
        setModel(true);
    };

    const closeModal = () => {
        setModel(false);
    };

    const nextImg = () => {
        const nextIndex = (tempImgIndex + 1) % data.length;
        setTempImgIndex(nextIndex);
    };

    const prevImg = () => {
        const prevIndex = (tempImgIndex - 1 + data.length) % data.length;
        setTempImgIndex(prevIndex);
    };

    return (
        <>
            {/* Assume Navbar component is correctly implemented */}
            <Navbar />
            <div className={model ? 'model open' : 'model'}>
                <img src={data[tempImgIndex]?.imgSrc} alt="enlarged" />
                {/* CloseIcon component to close the modal */}
                <CancelPresentationIcon onClick={closeModal} />
                <p>{data[tempImgIndex]?.caption}</p>
                {/* Navigation for previous and next images */}
                <div className="nav-buttons">
                        <button className="prev-btn" onClick={prevImg}>Prev</button>
                        <button className="next-btn" onClick={nextImg}>Next</button>
                </div>
            </div>
            <div style={{ marginTop: "10px" }} className="gallery">
                {data.map((item, index) => (
                    <div className="pics" key={index} onClick={() => openModal(index)}>
                        <img src={item.imgSrc} style={{ width: '100%' }} alt={`img-${item.id}`} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;