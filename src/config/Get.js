import Get from './Data';

const getSurahList = () => Get('surah/')
const getSurah = (id) => Get(`surah/${id}`)
const getAyah = (id, idAyah) => Get(`surah/${id}/${idAyah}`)

const QuranAPI = {
    getSurahList,
    getSurah,
    getAyah
}

export default QuranAPI

