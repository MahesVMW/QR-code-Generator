import {useState} from "react";

export const Qrcode =() =>{
    const [img,setImg]= useState("");
    const [loading,setloading] = useState(false);
    const [qrData,setqrData]= useState("");
    const [qrSize,setQrSize] = useState("");
    async function generateQR(){
        setloading(true);
        try{
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        }
        catch(error){
            console.error("error generating Qr code,error");
        }
        finally{
            setloading(false);
        }
    }
    function downloadQR(){
     fetch(img)
     .then((response) => response.blob())
     .then((blob)=>{
        const link = document.createElement("a");
        link.href=URL.createObjectURL(blob);
        link.download="qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
     }).catch((error) =>{
        console.error("error downloading QR code",error);
     })
    }
    return <div className="app-container">
        <h3>QR code Generator</h3>
        {loading && <p>Please wait...</p>}
        {img && <img src={img} className="qr-code-image" />}
     <div>
        <label htmlFor="dataInput" className="input-label">Data for qrcode</label>
        <input type="text" id="datainput" value={qrData} placeholder="Enter Data for qrcode" onChange={(e) =>setqrData(e.target.value)} />
        <label htmlFor="sizeInput" className="input-label">image size  for qrcode</label>
        <input type="text" id="sizeInput" value={qrSize} placeholder="Enter size for qrcode"  onChange={(e) =>setQrSize(e.target.value)}/>
        <button className="Generate-btn" disabled={loading} onClick={generateQR}>Generate QR code</button>
        <button className="Download-btn" onClick={downloadQR}>Download QR code</button>
     </div>
     <p>Designed by Mahes</p>
    </div>
}
