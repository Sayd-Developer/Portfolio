'use client'

import { Navbar, StyledLink } from "./style"
import Image from "next/image"

import GitHub from "../../assets/icon/iconGitHub.svg"
import Instragram from "../../assets/icon/iconInstagram.svg"
import Linkedin from "../../assets/icon/iconLinkedin.svg"

export default function navbar() {
    return (
        <Navbar>
            <ul className="names">
                <li><StyledLink href="/pages/project">Project</StyledLink></li>
                <li><StyledLink href="/">Home</StyledLink></li>
                <li><StyledLink href="/pages/experience">Experience</StyledLink></li>
            </ul>
            <ul className="pictures">
                <StyledLink href="https://github.com/Sayd-Developer" target="_blank">
                    <Image src={GitHub} alt="GitHUb" width={20} height={20} />
                </StyledLink>
                <StyledLink href="">
                    <Image src={Instragram} alt="Instagram" width={20} height={20} />
                </StyledLink>
                <StyledLink href="https://www.linkedin.com/in/sayd-karam-a092ba248/" target="_blank">
                    <Image src={Linkedin} alt="Linkedin" width={20} height={20} />
                </StyledLink>
            </ul>
        </Navbar>
    )
}