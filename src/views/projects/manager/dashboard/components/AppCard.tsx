import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import background from "../../../../../../public/bg-1.png";

interface AppCardProps {
  app: Application;
}

const AppCard: FC<AppCardProps> = ({ app }) => {
  const router = useRouter();
  return (
    <Box
      w="full"
      maxW={["full", "320px"]}
      borderStyle="solid"
      borderWidth={1}
      borderColor="gray.300"
      bg="white"
      rounded={6}
      overflow="hidden"
      cursor="pointer"
      onClick={() => router.push(`/projects/manager/${app.clientId}`)}
      transition="300ms ease"
      _hover={{
        boxShadow: "0px 3px 7px 2px #00000020"
      }}
    >
      <Box
        h="80px"
        bg="katrade.main"
        backgroundImage={background.src}
        backgroundSize="cover"
        backgroundPosition="center"
      ></Box>
      <Box px={4} py={6}>
        <Heading size="md">{app.appName}</Heading>
        <Text opacity={0.6} mt={2}>
          {app.appDescription}
        </Text>
      </Box>
    </Box>
  );
};
export default AppCard;
