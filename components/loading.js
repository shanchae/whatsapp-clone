/* eslint-disable @next/next/no-img-element */
import { Circle } from 'better-react-spinkit'

function Loading() {
    return (
        <center style={{ display: "grid", placeItems: "center", height: "100vh"}}>
            <div>
                <img src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png" alt="" 
                style={{ marginBottom: 10 }}
                height={200}
                />
                <Circle color="#3cbc28" size={60} />
            </div>
        </center>
    )
}

export default Loading
