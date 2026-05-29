import { MediaFormValues } from "../../types/formTypes";
import { ImageFill } from "react-bootstrap-icons";

type Props = {
    data:MediaFormValues |  null
}

export default function SubmittedMedia({data}:Props){

    // obviosly need backend to send actual uploads etc but can make images & video by links have an img or video preview

    return (
    <div>
        <h4>Media Added Sucessfully <ImageFill/></h4>
        <p>Date - {data?.date}</p>
        <p>Title - {data?.title}</p>
        <p>Media - {data?.type}</p>
        {(data?.link)?<p>Link - {data.link}</p>:null}
        {(data?.file)?<p>File - {/* Need to see the returned object */}</p>:null}
    </div>)
}