import React, { useState } from 'react';
import { Box, Divider, Flex, IconButton, Text, Button } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const ChatWidget = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <Box position="fixed" bottom="20px" right="20px" zIndex="1000">
            {!isChatOpen ? (
                <IconButton
                    aria-label="Open chat"
                    onClick={toggleChat}
                    size="lg"
                    borderRadius="full"
                    boxSize={{ base: "50px", md: "60px" }} // Adjust size for smaller screens
                    backgroundImage="url('/sofia.webp')"
                    backgroundSize="130%"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    colorScheme="transparent"
                />
            ) : (
                <Flex direction="column" align="flex-end">
                    <Box
                        bg="white"
                        boxShadow="lg"
                        borderRadius="md"
                        overflow="hidden"
                        mb={2}
                        w={{ base: "300px", md: "400px" }} // Adjust width for smaller screens
                    >
                        <Text fontSize="md" fontWeight="bold" m={2}>
                            Sofia, a IA da Soter
                        </Text>
                        <Divider mb={2} />
                        <iframe
                            src='https://webchat.botframework.com/embed/my-python-bot-test?s=JE3MEW0m5GQ.ksDLOdPuQCZZa9vHvDdU4pn1J3JecwO8OAVuFrE1zBg'
                            style={{
                                minWidth: '100%',
                                width: '100%',
                                minHeight: '400px', // Adjust height for smaller screens
                                border: 'none',
                                borderRadius: '8px',
                            }}
                        ></iframe>
                    </Box>
                    <Flex alignItems="center">
                        <CloseIcon color="red" fontSize="sm" />
                        <Text m={2} mr={3} color="white" fontSize="sm">Fechar</Text>
                        <Button
                            onClick={toggleChat}
                            size="sm"
                            borderRadius="full"
                            boxSize={{ base: "50px", md: "60px" }} // Adjust size for smaller screens
                            backgroundImage="url('/sofia.webp')"
                            backgroundSize="130%"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            colorScheme="transparent"
                            aria-label="Close chat"
                        >
                        </Button>
                    </Flex>
                </Flex>
            )}
        </Box>
    );
};

export default ChatWidget;
