import { Box, HStack, Stack, Icon, StackProps, Text } from '@chakra-ui/react'
import React, { ElementType } from 'react'
import { MoneyBackGuranteeIcon, HastleFreeIcon, MonthlySubscriptionIcon } from '../icons/Icon'

interface FeatureProps extends StackProps {
    icon: ElementType
}

function Feature(props: FeatureProps) {
    const { icon, children, ...rest } = props

    return (
        <HStack {...rest} spacing={"6"} align={"start"}>
            <Icon as={icon} boxSize={["8", "8", "12"]} />
            <Text fontSize={"lg"} fontWeight={"bold"}>{children}</Text>
        </HStack>
    )
}


export default function Features() {
    return (
        <Box as='section' m={"auto"} maxW={"5xl"} pt={"20"} pb={"8"}>
            <Stack direction={["column", "column", "row"]} px={"12"} spacing={"5"}>
                <Feature icon={MoneyBackGuranteeIcon}>30 days money back Guarantee</Feature>
                <Feature icon={HastleFreeIcon}>No setup fees 100% hassle-free</Feature>
                <Feature icon={MonthlySubscriptionIcon}>No monthly subscription Pay once and for all</Feature>
            </Stack>
        </Box>
    )
}
