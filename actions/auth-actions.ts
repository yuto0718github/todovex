'use server';
import { signIn } from "@/auth";

export async function sighInAction() {
    await signIn("google", {redirectTo: "/loggedin"});
}