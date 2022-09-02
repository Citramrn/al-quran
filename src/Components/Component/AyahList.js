import AyahCard from './AyahCard'
import React from 'react';
import NavMenu from './NavMenu'
import Footer from './Footer'
import QuranAPI from '../../config/Get'

class AyahList extends React.Component {
    state = {
        ayahList: [],
    }

    getSurah() {
        let id = this.props.match.params.id

        QuranAPI.getSurah(id).then(result => {
            let data = result.data

            this.setState({
                ayahList: data.verses
            })
        })
    }

    componentDidMount() {
        this.getSurah();
    }
    render() {
        const surah = this.state;

        return (
            <section>
                <NavMenu />
                <div className="container mt-4">
                    {
                        surah.ayahList.map(ayah => {
                            return <AyahCard
                                key={ayah.number.inSurah}
                                ayahNumber={ayah.number.inSurah}
                                ayah={ayah.text.arab}
                                translation={ayah.translation.id}
                                text={ayah.text.transliteration.en}
                            />
                        })
                    }
                </div>
                <Footer />
            </section>
        )
    }
}

export default AyahList;
