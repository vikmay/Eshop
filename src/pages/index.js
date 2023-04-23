import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Test from "@/components/test/test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Test text="hello world" /> */}
      <Test>
        <p>Test</p>
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      </Test>
    </>
  );
}
