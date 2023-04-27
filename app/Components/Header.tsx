import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
    return (
        <Box as='section' pb={"28"}>
            <Box textAlign={["left", "left", "center"]} as={"section"} color={"gray.50"} bgColor={"purple.600"} pt={"98px"} pb={"218px"} px={"8"}>
                <Heading fontWeight={"extrabold"} fontSize={["3xl", "3xl", "5xl"]}>Simple pricing for your business</Heading>
                <Text fontWeight={"medium"} fontSize={["lg", "lg", "2xl"]} pt={"4"}>Plans that are carefully crafted to suit your business.</Text>
            </Box>
        </Box>
    )
}
