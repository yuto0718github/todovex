"use client";

import { Button } from "@/components/ui/button";
import { sighInAction } from "@/actions/auth-actions";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>ToDoVex</h1>
    <form action ={sighInAction}>
    <Button>Log in</Button>
    </form>
    </main>
    </>
  );
}
