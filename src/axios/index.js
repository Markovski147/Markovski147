import axios from 'axios';
import { authActions } from '../store/slices/authLogin';
import { selectAccessToken } from '../store/selectors/authSelectors.js';

const BASE_URL = 'https://e-commerce-nest-app.herokuapp.com'

export class HttpService {
    instance
    dispatch
    getState

    static setStore(dispatch, getState) {
        this.dispatch = dispatch
        this.getState = getState
    }

    static getInstance() {
        if (!this.instance) {
            return this.init()
        }
        return this.instance
    }

    static init() {
        this.instance = axios.create({
            baseURL: BASE_URL,
            headers: {
                Accept: 'application/json',
                'X-Custom-Header': 'applicationId',
                'Content-Type': 'application/json'
            }
        })

        this.instance.interceptors.request.use((request) => {
            console.log('INTERCEPTOR REQUEST SUCCESS', request);
            const accessToken = selectAccessToken(this.getState())
            request.headers.common['Authorization'] = `Bearer ${accessToken}`
            return request
        }, (error) => {
            return Promise.reject(error)
        })

        this.instance.interceptors.response.use((response) => {
            console.log('INTERCEPTOR RESPONSE SUCCESS', response)
            return response
        }, (error) => {
            console.log('INTERCEPTOR RESPONSE ERROR', error)
            if (error.response.status === 401) {
                this.dispatch(authActions.logout())
            }

            if (error.response.status === 404) {
                console.log('NOT FOUND');
            }
            return Promise.reject(error);
        });

        return this.instance
    }
}
