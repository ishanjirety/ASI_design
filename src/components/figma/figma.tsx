import React from "react";
import { Box, Text } from "../utility";

import './figma.styles.css'

export const FigmaCss = () => {
    return <Box className="figma_overview_container">
        <Card left="0px" />
        <Card left="20px" />
        <Card left="30px" />
        <Card left="40px" />
        <Card left="50px" />
    </Box>;
};


function Card({ left }: { left: any }) {
    return <Box className="card_container" left={left}>
        <Box className="img-container">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4163 5.83337C7.89979 5.83337 5.83294 7.90023 5.83294 10.4167V17.2364C4.37052 18.0053 3.33294 19.4947 3.33294 21.25V30.2116C3.3109 30.3458 3.3109 30.4827 3.33294 30.6169V32.9167C3.3306 33.0823 3.3612 33.2468 3.42296 33.4005C3.48473 33.5542 3.57643 33.6941 3.69274 33.8121C3.80904 33.93 3.94763 34.0237 4.10046 34.0877C4.25328 34.1516 4.41728 34.1845 4.58294 34.1845C4.7486 34.1845 4.9126 34.1516 5.06542 34.0877C5.21824 34.0237 5.35683 33.93 5.47314 33.8121C5.58944 33.6941 5.68115 33.5542 5.74291 33.4005C5.80468 33.2468 5.83528 33.0823 5.83294 32.9167V31.6667H34.1663V32.9167C34.1639 33.0823 34.1945 33.2468 34.2563 33.4005C34.3181 33.5542 34.4098 33.6941 34.5261 33.8121C34.6424 33.93 34.781 34.0237 34.9338 34.0877C35.0866 34.1516 35.2506 34.1845 35.4163 34.1845C35.5819 34.1845 35.7459 34.1516 35.8988 34.0877C36.0516 34.0237 36.1902 33.93 36.3065 33.8121C36.4228 33.6941 36.5145 33.5542 36.5762 33.4005C36.638 33.2468 36.6686 33.0823 36.6663 32.9167V30.6218C36.6883 30.4876 36.6883 30.3507 36.6663 30.2165V21.25C36.6663 19.4947 35.6287 18.0053 34.1663 17.2364V10.4167C34.1663 7.90023 32.0994 5.83337 29.5829 5.83337H10.4163ZM10.4163 8.33337H29.5829C30.7481 8.33337 31.6663 9.25152 31.6663 10.4167V16.6667H29.9996V16.25C29.9996 13.7336 27.9328 11.6667 25.4163 11.6667H23.3329C22.0122 11.6667 20.8388 12.2544 19.9996 13.1592C19.1604 12.2544 17.987 11.6667 16.6663 11.6667H14.5829C12.0665 11.6667 9.99961 13.7336 9.99961 16.25V16.6667H8.33294V10.4167C8.33294 9.25152 9.25108 8.33337 10.4163 8.33337ZM14.5829 14.1667H16.6663C17.8315 14.1667 18.7496 15.0849 18.7496 16.25V16.6667H12.4996V16.25C12.4996 15.0849 13.4178 14.1667 14.5829 14.1667ZM23.3329 14.1667H25.4163C26.5815 14.1667 27.4996 15.0849 27.4996 16.25V16.6667H21.2496V16.25C21.2496 15.0849 22.1678 14.1667 23.3329 14.1667ZM7.91627 19.1667H11.2496H28.7496H32.0829C33.2481 19.1667 34.1663 20.0849 34.1663 21.25V29.1667H5.83294V21.25C5.83294 20.0849 6.75108 19.1667 7.91627 19.1667Z" fill="#F6802A" />
            </svg>
        </Box>
        <Box className="text_container">
            <Text className="primary">Current Occupancy</Text>
            <Text className="secondary" display="flex"><Box fontWeight={700} mr="0.5rem">180 {" "}</Box> of 250</Text>
        </Box>
    </Box>
}