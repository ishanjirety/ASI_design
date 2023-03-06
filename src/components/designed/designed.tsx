import React from "react";
import { BedRoom } from "../icons/bedroom";
import { Box, Span, Text } from "../utility";

const Card = () => {
    return <Box minWidth="248px" color="#173165" gridColumnGap="16px" display="flex" width="max-content" borderRadius="4px" alignItems="center" border="1px solid #EDEDEF" py='1.5rem' px="1rem">
        <BedRoom />
        <Box >
            <Text fontWeight={500} my="0.25rem">Current Occupancy</Text>
            <Box width="max-content" display="flex" alignItems="center" justifyContent="center">
                <Text width="max-content" my="0rem" display="flex" style={{ alignItems: "center" }}><Span mr="0.5rem" fontSize={"1.5rem"} fontWeight={700}>180 </Span>of 250</Text>
            </Box>
        </Box>
    </Box >
}

export const Designed = () => {
    return <Box gridColumnGap="24px" display="flex" justifyContent="center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </Box>;
};


