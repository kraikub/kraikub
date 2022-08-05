import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { useUser } from "../contexts/User";

const Navbar: FC = () => {
  const { user } = useUser();
  console.log(user)
  return (
    <Flex
      position="sticky"
      top={0}
      left={0}
      right={0}
      py="12px"
      bg="white"
      zIndex={35}
      border="solid #00000010"
      borderWidth="0 0 1px 0"
      px="20px"
      minH="50px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading size="sm" fontWeight={600} fontFamily="Inter" color="black">
        Katrade Accounts{" "}
        <Box as="span" color="katrade.600">
          for KU 💚
        </Box>
      </Heading>
      {user ? (
        <ButtonGroup>
          <IconButton
            aria-label="profile-icon"
            bg="transparent"
            _hover={{ bg: undefined }}
            _active={{ bg: undefined }}
          >
            <Avatar
              name={`${user?.firstNameEn} ${user?.lastNameEn}`}
              size="sm"
            />
          </IconButton>
        </ButtonGroup>
      ) : null}
    </Flex>
  );
};
export default Navbar;
