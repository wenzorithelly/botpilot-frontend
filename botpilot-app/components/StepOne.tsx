// components/StepOne.tsx
import React from 'react';
import { Flex } from '@chakra-ui/react';
import ChatWidget from './ChatWidget';
// Remove framer-motion import
// import pkg from 'framer-motion';
// const { motion } = pkg;

export function StepOne() {
    return (
        <Flex flexDir={'column'} gap={4}>
            <ChatWidget />
        </Flex>
    );
}
