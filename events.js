class EventEmitter{
    constructor() {
        this.escuchadores= {};
    }
    on(event, escuchador){
        if(typeof this.escuchadores[event]=== "undefined"){
            this.escuchadores[event]= [];
        }
        this.escuchadores[event].push(escuchador);
    }
    emit (event, ...args){
        if( this.escuchadores[event] instanceof Array){
            for (var i=0; i<this.escuchadores[event].lenght; i++){
                this.escuchadores[event][i](...args);
            }
        }
    }
}

exports = module.exports = EventEmitter;
