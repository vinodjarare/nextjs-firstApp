import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>hay this is first project</h1>
      <p>
        {"this is best framework on top of the react and react is best library in the world".repeat(
          10
        )}
      </p>
    </div>
  );
}
