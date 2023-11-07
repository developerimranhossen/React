import Brother from "../Brother/Brother"
import Sister from "../Brother/Sister/Sister"
import Myself from "../Myself/Myself"


function Father({ring}) {
  return (
    <div>
        <h1>Father</h1>
        <section className="flex">
            <Myself ring={ring}/>
            <Sister/>
            <Brother/>
        </section>
    </div>
  )
}

export default Father