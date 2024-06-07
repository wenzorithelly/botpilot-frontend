// components/StepOne.tsx
import React from 'react';
import { Flex } from '@chakra-ui/react';
import ChatWidget from './ChatWidget';

export function StepOne() {
    return (
        <Flex flexDir={'column'} gap={4}>
            <ChatWidget />
        </Flex>
    );
}
