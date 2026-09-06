import Container from "../Container"
import CareerCard from "./CareerCard"

function CareerProposition() {
  return (
    <div className="mb-30">
        <Container>
            <h1 className="text-h1 mb-8">
                See our open positions 
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <CareerCard title="Full Stack Developer"/>
                <CareerCard title="Testing Engineer"/>
                <CareerCard title="Hr Manager+"/>
                <CareerCard title="Full Stack Developer"/>
                <CareerCard title="Testing Engineer"/>
            </div>
        </Container>
    </div>
  )
}

export default CareerProposition
