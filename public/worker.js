onmessage=function(E){
    const response=eval(E.data)()
    this.postMessage(response)   
}