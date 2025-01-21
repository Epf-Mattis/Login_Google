import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <button onClick={() => signIn("google")}>Login with Google</button>
      ) : (
        <>
          <p>Welcome, {session.user.name}</p>
          <button onClick={() => signOut()}>Logout</button>
        </>
      )}
    </div>
  );
}
