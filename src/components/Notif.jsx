function Notif(props) {
    return (
        <div className="container-notif">
            {props.currState ? props.currState : ''}
        </div>
    )
}

export default Notif;