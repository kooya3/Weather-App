"use client";

import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <main className="text-6xl">
      <Card>
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 13.2, Tailwind CSS, Tremor 2.0 + More!
        </Subtitle>
        
        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-[#394F68] to"> 
          
        </Card>
      </Card>
    </main>
  );
}
