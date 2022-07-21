import React from "react"
import Container from "../../../common/Container"
import Header from "../../../common/Header"
import Section from "../../../common/Section"


const Author =() => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Szymon Leśko"
            body={
                <>Cześć! Nazywam się <strong>Szymon</strong> i mam <strong>22</strong> lata. Moją ogromną pasją jest muzyka, od 4 lat
                gram na <strong>gitarze elektrycznej</strong> a od niedawna na <strong>keyboardzie</strong>. Oprócz muzyki
                bardzo miłuję się w sporcie. Aktywnie uprawia sport już od 5 lat.
                Moim nowym zainteresowaniem od niedawna stało się programowanie, a moim celem jest
                praca jako programista front-end.😁</>
            }
        />
    </Container>
);

export default Author;