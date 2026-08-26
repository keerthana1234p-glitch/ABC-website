function Status() {
    let Concentrating=true;
    return(
        <div>
            {Concentrating ? <h2>Good</h2>: <h2>Try to concentrate</h2>}
        </div>
    )
}
export default Status;