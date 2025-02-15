import Image from "next/image";
import { Container } from "react-bootstrap"

function BackImg() {
    return (
        <Container fluid className="position-relative bg-black" style={{ height: "60vh" }}>
            {/* Background Image */}
            <Image
                src="/cs-2340-team-website/world_map_dots.svg"
                alt="Background"
                fill
                className="object-fit-cover"
            />

            {/* Text Overlay */}
            <div className="position-absolute top-50 start-50 translate-middle text-center">
                <h1 className="text-white display-1 fw-bold oswald">CS 2340 TEAM 4</h1>
                <hr className="text-primary my-4 opacity-100"/>
            </div>
        </Container>
    );
}

export default BackImg;