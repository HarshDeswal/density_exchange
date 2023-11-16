import React, { useEffect, useRef, useState } from "react";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const VacancySection = () => {
  const refHeading = useRef(null);
  const [move, setMove] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (refHeading.current) {
        const rect = refHeading.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (rect.top < viewportHeight * 0.7 && rect.bottom >= 0) {
          setMove(true);
        } else {
          setMove(false);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Box width={"60%"} margin={"auto"} mt={"50px"}>
      <Heading
        ref={refHeading}
        className={move ? "heading-animation" : ""}
        mb={"30px"}
      >
        Open Vacancies
      </Heading>

      <Flex justifyContent={"space-between"}>
        <Box width={"30%"} bgColor={"#FEFBEC"} borderRadius={"10px"} p={"24px"}>
          <Text fontWeight={"bold"} mb={"6px"} fontSize={"17px"}>
            Senior Full Stack Engineer
          </Text>
          <ul style={{ fontSize: "13px", mb: "6px", marginLeft: "12px" }}>
            <li>Full time position</li>
            <li>Burlin or remote</li>
            <li>$65-85k, 0.5-1.50% equity share option</li>
          </ul>
        </Box>
        <Box width={"30%"} bgColor={"#FEFBEC"} borderRadius={"10px"} p={"24px"}>
          <Text fontWeight={"bold"} mb={"6px"} fontSize={"17px"}>
            Senior Full Stack Engineer
          </Text>
          <ul style={{ fontSize: "13px", mb: "6px", marginLeft: "12px" }}>
            <li>Full time position</li>
            <li>Burlin or remote</li>
            <li>$65-85k, 0.5-1.50% equity share option</li>
          </ul>
        </Box>

        <Box width={"30%"} bgColor={"#FEFBEC"} borderRadius={"10px"} p={"24px"}>
          <Text fontWeight={"bold"} mb={"6px"} fontSize={"17px"}>
            Senior Full Stack Engineer
          </Text>
          <ul style={{ fontSize: "13px", mb: "6px", marginLeft: "12px" }}>
            <li>Full time position</li>
            <li>Burlin or remote</li>
            <li>$65-85k, 0.5-1.50% equity share option</li>
          </ul>
        </Box>
      </Flex>
    </Box>
  );
};

export default VacancySection;