import React, { Component } from 'react'
import SurahCard from '../Component/SurahList'
import QuranAPI from '../../config/Get'
import Footer from '../Component/Footer';
import NavMenu from '../Component/NavMenu'
import { firebaseAuthentication } from '../../config/firebase'

export default class Home extends Component {
    state = {
        surahList: [],
    }

    getSurahList() {
        QuranAPI.getSurahList().then(result => {
            this.setState({
                surahList: result.data,
            })
        })
    }

    handleDetail = (id) => {
        this.props.history.push(`/surat/${id}`)
    }

    componentDidMount() {
        firebaseAuthentication.onAuthStateChanged((user) => {
            if (!user) {
                this.props.history.push('/login')
            }
        })

        this.getSurahList()
    }

    handleLogOut = () => {
        firebaseAuthentication.signOut()
    }
    render() {
        const { surahList } = this.state
        return (
            <section>
                <NavMenu />
                {/* <div className="container mt-4">
                    <form className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search Surah" aria-label="Username" aria-describedby="basic-addon1" />
                        <span className="input-group-text" id="basic-addon1"><i className='bx bx-search-alt' ></i></span>
                    </form>
                </div> */}
                <div className="container mt-4">
                    {surahList.map(surah => {
                        return <SurahCard
                            key={surah.number}
                            number={surah.number}
                            name={surah.name.short}
                            nameTranslation={surah.name.translation.id}
                            names={surah.name.transliteration.id}
                            detail={this.handleDetail}
                            numberOfAyahs={surah.numberOfVerses}
                        />
                    })}
                </div>
                <Footer />
            </section>
        )
    }
}