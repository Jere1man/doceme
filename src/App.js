// peritia-ai-prototype: Basic MVP
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [interest, setInterest] = useState('');
  const [goal, setGoal] = useState('');
  const [experience, setExperience] = useState('');
  const [generatedCourse, setGeneratedCourse] = useState(null);

  const handleSubmit = async () => {
    // For prototype: use static mock data. Replace with API call to GPT in future.
    const mockCourse = {
      course: `Intro to ${interest} for ${goal}`,
      weeks: [
        {
          week: 1,
          topic: `Foundations of ${interest}`,
          lectures: ["What is it?", "Why it matters"],
          assignments: ["Read article", "Write summary"],
          lab: "Do an intro hands-on activity"
        },
        {
          week: 2,
          topic: `${interest} Tools and Environment Setup`,
          lectures: ["Installing tools", "First project"],
          assignments: ["Try the tool", "Hello world project"],
          lab: "Build your first example"
        }
      ]
    };
    setGeneratedCourse(mockCourse);
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold">Peritia AI: Learn for All</h1>
      <p className="text-lg">Let AI build your learning path based on your goals and interests.</p>

      <Card>
        <CardContent className="space-y-4 pt-4">
          <Input placeholder="Your interest (e.g. AI, Music Theory)" value={interest} onChange={e => setInterest(e.target.value)} />
          <Input placeholder="Your goal (e.g. build a robot, write music)" value={goal} onChange={e => setGoal(e.target.value)} />
          <Input placeholder="Your experience level (e.g. beginner)" value={experience} onChange={e => setExperience(e.target.value)} />
          <Button onClick={handleSubmit}>Generate Course</Button>
        </CardContent>
      </Card>

      {generatedCourse && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">{generatedCourse.course}</h2>
          {generatedCourse.weeks.map((week, idx) => (
            <Card key={idx}>
              <CardContent className="pt-4">
                <h3 className="text-xl font-bold">Week {week.week}: {week.topic}</h3>
                <p><strong>Lectures:</strong> {week.lectures.join(", ")}</p>
                <p><strong>Assignments:</strong> {week.assignments.join(", ")}</p>
                <p><strong>Lab:</strong> {week.lab}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
