import  EventEmitter from 'events'
import  {Promise}  from 'es6-promise'

const  CAT_LISTS_API_URL = 'https://api.github.com/repos/jolyon129/snippets/contents/_snippets_md'

let store = new EventEmitter()

store.getCategoryList = (page = 1) => {
    return new Promise((resolve, reject)=> {
        if (sessionStorage && sessionStorage.getItem('cat_lists')) {
            // read data from sessionStorage
            resolve(JSON.parse(sessionStorage.cat_lists))
        }else{
            let xhr = new XMLHttpRequest()

            xhr.open('GET', CAT_LISTS_API_URL)
            xhr.onload = () => {
                let res = xhr.responseText
                // cach the data
                sessionStorage.setItem('cat_lists', res);

                resolve(JSON.parse(res))
            }
            xhr.onerror = () => reject
            xhr.send()
        }
    })
}


export default store
