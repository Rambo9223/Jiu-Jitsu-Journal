import { Button } from "react-bootstrap"

type Props = {
    handler:()=>void
}

export default function ContinueNewLog({handler}:Props){

    return <Button onClick={handler}>Continue</Button>
}