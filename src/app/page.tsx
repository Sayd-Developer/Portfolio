'use client'

import { Container } from "./style"
import Navbar from "../app/components/navbar"
import { GlobalStyles } from "./styles/GlobalStyles"
import { StyleSheetManager } from 'styled-components';


export default function page() {
    return (
        <Container>
            <StyleSheetManager>
                <GlobalStyles />
                <Navbar />
            </StyleSheetManager>
        </Container>
    )
}