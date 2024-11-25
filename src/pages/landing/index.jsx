import React from "react";
import { Container } from "@mui/material";
import Index from "../../components/LandingPage";

export default function LandingPage() {

    return (
        <>
            <Container
                maxWidth="1600"
                sx={{
                    maxWidth: "1600px",

                }}

                style={{ padding: 0 }}
            >
                <Index />
            </Container>

        </>


    );
}

