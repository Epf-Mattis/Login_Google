"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!session ? (
        <>
          <h2>Welcome to SkillTracker</h2>
          <button
            onClick={() => signIn("google")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4285F4",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login with Google
          </button>
        </>
      ) : (
        <>
          <h2>Welcome, {session.user.name}!</h2>
          <p>You are logged in as {session.user.email}</p>
          <img
            src={session.user.image}
            alt="Profile"
            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
          />
          <br />
          <button
            onClick={() => signOut()}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#DB4437",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}
