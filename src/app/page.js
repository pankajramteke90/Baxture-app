import Image from "next/image";
import User from "./component/User";
import { MantineProvider } from "@mantine/core";

export default function Home() {
  return (
 
     <MantineProvider>
     <User/>
   </MantineProvider>
  );
}
