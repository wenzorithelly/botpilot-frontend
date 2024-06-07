import { Box } from '@chakra-ui/react';
import { StepOne } from '../components/StepOne';
import Head from 'next/head'

export default function InteligenciaArtificial() {
    return (
        <>
            <Head>
                <title>Sofia, a inteligência artificial da Soter</title>
                <meta property="og:title" content="Sofia, a inteligência artificial da Soter"/>
                <meta property="og:image" content="https://botpilot-frontend.vercel.app/sofia.webp"/>
                <meta property="og:url" content="https://botpilot-frontend.vercel.app/inteligencia-artificial"/>
                <meta property="og:type" content="website"/>
            </Head>
            <Box
                bgImage="url('/soter.png')"
                bgSize="cover"
                bgPosition="center"
                minH="100vh"
                m={0}
                p={0}
                width="100vw"
            >
                <Box><StepOne/></Box>
            </Box>
        </>
    );
}
