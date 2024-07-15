const ShutdownScreen=()=>{
    return(<div id="shutdownScreen" onClick={(e)=>{
        e.preventDefault();
        window.location.reload();
    }}>
        <div id="ssIcon"></div>
        <h1>It is now safe to turn off your computer...</h1>
    </div>);
}
export default ShutdownScreen;