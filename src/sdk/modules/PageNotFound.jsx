export const PageNotFound=()=>{
    return(<>
        <div id="err404">
            <div className="center">
                <div id="brdplogo"></div>
                <h1>Error 404</h1>
                <h3>Page Not Found</h3>
                <hr/>
                <p>
                    This page does not exist. Try rerouting to 
                    another page or go <a href="/">home</a>.
                </p><br/>
                <button className="b1" onClick={(e)=>{e.preventDefault();history.back();}}>Go Back</button><br/>
                <button className="b1" onClick={(e)=>{e.preventDefault();location.href="/";}}>Go Home</button>
            </div>
        </div>
    </>);
}