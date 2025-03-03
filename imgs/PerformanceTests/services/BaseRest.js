import http from 'k6/http'
import {baseService} from './baseService.js'

export class baseRest extends baseService {
    constructor(base_uri){
        super(base_uri);
    }
}