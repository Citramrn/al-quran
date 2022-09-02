import React from 'react';

const AyahCard = (props) => {
    const { text, ayah, ayahNumber, surahNumber, translation, audio } = props
    return (
        <section>
            <div className='surah-card' id={`${surahNumber}-${ayahNumber}`}>
                <div className="surah-number-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.84 282.84">
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path d="M141.42,9.9l36.47,36.47,2.05,2.05h54.48V102.9l2.05,2,36.47,36.47-36.47,36.47-2.05,2.05v54.48H179.94l-2.05,2.05-36.47,36.47L105,236.47l-2-2.05H48.42V179.94l-2.05-2.05L9.9,141.42,46.37,105l2.05-2V48.42H102.9l2-2.05L141.42,9.9m0-9.9L100,41.42H41.42V100L0,141.42l41.42,41.42v58.58H100l41.42,41.42,41.42-41.42h58.58V182.84l41.42-41.42L241.42,100V41.42H182.84L141.42,0Z" />
                            </g>
                        </g>
                    </svg>
                    <p>{ayahNumber}</p>
                </div>

                <div className="card card-container border-0">
                    <div className="card-body">
                        <p className='text-ends text-end'> {audio ?
                            <i className='bx bx-play-circle'></i> :
                            <i className='bx bx-pause-circle'></i>}{ayah} </p>
                        <div className="surah-names">
                            <p>{translation}</p>
                        </div>
                        <p className='text-end'>{text} </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AyahCard