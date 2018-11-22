import axios from 'axios'
import env from '../config/env'

let util = {

}


const ajaxUrl = env === 'development' ? 'http://127.0.0.1:5000' : 'http://127.0.0.1:5000'


let ajax = axios.create({
    baseURL: ajaxUrl,
    paramsSerializer: function (params) {
        return JSON.parse(JSON.stringify(params))
    },
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS' },
    onDownloadProgress: function (progressEvent) {
        //let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total)
    }
})

util.ajax = ajax
util.ajaxUrl = ajaxUrl

export default util