
import { Button } from "@/components/ui/button";
import UserProfile from "@/components/userprofile";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>ToDoVex</h1>
    <UserProfile></UserProfile>
    <Button>Logged in</Button>
    </main>
    </>
  );
}
