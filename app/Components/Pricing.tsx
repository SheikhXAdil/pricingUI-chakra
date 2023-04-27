import { Box, Button, Flex, HStack, Heading, Icon, Stack, StackProps, Text } from '@chakra-ui/react'
import React from 'react'
import { CheckMarkIcon } from '../icons/Icon'

export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props
    return (
        <HStack as={"li"} spacing={"5"} {...rest} align={"flex-start"}>
            <Icon as={CheckMarkIcon} w='22px' h='22px' flexShrink={0} />
            <Text>{children}</Text>
        </HStack>
    )
}

export default function Pricing() {
    return (
        <Box as='section' mx="6">
            <Box as='section' maxW={"5xl"} margin={"auto"} mt={"-64"} bg={"white"} overflow={"hidden"} borderRadius={"xl"} boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"}>
                <Flex direction={["column", "column", "row"]}>
                    <Box as='section' textAlign={["center"]} p={"12"} bg={"purple.100"}>
                        <Text fontSize={"2xl"} fontWeight={"extrabold"}>Premium PRO</Text>
                        <Heading as={"h3"} fontSize={["4xl", "5xl", "5xl",]} mt={"4"}>$329</Heading>
                        <Text color={"#171923"} fontSize={"lg"} fontWeight={"medium"} mt={"2"}>billed just once</Text>
                        <Button colorScheme='purple' size={"lg"} width={["2xs", "2xs", "xs"]} mt={"6"}>Get Started</Button>
                    </Box>

                    <Box as='section' p={"12"} fontSize={"lg"}>
                        <Text>Access these features when you get this pricing package for your business.</Text>
                        <Stack as={"ul"} spacing={"5"} pt={"6"}>
                            <ListItem>International calling and messaging API</ListItem>
                            <ListItem>Additional phone numbers</ListItem>
                            <ListItem>Automated messages via Zapier</ListItem>
                            <ListItem>24/7 support and consulting</ListItem>
                        </Stack>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}
