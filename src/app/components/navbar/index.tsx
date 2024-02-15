import { Navbar, StyledLink } from "./style"
import Image from "next/image"

import GitHub from "../../assets/icon/iconGitHub.svg"
import Instragram from "../../assets/icon/iconInstagram.svg"
import Linkedin from "../../assets/icon/iconLinkedin.svg"


export default function navbar() {
    return (
        <Navbar>
            <ul className="names">
                <li><StyledLink href="/projects" >Project</StyledLink></li>
                <li><StyledLink href="/">Home</StyledLink></li>
                <li><StyledLink href="/experience">Experience</StyledLink></li>
            </ul>
            <ul className="pictures">
                <StyledLink href="/">
                    <Image src={GitHub} alt="GitHUb" width={20} height={20} />
                </StyledLink>
                <StyledLink href="/">
                    <Image src={Instragram} alt="Instagram" width={20} height={20} />
                </StyledLink>
                <StyledLink href="/">
                    <Image src={Linkedin} alt="Linkedin" width={20} height={20} />
                </StyledLink>
            </ul>
        </Navbar>
    )
}