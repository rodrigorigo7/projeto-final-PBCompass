export class baseService {
    constructor (base_uri){
        this.base_uri = base.base_uri;
        this.response;
    }

    getResponse(){
        return this.response;
    }
}