import { useState } from "react";
import { Box, Container, VStack, Text, Heading, Image, SimpleGrid, Link, Flex, Spacer, HStack, Button, Input, InputGroup, InputRightElement, Select, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";

const Index = () => {
  const [filters, setFilters] = useState({
    priceRange: "",
    brand: "",
    ratings: ""
  });

  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", description: "Description of Product 1", price: 100, brand: "Brand A", ratings: 4, image: "https://via.placeholder.com/300" },
    { id: 2, name: "Product 2", description: "Description of Product 2", price: 200, brand: "Brand B", ratings: 5, image: "https://via.placeholder.com/300" },
    { id: 3, name: "Product 3", description: "Description of Product 3", price: 150, brand: "Brand A", ratings: 3, image: "https://via.placeholder.com/300" }
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const filteredProducts = products.filter(product => {
    return (
      (filters.priceRange === "" || (filters.priceRange === "low" && product.price < 150) || (filters.priceRange === "high" && product.price >= 150)) &&
      (filters.brand === "" || product.brand === filters.brand) &&
      (filters.ratings === "" || product.ratings >= parseInt(filters.ratings))
    );
  });

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">ElectroShop</Heading>
        <InputGroup maxW="400px" mr={4}>
          <Input placeholder="Search for products..." />
          <InputRightElement children={<FaSearch />} />
        </InputGroup>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for all things electronics</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Filter Section */}
      <Box as="section" py={10}>
        <Heading size="xl" textAlign="center" mb={10}>Filter Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={10}>
          <Box>
            <Text mb={2}>Price Range</Text>
            <Select name="priceRange" value={filters.priceRange} onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="low">Below $150</option>
              <option value="high">$150 and above</option>
            </Select>
          </Box>
          <Box>
            <Text mb={2}>Brand</Text>
            <Select name="brand" value={filters.brand} onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="Brand A">Brand A</option>
              <option value="Brand B">Brand B</option>
            </Select>
          </Box>
          <Box>
            <Text mb={2}>Ratings</Text>
            <Select name="ratings" value={filters.ratings} onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="3">3 stars & above</option>
              <option value="4">4 stars & above</option>
              <option value="5">5 stars</option>
            </Select>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={10}>
        <Heading size="xl" textAlign="center" mb={10}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading size="md" mb={2}>{product.name}</Heading>
                <Text mb={4}>{product.description}</Text>
                <Text mb={4}>${product.price}</Text>
                <Text mb={4}>Brand: {product.brand}</Text>
                <Text mb={4}>Ratings: {product.ratings} stars</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10} mt={10}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box>
              <Heading size="md" mb={4}>ElectroShop</Heading>
              <Text>© 2023 ElectroShop. All rights reserved.</Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Contact Us</Heading>
              <Text>Email: support@electroshop.com</Text>
              <Text>Phone: (123) 456-7890</Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Follow Us</Heading>
              <HStack spacing={4}>
                <Link href="#"><FaFacebook size="24" /></Link>
                <Link href="#"><FaTwitter size="24" /></Link>
                <Link href="#"><FaInstagram size="24" /></Link>
              </HStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;