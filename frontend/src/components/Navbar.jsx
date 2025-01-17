import { Box, Button, Container, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateUserModal from "./CreateUserModal";

const Navbar = ({ setUsers }) => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Container maxW={"400px"}>
			<Box px={4} my={4} borderRadius={5} bg={useColorModeValue("gray.200", "gray.700")}>
				<Flex
					h='16'
					alignItems={"center"}
					justifyContent={"center"} // Center all content horizontally
					gap={6}
				>
					{/* Centered Content */}
					<Flex alignItems={"center"} justifyContent={"center"} gap={3}>
					</Flex>
					<Flex gap={3} alignItems={"center"}>
						<Button onClick={toggleColorMode}>
							{colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
						</Button>
						<CreateUserModal setUsers={setUsers} buttonText="Add New Friend" />
					</Flex>
				</Flex>
			</Box>
		</Container>
	);
};
export default Navbar;
