import Unsplash from 'unsplash-js'

let unsplash: Unsplash

export class UnsplashService {
    constructor() {
        if (!unsplash) {
            unsplash = new Unsplash({
                accessKey: 'aDZn2nTzjWs5_KvMwjxJHAp2nEY8Kc1kqrgaeZETEyU',
                secret: 'mg3LuWqb3lNMe6FcFdCgqDP2cuEsTlnEvYgzrFuoZY8',
                timeout: 500 // values set in ms
            })
        }
    }

    public getRandomPhoto({ width, height } = { width: '', height: '' }) {
        return unsplash.photos.getRandomPhoto().then(data => {
            console.log(data)
        })
        // .then(data => data.urls.raw)
        // .then(url => {
        //     const w = width ? '&w=' + width : ''
        //     const h = height ? '&h=' + height : ''
        //     console.log(`${url}${w}${h}`)
        //     return `${url}${w}${h}`
        // })
    }
}
