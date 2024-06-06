import React, { useState } from 'react';
import { Box, Divider, Flex, IconButton, Text, Button } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const iframeStyles = {
    minWidth: '400px',
    width: '100%',
    minHeight: '500px',
    border: 'none',
    borderRadius: '8px',
};

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
                    boxSize="60px"
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
                    >
                        <Text fontSize="md" fontWeight="bold" m={2}>
                            Sofia, a IA da Soter
                        </Text>
                        <Divider mb={2} />
                        <iframe
                            src='https://webchat.botframework.com/embed/my-python-bot-test?s=JE3MEW0m5GQ.ksDLOdPuQCZZa9vHvDdU4pn1J3JecwO8OAVuFrE1zBg'
                            style={iframeStyles}
                        ></iframe>
                    </Box>
                    <Flex alignItems="center">
                        <CloseIcon color="red" fontSize="sm" />
                        <Text m={2} mr={3} color="white" fontSize="sm">Fechar</Text>
                        <Button
                            onClick={toggleChat}
                            size="sm"
                            borderRadius="full"
                            boxSize="60px"
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
