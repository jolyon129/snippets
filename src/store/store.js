import  EventEmitter from 'events'
import  {Promise}  from 'es6-promise'

const CAT_LISTS_API_URL = 'https://api.github.com/repos/jolyon129/snippets/contents/_snippets_md'
const POST_LISTS_API_URL = 'https://api.github.com/repos/jolyon129/snippets/contents/_snippets_md'

let store = new EventEmitter()

store.getCategoryList = (page = 1) => {
    return new Promise((resolve, reject)=> {
        if (sessionStorage && sessionStorage.getItem('cat_lists')) {
            // read data from sessionStorage
            resolve(JSON.parse(sessionStorage.getItem('cat_lists')))
        } else {
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
/**
 * @todo 封装SessionStorage操作
 * @param cat
 * @param page
 * @returns {*}
 */
store.getPostList = (cat, page = 1)=> {
    return new Promise((resolve, reject) => {
        let post_lists =sessionStorage? JSON.parse(getItemSessionStorage('post_lists')): '{}'
        console.log('gan');
        if(post_lists[cat]){
            resolve(JSON.parse(post_lists[cat]))
        }else{
            let xhr = new XMLHttpRequest()
            xhr.open('GET', POST_LISTS_API_URL + '/' + cat)
            xhr.onload = () => {
                let res = xhr.responseText
                if(!sessionStorage.getItem('post_lists')){
                    let new_post_lists ={}
                    new_post_lists[cat] = res
                    sessionStorage.setItem('post_lists',JSON.stringify(new_post_lists))
                }else{
                    let post_lists = JSON.parse(getItemSessionStorage('post_lists'))
                    post_lists[cat] =res
                    sessionStorage.setItem('post_lists',JSON.stringify(post_lists))
                }
                resolve(JSON.parse(res))
            }
            xhr.onerror = () => reject
            xhr.send()
        }
    })
}

//never return null when handling storage
function getItemSessionStorage (key) {
    if(sessionStorage && sessionStorage.getItem(key)){
        return sessionStorage.getItem(key)
    }else{
        return '{}'
    }
}


export default store
