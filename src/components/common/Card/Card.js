import './Card.css';

export function Card({
    pictureUrl,
    pictureAltText,
    cardHeader,
    cardBody,
    cardFooter,
    onCloseHandler,
}) {
    return(
        <div className="card">
            { pictureUrl && <div className="card-img">
                <img src={ pictureUrl } alt="pictureAltText"></img>
            </div> }

            { cardBody && <div className="card-body">
                { cardBody }
            </div> }
        </div>
    )
}