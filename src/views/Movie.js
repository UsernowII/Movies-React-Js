export default function Movie(props) {

    return (
        <div className="movie-item-style-2">
            <img src={props.img}alt="" />
            <div className="mv-item-infor">
                <h6><a href="moviesingle.html"> 
                {props.title} 
                </a></h6>
                <p className="rate">
                    <i className="ion-android-star"></i>
                    <span>{props.score}</span></p>
                <p className="describe">{props.children}</p>
                
                <p className="run-time"> {props.runtime}    .     <span>{props.rating}</span>    .     <span>Release:{props.release}</span></p>
                
                <p>Director: <a href="#">{props.director}</a></p>
                <p>Stars: {props.stars}</p>
            </div>
        </div>
    );
}