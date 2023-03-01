
function MensajeError({Mensaje}) {
    return (
        <div className="bg-red-500 text-white text-center p-3 mb-5 uppercase rounded-lg font-bold " >
            {/* <p>Hay campos vacios</p> */}
            <p>{Mensaje}</p>
        </div>
    )
}

export default MensajeError