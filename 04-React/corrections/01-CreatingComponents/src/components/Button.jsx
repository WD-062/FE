const AlertButton = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };
    return <button className="p-2 m-2 bg-blue-200 rounded-xl" onClick={handleClick}>Alert</button>
}

export default AlertButton;