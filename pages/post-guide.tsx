import { Heading } from "@chakra-ui/core";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";

export default function PostGuide() {
  return (
    <Layout>
      <Header>{}</Header>

      <Heading size="xl" m={6}>
        Post Guide
      </Heading>
    </Layout>
  );
}
