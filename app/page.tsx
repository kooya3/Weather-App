"use client";

import { Card, Divider, Subtitle, Text } from "@tremor/react";


export default function Home() {
  return (
    <main className="text-6xl">
      <Card>
        <Text>Weather AI</Text>
        <Subtitle>
          Powered by OpenAI, Next.js 13.2, Tailwind CSS, Tremor 2.0 + More!
        </Subtitle>
      <h1>Let's build a GPT-4 Weather App</h1>
      </Card>
    </main>
  );
}
