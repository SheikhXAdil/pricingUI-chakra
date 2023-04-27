'use client'
import { Link } from '@chakra-ui/next-js'
import { Heading, Text } from '@chakra-ui/react'


export default function Practice() {
    return (
        <>
            <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
                About
            </Link>
            <Heading>This is a heading in chakra</Heading>
            <Text>This is some text</Text>
        </>
    )
}