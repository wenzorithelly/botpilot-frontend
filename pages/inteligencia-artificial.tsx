import { Box } from '@chakra-ui/react';
import { StepOne } from '../components/StepOne';
import Head from 'next/head'

export default function InteligenciaArtificial() {
    return (
        <>
            <Head>
                    <title>Botpilot</title> {/* Change the title here */}
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
