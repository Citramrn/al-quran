import axios from 'axios';

const baseUrl = `https://api.quran.gading.dev`;

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/${path}`)
            .then((result) => {
                resolve(result.data) //result.data
            },
                (error) => {
                    reject(error)
                })
    })

    return promise;
}

export default Get;

//https://quran-api-id.vercel.app/surahs/1
//http://api.alquran.cloud/v1/