import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "../components/sharedstyles";
import Cards from "../components/cards";
import Link from "next/link";
export default function Home() {
  return (
    <Container>
      <h1 style={{ color: "blueviolet" }}>Hello, Tilen Babnik</h1>
      <Link href="/UserSignUp">
        <h1>Please Press here to get the UserSignUp Details</h1>
      </Link>
      <Link href="/UserLoginActivity">
        <h1 style={{ color: "red" }}>
          Please Press here to get the UserLoginActivity Details
        </h1>
      </Link>
      <Link href="/SubscriptionUpgrades">
        <h1 style={{ color: "blue" }}>
          Please Press here to get the SubscriptionUpgrade Details
        </h1>
      </Link>
    </Container>
  );
}
